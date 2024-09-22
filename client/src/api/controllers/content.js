import { Router } from "express";
import { existsSync, mkdirSync } from "fs";
import multer, { diskStorage } from "multer";
import { extname } from "path";
import {
  root_path,
  createHeaderHTML,
  createFooterHTML,
  updateHTMLTitle,
  createSegmentHTML,
  addSegmentHTML,
  copyFolderToPublicFolder,
  createSectionsHTMLFile,
  combineFilesToIndexHTMLFile,
} from "../helpers.js";
var api = Router();

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

const upload = multer({ storage: ImageStorage });

api.post("/header", upload.any(), (req, res) => {
  const { folderName } = req.body;
  const [header_img] = req.files;
  const folderPath = `${root_path}/${folderName}`;
  updateHTMLTitle(folderPath, folderName.split("/")[1]);
  createSectionsHTMLFile(
    folderPath,
    "header",
    createHeaderHTML({ ...req.body, header_img })
  );
  res.send("Data uploaded successfully");
});
api.post("/footer", upload.any(), (req, res) => {
  const { folderName } = req.body;
  const [footer_img] = req.files;
  const folderPath = `${root_path}/${folderName}`;
  createSectionsHTMLFile(
    folderPath,
    "footer",
    createFooterHTML({ ...req.body, footer_img })
  );
  res.send("Data uploaded successfully");
});

api.post("/copy", upload.any(), (req, res) => {
  const { folderName } = req.body;
  combineFilesToIndexHTMLFile(folderName);
  copyFolderToPublicFolder();
  res.send("Data Copied successfully");
});

api.post("/segment", upload.any(), (req, res) => {
  const { folderName, isLast, isFirst, ...rest } = req.body;
  const imgFiles = req.files.reduce((acc, obj) => {
    acc[obj.fieldname] = obj;
    return acc;
  }, {});

  const folderPath = `${root_path}/${folderName}`;

  if (isFirst === "true") {
    createSectionsHTMLFile(folderPath, "segments", "");
  }
  addSegmentHTML(folderPath, createSegmentHTML({ ...rest, ...imgFiles }));
  res.send("Data uploaded successfully");
});

export default api;
