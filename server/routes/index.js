const express = require("express");
const { getBlobFromAzure, CONTAINER_NAME } = require("../utils/helpers");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/*", async (req, res, next) => {
  const blobName = req.params[0];
  if (!blobName) {
    return res.status(400).json({ error: "Image URL is required" });
  }
  try {
    const downloaded = await getBlobFromAzure(CONTAINER_NAME, blobName);
    res.status(200).send(downloaded);
  } catch (error) {
    res.status(500).json({ message: "Error fetching image" });
  }
});

module.exports = router;
