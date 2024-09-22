import { banner, banner_text, sbs_image } from "./utils/index.js";
import { generator } from "./utils/generator.js";
import {
  appendFileSync,
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  rmdirSync,
  unlinkSync,
  writeFileSync,
} from "fs";
import { SECTIONS } from "./utils/constants.js";
import path from "path";

// path: "public/web/de/newsletter", // public folder location
export const actual_root_path = "public/web/de/newsletter";
export const root_path = "a";
export const images_path = "tmp/images";
export const sectionsArr = ["header", "segments", "footer"];

export const createHeaderHTML = (props) => {
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

export const createNewHTML = (folderPath) => {
  writeFileSync(
    `${folderPath}/index.html`,
    readFileSync(`src/api/utils/index.html`, "utf8")
  );
  sectionsArr.forEach((section) => {
    writeFileSync(`${folderPath}/${section}.txt`, "");
  });
};

export const updateHTMLTitle = (folderPath, title) => {
  const htmlData = readFileSync(`${folderPath}/index.html`, "utf8");
  //update title
  const updatedHTML = htmlData.replace("{title}", title);

  writeFileSync(`${folderPath}/index.html`, updatedHTML);
};

export const updateHTMLHeader = (folderPath, headerHtml) => {
  const htmlData = readFileSync(`${folderPath}/index.html`, "utf8");
  //update header img, header title, header description
  const updatedHTML = htmlData.replace("{header}", headerHtml);

  writeFileSync(`${folderPath}/index.html`, updatedHTML);
};

export const createFooterHTML = (props) => {
  const { footer_imageName, footer_img } = props;
  const footerImageHTML = generator(
    banner(SECTIONS.FOOTER, footer_img.filename, footer_imageName)
  );

  return footerImageHTML;
};

export const updateHTMLFooter = (folderPath, footerHtml) => {
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

export const createSegmentHTML = (props) => {
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

export const createSegmentHeaderHTML = (props) => {
  const { header_imageName, header_image } = props;
  const ImageHTML = generator(
    banner(SECTIONS.SEGMENT, header_image.filename, header_imageName)
  );
  return ImageHTML;
};

export const createSegmentLayoutsHTML = (props) => {
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

export const addSegmentHTML = (folderPath, htmlText) => {
  appendFileSync(`${folderPath}/segments.txt`, "\n" + htmlText);
};

export const createSectionsHTMLFile = (folderPath, fileName, html) => {
  writeFileSync(`${folderPath}/${fileName}.txt`, html);
};

export const updateHTMLSegements = (folderPath) => {
  const htmlData = readFileSync(`${folderPath}/index.html`, "utf8");
  const segmentsHtml = readFileSync(`${folderPath}/segments.txt`, "utf8");
  const updatedHTML = htmlData.replace("{segments}", segmentsHtml);
  writeFileSync(`${folderPath}/index.html`, updatedHTML);
  unlinkSync(`${folderPath}/segments.txt`);
};

export const createSegmentLayoutContent = (props) => {
  const { header, description } = props;
  const layoutContent = generator(
    banner_text(SECTIONS.SEGMENT, header, description)
  );
  return layoutContent;
};

export const createSegmentLayoutImages = (props) => {
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

export const copyFolderToPublicFolder = () => {
  copyFolder(root_path, actual_root_path);
  removeFolder(root_path);
};

export const txtFilePath = (folderName, fileName) =>
  path.join(root_path, folderName, `${fileName}.txt`);

// Function to combine individual txt fiels to html file
export const combineFilesToIndexHTMLFile = (folderName) => {
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
