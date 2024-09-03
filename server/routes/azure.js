const { Router } = require("express");
const router = Router();
const { blobServiceClient } = require("../utils/constants");

router.get("/get-json/:containerName/:blobName", async (req, res) => {
  const { containerName, blobName } = req.params;

  try {
    const containerClient = blobServiceClient.getContainerClient(containerName);
    const blobClient = containerClient.getBlobClient(blobName);

    const downloadBlockBlobResponse = await blobClient.download(0);
    const downloaded = await streamToBuffer(
      downloadBlockBlobResponse.readableStreamBody
    );

    res.json(JSON.parse(downloaded.toString()));
  } catch (error) {
    console.error("Error downloading blob:", error.message);
    res.status(500).send("Error downloading blob");
  }
});

router.post("/upload-json/:containerName/*", async (req, res) => {
  const { containerName } = req.params;
  const jsonData = req.body;
  const blobName = req.params[0];

  try {
    const containerClient = blobServiceClient.getContainerClient(containerName);
    const blobClient = containerClient.getBlockBlobClient(blobName);

    const jsonString = JSON.stringify(jsonData);
    await blobClient.upload(jsonString, jsonString.length);

    res.status(201).send("Blob uploaded successfully");
  } catch (error) {
    console.error("Error uploading blob:", error.message);
    res.status(500).send("Error uploading blob");
  }
});

module.exports = router;
