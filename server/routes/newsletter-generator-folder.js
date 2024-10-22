const { Router } = require("express");
const { existsSync, mkdirSync } = require("fs");
const {
  createNewHTML,
  root_path,
  NEWSLETTERS_FOLDER,
  CONTAINER_NAME,
  sectionsArr,
} = require("../utils/helpers.js");
const {
  getBlobFromAzure,
  uploadJSONToAzure,
  uploadTxtFileToAzure,
} = require("../utils/azureHelpers.js");

const api = Router();

api.post("/create", async function (req, res) {
  const { type, name } = req.body;
  const folderName = `${type}/${name}`;
  const folderPath = `${NEWSLETTERS_FOLDER}/${folderName}`;
  try {
    await getBlobFromAzure(`${folderPath}/data.json`);
  } catch (err) {
    if (err.code === "BlobNotFound") {
      uploadJSONToAzure(`${folderPath}/data.json`, {});
      createNewHTML(folderPath);
    }
  } finally {
    res.send({
      status: 200,
      data: { text: "Successfully Created Folder with the Mentioned Name" },
    });
  }
});

module.exports = api;
