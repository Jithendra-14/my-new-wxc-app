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
  readFile,
} = require("fs");
const { SECTIONS } = require("./constants.js");
const path = require("path");
const {
  uploadTxtFileToAzure,
  uploadHTMLFileToAzure,
  NEWSLETTERS_FOLDER,
  getBlobFromAzure,
  uploadJSONToAzure,
} = require("./azureHelpers.js");

// path: "public/web/de/newsletter", // public folder location
const actual_root_path = path.join(__dirname, "../../client/public");
const root_path = "a";
const sectionsArr = ["header", "segments", "footer"];

const createHeaderHTML = (props) => {
  const { header_title, header_description, header_imageName, blobUrl } = props;
  const headerImgHTML = generator(
    banner(SECTIONS.HEADER, blobUrl, header_imageName)
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
      name: header_imageName,
    },
  };
  try {
    const downloaded = await getBlobFromAzure(
      `${NEWSLETTERS_FOLDER}/${folderName}/data.json`
    );
    const res = JSON.parse(downloaded.toString());
    if (res) {
      await uploadJSONToAzure(`${NEWSLETTERS_FOLDER}/${folderName}/data.json`, {
        ...JSON.parse(JSON.stringify(res)),
        header: headerJSON,
      });
    }
  } catch (err) {
    if (err.code === "BlobNotFound") {
      await uploadJSONToAzure(`${NEWSLETTERS_FOLDER}/${folderName}/data.json`, {
        header: headerJSON,
      });
    }
  }
};
const createFooterJSON = async (props) => {
  const { footer_imageName, blobUrl, folderName } = props;
  const footerJSON = {
    image: {
      url: blobUrl,
      name: footer_imageName,
    },
  };
  try {
    const downloaded = await getBlobFromAzure(
      `${NEWSLETTERS_FOLDER}/${folderName}/data.json`
    );
    const res = JSON.parse(downloaded.toString());
    if (res) {
      await uploadJSONToAzure(`${NEWSLETTERS_FOLDER}/${folderName}/data.json`, {
        ...JSON.parse(JSON.stringify(res)),
        footer: footerJSON,
      });
    }
  } catch (err) {
    if (err.code === "BlobNotFound") {
      throw new Error(err);
    }
  }
};

const createNewHTML = (folderPath) => {
  const localPath = path.resolve(__dirname, "index.html");
  uploadHTMLFileToAzure(
    `${folderPath}/index.html`,
    readFileSync(`${localPath}`, "utf8")
  );
  sectionsArr.forEach((section) => {
    uploadTxtFileToAzure(`${folderPath}/${section}.txt`, "");
  });
};

const updateHTMLTitle = (folderPath, title) => {
  const localPath = path.resolve(__dirname, "index.html");
  const htmlData = readFileSync(localPath, "utf8");
  //update title
  const updatedHTML = htmlData.replace("{title}", title);

  uploadHTMLFileToAzure(`${folderPath}/index.html`, updatedHTML);
};

const updateHTMLHeader = (folderPath, headerHtml) => {
  const htmlData = readFileSync(`${folderPath}/index.html`, "utf8");
  //update header img, header title, header description
  const updatedHTML = htmlData.replace("{header}", headerHtml);

  writeFileSync(`${folderPath}/index.html`, updatedHTML);
};

const createFooterHTML = (props) => {
  const { footer_imageName, blobUrl } = props;
  const footerImageHTML = generator(
    banner(SECTIONS.FOOTER, blobUrl, footer_imageName)
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
            image: "",
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

const createSectionsJSON = async (props) => {
  const { folderName } = props;
  try {
    const downloaded = await getBlobFromAzure(
      `${NEWSLETTERS_FOLDER}/${folderName}/data.json`
    );
    const res = JSON.parse(downloaded.toString());
    if (res) {
      await uploadJSONToAzure(`${NEWSLETTERS_FOLDER}/${folderName}/data.json`, {
        ...JSON.parse(JSON.stringify(res)),
        segments: [],
      });
    }
  } catch (err) {
    if (err.code === "BlobNotFound") {
      throw new Error(err);
    }
  }
};

const createSegmentJSON = (props) => {
  const { header_imageName, header_image, ...rest } = props;
  const segmentHeaderJSON = {
    image: {
      url: header_image,
      name: header_imageName,
    },
  };
  const segmentLayoutsJSON = createSegmentLayoutsJSON(rest);
  let finalJSON = { header: segmentHeaderJSON, layouts: segmentLayoutsJSON };
  return finalJSON;
};

const createSegmentLayoutsJSON = (props) => {
  const SegmentLayoutsJSON = convertReqDataToNestedData(props);
  return SegmentLayoutsJSON;
};

const addSegmentJSON = async (folderPath, jsonData) => {
  const filePath = `${folderPath}/data.json`;
  try {
    const downloaded = await getBlobFromAzure(filePath);
    const res = JSON.parse(downloaded.toString());
    if (res) {
      const oldData = { ...JSON.parse(JSON.stringify(res)) };
      oldData.segments.push(jsonData);
      await uploadJSONToAzure(filePath, {
        ...JSON.parse(JSON.stringify(oldData)),
      });
    }
  } catch (err) {
    if (err.code === "BlobNotFound") {
      throw new Error(err);
    }
  }
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
    banner(SECTIONS.SEGMENTHEADER, header_image, header_imageName)
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

const addSegmentHTML = async (folderPath, htmlText) => {
  const filePath = `${folderPath}/segments.txt`;
  const sectionBuffer = await getBlobFromAzure(filePath);
  let sectionContent = sectionBuffer.toString("utf-8");
  sectionContent += "\n" + htmlText;
  createSectionsHTMLFile(folderPath, "segments", sectionContent);
};

const createSectionsHTMLFile = async (folderPath, fileName, html) => {
  await uploadTxtFileToAzure(`${folderPath}/${fileName}.txt`, html);
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
    if (images[0].image) {
      layoutImages += generator(
        banner(SECTIONS.SEGMENT, images[0].image, images[0].name, url)
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
  path.join(NEWSLETTERS_FOLDER, folderName, `${fileName}.txt`);

// Function to combine individual txt fiels to html file
const combineFilesToIndexHTMLFile = async (folderName) => {
  const htmlFilePath = `${NEWSLETTERS_FOLDER}/${folderName}/index.html`;

  // Fetch the base HTML file and convert Buffer to string
  let htmlFileBuffer = await getBlobFromAzure(htmlFilePath);
  let htmlFile = htmlFileBuffer.toString("utf-8");

  // Fetch content for each section asynchronously
  const updatedHTML = await sectionsArr.reduce(
    async (accPromise, fileName) => {
      const acc = await accPromise;

      // Construct the path for the section content
      const filePath = txtFilePath(`${folderName}`, fileName);

      // Fetch the section content
      const sectionBuffer = await getBlobFromAzure(filePath);
      const sectionContent = sectionBuffer.toString("utf-8");

      // Replace the section placeholder with the content
      return acc.replace(`{${fileName}}`, sectionContent);
    },
    Promise.resolve(htmlFile) // Initial promise with base HTML file
  );

  const filePath = path.join(root_path, NEWSLETTERS_FOLDER, folderName);
  if (!existsSync(filePath)) {
    mkdirSync(filePath, { recursive: true });
  }
  writeFileSync(`${filePath}/index.html`, updatedHTML, "utf8");
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
  NEWSLETTERS_FOLDER,
  createHeaderJSON,
  createFooterJSON,
  createSectionsJSON,
  createSegmentJSON,
  addSegmentJSON,
  txtFilePath,
};
