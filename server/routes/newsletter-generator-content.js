const { Router } = require("express");
const { existsSync, mkdirSync, unlinkSync } = require("fs");
const multer = require("multer");
const {
  root_path,
  createHeaderHTML,
  createFooterHTML,
  updateHTMLTitle,
  createSegmentHTML,
  addSegmentHTML,
  copyFolderToPublicFolder,
  createSectionsHTMLFile,
  combineFilesToIndexHTMLFile,
  createHeaderJSON,
  createFooterJSON,
  createSegmentJSON,
  createSectionsJSON,
  addSegmentJSON,
} = require("../utils/helpers.js");
const {
  uploadImageToAzure,
  NEWSLETTERS_FOLDER,
  uploadAllImages,
} = require("../utils/azureHelpers.js");

const api = Router();

const upload = multer({ dest: `${root_path}/` });

api.post("/header", upload.any(), async (req, res) => {
  const { header_imageName, folderName } = req.body;
  const [header_image] = req.files;
  const folderPath = `${NEWSLETTERS_FOLDER}/${folderName}`;

  if (!header_image) {
    return res.status(400).send("No file uploaded.");
  }
  try {
    const blobUrl = await uploadImageToAzure(req, header_image);

    createHeaderJSON({ ...req.body, blobUrl });
    updateHTMLTitle(folderPath, folderName.split("/")[1]);
    createSectionsHTMLFile(
      folderPath,
      "header",
      createHeaderHTML({ ...req.body, blobUrl })
    );
    res
      .status(200)
      .send(`File uploaded to Azure Blob Storage as ${header_imageName}`);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error uploading data.");
  }
});

api.post("/footer", upload.any(), async (req, res) => {
  const { footer_imageName, folderName } = req.body;
  const [footer_image] = req.files;
  const folderPath = `${NEWSLETTERS_FOLDER}/${folderName}`;
  if (!footer_image) {
    return res.status(400).send("No file uploaded.");
  }
  try {
    const blobUrl = await uploadImageToAzure(req, footer_image);

    createFooterJSON({ ...req.body, blobUrl });
    createSectionsHTMLFile(
      folderPath,
      "footer",
      createFooterHTML({ ...req.body, blobUrl })
    );
    res
      .status(200)
      .send(`File uploaded to Azure Blob Storage as ${footer_imageName}`);
  } catch (err) {
    res.status(500).send("Error uploading data.");
  }
});

api.post("/copy", upload.any(), async (req, res) => {
  const { folderName } = req.body;
  await combineFilesToIndexHTMLFile(folderName);
  copyFolderToPublicFolder();
  res.send("Data Copied successfully");
});

api.post("/segment", upload.any(), async (req, res) => {
  const { folderName, isLast, isFirst, ...rest } = req.body;
  const imgFiles = req.files.reduce((acc, obj) => {
    acc[obj.fieldname] = obj;
    return acc;
  }, {});

  const blobUrls = await uploadAllImages(req, imgFiles);

  const folderPath = `${NEWSLETTERS_FOLDER}/${folderName}`;

  if (isFirst === "true") {
    await createSectionsHTMLFile(folderPath, "segments", "");
    await createSectionsJSON({ ...req.body, blobUrls });
  }
  await addSegmentHTML(folderPath, createSegmentHTML({ ...rest, ...blobUrls }));
  await addSegmentJSON(folderPath, createSegmentJSON({ ...rest, ...blobUrls }));
  res.send("Data uploaded successfully");
});

module.exports = api;
