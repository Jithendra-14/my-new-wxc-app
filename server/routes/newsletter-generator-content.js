const { Router } = require("express");
const { existsSync, mkdirSync, unlinkSync } = require("fs");
const multer = require("multer");
const { diskStorage } = multer;
const { extname } = require("path");
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
  uploadFileToBlob,
  uploadFileToAzure,
  createHeaderJSON,
  createFooterJSON,
  createSegmentJSON,
} = require("../utils/helpers.js");

const api = Router();

const ImagesDestination = function (req, file, cb) {
  const folderPath = `${root_path}/${req.body.folderName}/tmp/images`;
  if (!existsSync(folderPath)) {
    mkdirSync(folderPath, { recursive: true });
  }
  cb(null, folderPath);
};

const ImageFileName = function (req, file, cb) {
  const fileName =
    req.body[file.fieldname + "Name"] + extname(file.originalname);
  cb(null, fileName);
};

// Initialize multer middleware
const ImageStorage = diskStorage({
  destination: ImagesDestination,
  filename: ImageFileName,
});

const upload = multer({ dest: `${root_path}/` });

api.post("/header", upload.any(), async (req, res) => {
  const { header_imageName } = req.body;
  const [header_image] = req.files;

  if (!header_image) {
    return res.status(400).send("No file uploaded.");
  }
  try {
    const blobUrl = await uploadFileToAzure(req, header_image);

    createHeaderJSON({ ...req.body, blobUrl });

    res
      .status(200)
      .send(`File uploaded to Azure Blob Storage as ${header_imageName}`);
  } catch (err) {
    res.status(500).send("Error uploading data.");
  }
});

api.post("/footer", upload.any(), async (req, res) => {
  const { footer_imageName } = req.body;
  const [footer_image] = req.files;
  if (!footer_image) {
    return res.status(400).send("No file uploaded.");
  }
  try {
    const blobUrl = await uploadFileToAzure(req, footer_image);

    createFooterJSON({ ...req.body, blobUrl });

    res
      .status(200)
      .send(`File uploaded to Azure Blob Storage as ${footer_imageName}`);
  } catch (err) {
    res.status(500).send("Error uploading data.");
  }
});

api.post("/copy", upload.any(), (req, res) => {
  const { folderName } = req.body;
  combineFilesToIndexHTMLFile(folderName);
  copyFolderToPublicFolder();
  res.send("Data Copied successfully");
});

api.post("/segment", upload.any(), async (req, res) => {
  const { folderName, isLast, isFirst, ...rest } = req.body;
  const imgFiles = req.files.reduce((acc, obj) => {
    acc[obj.fieldname] = obj;
    return acc;
  }, {});

  // const folderPath = `${root_path}/${folderName}`;

  // if (isFirst === "true") {
  //   createSectionsHTMLFile(folderPath, "segments", "");
  // }
  // addSegmentHTML(folderPath, createSegmentHTML({ ...rest, ...imgFiles }));
  // res.send("Data uploaded successfully");

  try {
    await createSegmentJSON({ ...rest, ...imgFiles });

    res
      .status(200)
      .send(`File uploaded to Azure Blob Storage as ${footer_imageName}`);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error uploading data.");
  }
});

module.exports = api;
