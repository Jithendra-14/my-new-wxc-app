var express = require("express");
var cors = require("cors");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index.js");
var generatorContentRouter = require("./routes/newsletter-generator-content");
var generatorFolderRouter = require("./routes/newsletter-generator-folder");
var generatorPreviewRouter = require("./routes/newsletter-generator-preview");
var azureRouter = require("./routes/azure.js");

var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static("build"));
app.use("/api/newsletters/v2/content", generatorContentRouter);
app.use("/api/newsletters/v2/folder", generatorFolderRouter);
app.use("/api/newsletters/v2/preview", generatorPreviewRouter);
app.use("/api/azure", azureRouter);
app.use("/api", indexRouter);
// This should come after all other routes
app.use("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

module.exports = app;
