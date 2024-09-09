const { Router } = require("express");
const router = Router();
const { blobServiceClient } = require("../utils/constants");
const {
  CONTAINER_NAME,
  getJSONFromAzure,
  uploadJSONToAzure,
} = require("../utils/helpers");

router.get("/get-json/:blobName", async (req, res) => {
  const { blobName } = req.params;

  try {
    const downloaded = await getJSONFromAzure(CONTAINER_NAME, blobName);

    res.json(JSON.parse(downloaded.toString()));
  } catch (error) {
    console.error("Error downloading blob:", error.message);
    res.status(500).send("Error downloading blob");
  }
});

router.post("/upload-json/*", async (req, res) => {
  const jsonData = req.body;
  const blobName = req.params[0];

  try {
    const uploaded = await uploadJSONToAzure(
      CONTAINER_NAME,
      blobName,
      jsonData
    );

    res.status(201).send("Blob uploaded successfully");
  } catch (error) {
    console.error("Error uploading blob:", error.message);
    res.status(500).send("Error uploading blob");
  }
});

module.exports = router;
