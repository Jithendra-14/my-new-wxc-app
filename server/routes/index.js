const express = require("express");
const { getBlobFromAzure } = require("../utils/azureHelpers");
const router = express.Router();

router.get("/*", async (req, res, next) => {
  const blobName = req.params[0];
  if (!blobName) {
    return res.status(400).json({ error: "Image URL is required" });
  }
  try {
    const downloaded = await getBlobFromAzure(blobName);
    res.status(200).send(downloaded);
  } catch (error) {
    res.status(500).json({ message: "Error fetching image" });
  }
});

module.exports = router;
