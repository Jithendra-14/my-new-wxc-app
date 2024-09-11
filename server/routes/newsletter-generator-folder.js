const { Router } = require("express");
const { existsSync, mkdirSync } = require("fs");
const {
  createNewHTML,
  root_path,
  uploadJSONToAzure,
  getJSONFromAzure,
  NEWSLETTERS_FOLDER,
} = require("../utils/helpers.js");

const api = Router();

api.post("/create", async function (req, res) {
  const { type, name } = req.body;
  const folderName = `${type}/${name}`;
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
        }
      );
    }
  } catch (err) {
    if (err.code === "BlobNotFound") {
      await uploadJSONToAzure(
        CONTAINER_NAME,
        `${NEWSLETTERS_FOLDER}/${folderName}/data.json`,
        {}
      );
    }
  } finally {
    res.send({
      status: 200,
      data: { text: "Successfully Created Folder with the Mentioned Name" },
    });
  }
});

module.exports = api;
