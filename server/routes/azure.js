const { Router } = require("express");
const router = Router();
const {
  CONTAINER_NAME,
  getBlobFromAzure,
  uploadJSONToAzure,
  generateSASToken,
} = require("../utils/helpers");

router.get("/get-json/:blobName", async (req, res) => {
  const { blobName } = req.params;

  try {
    const downloaded = await getBlobFromAzure(CONTAINER_NAME, blobName);

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

router.get("/getSAS", (requ, res) => {
  try {
    const getSASToken = generateSASToken();
    res.status(200).send({ token: getSASToken });
  } catch {
    res.status(500).send("Unable to generate the SAS Token");
  }
});

module.exports = router;
