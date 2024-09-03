const { Router } = require("express");
const router = Router();
const { blobServiceClient } = require("../utils/constants");
const path = require("path");

router.get("/sample", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.sendFile(path.join(__dirname, "sample.html"));
});

router.get("/:fileName", async (req, res) => {
  console.log(req.params.fileName);
  res.redirect(path.join(__dirname, "logo192.png"));
});

module.exports = router;
