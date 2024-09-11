const { banner, banner_text, sbs_image, images_path } = require("./index.js");
const { generator } = require("./generator.js");
const {
  appendFileSync,
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  rmdirSync,
  unlinkSync,
  writeFileSync,
  createReadStream,
} = require("fs");
const { SECTIONS } = require("./constants.js");
const {
  BlobServiceClient,
  StorageSharedKeyCredential,
  ContainerSASPermissions,
  generateBlobSASQueryParameters,
} = require("@azure/storage-blob");
const path = require("path");
require("dotenv").config(); // Load environment variables
const storageName = process.env.AZURE_STORAGE_NAME;
const storageKey = process.env.AZURE_STORAGE_KEY;

// path: "public/web/de/newsletter", // public folder location
const actual_root_path = "public";
const root_path = "a";
const sectionsArr = ["header", "segments", "footer"];
const CONTAINER_NAME = "data";
const NEWSLETTERS_FOLDER = "newsletters";

const createHeaderHTML = (props) => {
  const { header_title, header_description, header_imageName, header_img } =
    props;
  const headerImgHTML = generator(
    banner(SECTIONS.HEADER, header_img.filename, header_imageName)
  );
  const headerTextHTML = generator(
    banner_text(SECTIONS.HEADER, header_title, header_description)
  );

  return headerImgHTML + headerTextHTML;
};

const createHeaderJSON = async (props) => {
  const {
    header_title,
    header_description,
    header_imageName,
    blobUrl,
    folderName,
  } = props;
  const headerJSON = {
    title: header_title,
    description: header_description,
    image: {
      url: blobUrl,
      altText: header_imageName,
    },
  };
  try {
    const downloaded = await getJSONFromAzure(
      CONTAINER_NAME,
      `${NEWSLETTERS_FOLDER}/${folderName}/data.json`
    );
    const res = JSON.parse(downloaded.toString());
    if (res) {
      await uploadJSONToAzure(
        CONTAINER_NAME,
        `${NEWSLETTERS_FOLDER}/${folderName}/data.json`,
        {
          ...JSON.parse(JSON.stringify(res)),
          header: headerJSON,
        }
      );
    }
  } catch (err) {
    if (err.code === "BlobNotFound") {
      await uploadJSONToAzure(
        CONTAINER_NAME,
        `${NEWSLETTERS_FOLDER}/${folderName}/data.json`,
        {
          header: headerJSON,
        }
      );
    }
  }
};
const createFooterJSON = async (props) => {
  const { footer_imageName, blobUrl, folderName } = props;
  const footerJSON = {
    image: {
      url: blobUrl,
      altText: footer_imageName,
    },
  };
  try {
    const downloaded = await getJSONFromAzure(
      CONTAINER_NAME,
      `${NEWSLETTERS_FOLDER}/${folderName}/data.json`
    );
    const res = JSON.parse(downloaded.toString());
    if (res) {
      await uploadJSONToAzure(
        CONTAINER_NAME,
        `${NEWSLETTERS_FOLDER}/${folderName}/data.json`,
        {
          ...JSON.parse(JSON.stringify(res)),
          footer: footerJSON,
        }
      );
    }
  } catch (err) {
    if (err.code === "BlobNotFound") {
      throw new Error(err);
    }
  }
};

const createNewHTML = (folderPath) => {
  writeFileSync(
    `${folderPath}/index.html`,
    readFileSync(`utils/index.html`, "utf8")
  );
  sectionsArr.forEach((section) => {
    writeFileSync(`${folderPath}/${section}.txt`, "");
  });
};

const updateHTMLTitle = (folderPath, title) => {
  const htmlData = readFileSync(`${folderPath}/index.html`, "utf8");
  //update title
  const updatedHTML = htmlData.replace("{title}", title);

  writeFileSync(`${folderPath}/index.html`, updatedHTML);
};

const updateHTMLHeader = (folderPath, headerHtml) => {
  const htmlData = readFileSync(`${folderPath}/index.html`, "utf8");
  //update header img, header title, header description
  const updatedHTML = htmlData.replace("{header}", headerHtml);

  writeFileSync(`${folderPath}/index.html`, updatedHTML);
};

const createFooterHTML = (props) => {
  const { footer_imageName, footer_img } = props;
  const footerImageHTML = generator(
    banner(SECTIONS.FOOTER, footer_img.filename, footer_imageName)
  );

  return footerImageHTML;
};

const updateHTMLFooter = (folderPath, footerHtml) => {
  const htmlData = readFileSync(`${folderPath}/index.html`, "utf8");
  //update header img, header title, header description
  const updatedHTML = htmlData.replace("{footer}", footerHtml);
  writeFileSync(`${folderPath}/index.html`, updatedHTML);
};

const convertReqDataToNestedData = (input) => {
  const segment_layout = [];

  Object.keys(input).forEach((key) => {
    const match = key.match(
      /^segment_layout_\[(\d+)](_images_\[(\d+)])?_(.+)$/
    );
    if (match) {
      const [_, segmentIndex, imageIndex, imageSubIndex, field] = match;
      const segmentIdx = parseInt(segmentIndex, 10);
      const imgIdx = imageIndex ? parseInt(imageSubIndex, 10) : null;

      if (!segment_layout[segmentIdx]) {
        segment_layout[segmentIdx] = {
          header: "",
          description: "",
          type: "",
          images: [],
          url: "",
        };
      }

      if (imgIdx !== null) {
        if (!segment_layout[segmentIdx].images[imgIdx]) {
          segment_layout[segmentIdx].images[imgIdx] = {
            name: "",
            image: {},
          };
        }

        if (field === "image") {
          segment_layout[segmentIdx].images[imgIdx].image = input[key];
        } else if (field === "imageName") {
          segment_layout[segmentIdx].images[imgIdx].name = input[key];
        }
      } else {
        segment_layout[segmentIdx][field] = input[key];
      }
    }
  });
  return segment_layout;
};

const createSegmentJSON = async (props) => {
  const { header_imageName, header_image, ...rest } = props;

  const segmentHeaderBlobUrl = await uploadFileToAzure(
    { body: { header_imageName } },
    header_image
  );
  const SegmentHeaderJSON = {
    header: {
      image: {
        url: segmentHeaderBlobUrl,
        altText: header_imageName,
      },
    },
  };
  const data = convertReqDataToNestedData(props);
  console.log(data);
};

const createSegmentHTML = (props) => {
  const { header_imageName, header_image, ...rest } = props;
  const segmentHeaderHTML = createSegmentHeaderHTML({
    header_imageName,
    header_image,
  });
  const segmentLayoutsHTML = createSegmentLayoutsHTML(rest);
  let finalHTML = "";
  if (segmentHeaderHTML) {
    finalHTML += segmentHeaderHTML;
  }
  if (segmentLayoutsHTML) {
    finalHTML += segmentLayoutsHTML;
  }
  return finalHTML;
};

const createSegmentHeaderHTML = (props) => {
  const { header_imageName, header_image } = props;
  const ImageHTML = generator(
    banner(SECTIONS.SEGMENT, header_image.filename, header_imageName)
  );
  return ImageHTML;
};

const createSegmentLayoutsHTML = (props) => {
  const data = convertReqDataToNestedData(props);
  let finalHTML = "";
  data.forEach((obj) => {
    const slcHTML = createSegmentLayoutContent(obj);
    if (slcHTML) {
      finalHTML += slcHTML;
    }
    const sliHTML = createSegmentLayoutImages(obj);
    if (sliHTML) {
      finalHTML += sliHTML;
    }
  });
  return finalHTML;
};

const addSegmentHTML = (folderPath, htmlText) => {
  appendFileSync(`${folderPath}/segments.txt`, "\n" + htmlText);
};

const createSectionsHTMLFile = (folderPath, fileName, html) => {
  writeFileSync(`${folderPath}/${fileName}.txt`, html);
};

const updateHTMLSegements = (folderPath) => {
  const htmlData = readFileSync(`${folderPath}/index.html`, "utf8");
  const segmentsHtml = readFileSync(`${folderPath}/segments.txt`, "utf8");
  const updatedHTML = htmlData.replace("{segments}", segmentsHtml);
  writeFileSync(`${folderPath}/index.html`, updatedHTML);
  unlinkSync(`${folderPath}/segments.txt`);
};

const createSegmentLayoutContent = (props) => {
  const { header, description } = props;
  const layoutContent = generator(
    banner_text(SECTIONS.SEGMENT, header, description)
  );
  return layoutContent;
};

const createSegmentLayoutImages = (props) => {
  const { type, images, url } = props;
  let layoutImages = "";
  if (type === "Two Column") {
    layoutImages += generator(sbs_image(images, url));
  } else if (type === "One Column") {
    if (images[0].image.filename) {
      layoutImages += generator(
        banner(SECTIONS.SEGMENT, images[0].image.filename, images[0].name, url)
      );
    }
  }
  return layoutImages;
};

const copyFolderToPublicFolder = () => {
  copyFolder(root_path, actual_root_path);
  removeFolder(root_path);
};

const txtFilePath = (folderName, fileName) =>
  path.join(root_path, folderName, `${fileName}.txt`);

// Function to combine individual txt fiels to html file
const combineFilesToIndexHTMLFile = (folderName) => {
  const filePath = path.join(root_path, folderName, "index.html");
  const html = readFileSync(`${filePath}`, "utf8");
  let updatedHTML = sectionsArr.reduce(
    (acc, fileName) =>
      acc.replace(
        `{${fileName}}`,
        readFileSync(txtFilePath(folderName, fileName), "utf8")
      ),
    html
  );
  writeFileSync(`${filePath}`, updatedHTML, "utf8");
  sectionsArr.forEach((fileName) => {
    unlinkSync(txtFilePath(folderName, fileName));
  });
};

// Function to copy a folder
const copyFolder = (src, dest) => {
  mkdirSync(dest, { recursive: true });

  const entries = readdirSync(src, { withFileTypes: true });

  entries.forEach((entry) => {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyFolder(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
    }
  });
};

const removeFolder = (folderPath) => {
  try {
    removeNestedFolders(folderPath);
  } catch (err) {
    console.log(err.message);
  }
};

const removeNestedFolders = (dirPath) => {
  if (existsSync(dirPath)) {
    readdirSync(dirPath, { withFileTypes: true }).forEach((entry) => {
      const curPath = path.join(dirPath, entry.name);
      if (!entry.isDirectory()) {
        try {
          unlinkSync(curPath);
        } catch (err) {
          console.error("Error while deleting file:", err);
        }
      } else {
        removeNestedFolders(curPath);
      }
    });
    try {
      rmdirSync(dirPath);
    } catch (err) {
      console.error("Error while deleting directory:", err);
    }
  }
};

const generateSASToken = (containerName = CONTAINER_NAME) => {
  const sharedKeyCredential = new StorageSharedKeyCredential(
    storageName,
    storageKey
  );

  const sasOptions = {
    containerName: containerName, // Container where the blob is stored
    expiresOn: new Date(new Date().valueOf() + 3600 * 1000), // Expiration time, e.g., 1 hour
    permissions: ContainerSASPermissions.parse("rwl"), // Permissions, e.g., "r" for read, "w" for write, "l" for list
  };

  // Generate the SAS token parameters
  const sasToken = generateBlobSASQueryParameters(
    sasOptions,
    sharedKeyCredential
  ).toString();

  return sasToken;
};

const SAS_TOKEN = generateSASToken();

const blobServiceClient = new BlobServiceClient(
  `https://${storageName}.blob.core.windows.net?${SAS_TOKEN}`
);

const uploadFileToBlob = async (directoryPath, file) => {
  return new Promise((resolve, reject) => {
    const blobName = getBlobName(file.originalname);
    const stream = getStream(file.buffer);
    const streamLength = file.buffer.length;

    const blobService = azureStorage.createBlobService(
      azureStorageConfig.accountName,
      azureStorageConfig.accountKey
    );
    blobService.createBlockBlobFromStream(
      azureStorageConfig.containerName,
      `${directoryPath}/${blobName}`,
      stream,
      streamLength,
      (err) => {
        if (err) {
          reject(err);
        } else {
          resolve({
            filename: blobName,
            originalname: file.originalname,
            size: streamLength,
            path: `${azureStorageConfig.containerName}/${directoryPath}/${blobName}`,
            url: `${azureStorageConfig.blobURL}${azureStorageConfig.containerName}/${directoryPath}/${blobName}`,
          });
        }
      }
    );
  });
};

const getBlobName = (originalName) => {
  const identifier = Math.random().toString().replace(/0\./, ""); // remove "0." from start of string
  return `${identifier}-${originalName}`;
};

// Get JSON from Azure
const getJSONFromAzure = async (containerName = CONTAINER_NAME, blobName) => {
  const containerClient = blobServiceClient.getContainerClient(containerName);
  const blobClient = containerClient.getBlobClient(blobName);

  const downloadBlockBlobResponse = await blobClient.download(0);
  const downloaded = await streamToBuffer(
    downloadBlockBlobResponse.readableStreamBody
  );
  return downloaded;
};

const streamToBuffer = async (readableStream) => {
  return new Promise((resolve, reject) => {
    const chunks = [];
    readableStream.on("data", (data) => {
      chunks.push(data instanceof Buffer ? data : Buffer.from(data));
    });
    readableStream.on("end", () => {
      resolve(Buffer.concat(chunks));
    });
    readableStream.on("error", reject);
  });
};

// Upload JSON to Azure
const uploadJSONToAzure = async (
  containerName = CONTAINER_NAME,
  blobName,
  jsonData
) => {
  const containerClient = blobServiceClient.getContainerClient(containerName);
  const blobClient = containerClient.getBlockBlobClient(blobName);

  const jsonString = JSON.stringify(jsonData);
  const res = await blobClient.upload(jsonString, jsonString.length);
  return res;
};

// Upload the file to Azure Blob Storage
const uploadFileToAzure = async (req, file) => {
  try {
    const blobName = `${NEWSLETTERS_FOLDER}/${req.body.folderName}/${
      req.body[file.fieldname + "Name"]
    }${path.extname(file.originalname)}`;
    const containerClient =
      blobServiceClient.getContainerClient(CONTAINER_NAME);
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
    const uploadStream = createReadStream(file.path);
    await blockBlobClient.uploadStream(uploadStream, file.size);

    // Construct the URL for the uploaded blob
    const blobUrl = blockBlobClient.url;

    // Remove the file from the server's local storage after upload
    unlinkSync(file.path);

    return blobUrl;
  } catch (err) {
    throw new Error("Error uploading to Azure Blob Storage:" + err.message);
  }
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

module.exports = {
  actual_root_path,
  root_path,
  images_path,
  sectionsArr,
  createHeaderHTML,
  createNewHTML,
  updateHTMLTitle,
  updateHTMLHeader,
  createFooterHTML,
  updateHTMLFooter,
  createSegmentHTML,
  createSegmentHeaderHTML,
  createSegmentLayoutsHTML,
  addSegmentHTML,
  createSectionsHTMLFile,
  combineFilesToIndexHTMLFile,
  copyFolderToPublicFolder,
  generateSASToken,
  uploadFileToBlob,
  CONTAINER_NAME,
  NEWSLETTERS_FOLDER,
  getJSONFromAzure,
  uploadJSONToAzure,
  uploadFileToAzure,
  createHeaderJSON,
  createFooterJSON,
  createSegmentJSON,
  delay,
};
