var express = require("express");
var cors = require("cors");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index.js");
var usersRouter = require("./routes/users.js");
var newslettersRouter = require("./routes/newsletters.js");
var generatorContentRouter = require("./routes/newsletter-generator-content");
var generatorFolderRouter = require("./routes/newsletter-generator-folder");
var generatorPreviewRouter = require("./routes/newsletter-generator-preview");
var azureRouter = require("./routes/azure.js");
var dataRouter = require("./routes/data.js");

var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static("build"));
app.use("/api", indexRouter);
app.use("/api/users", usersRouter);
app.use("/api/newsletters/content", generatorContentRouter);
app.use("/api/newsletters/folder", generatorFolderRouter);
app.use("/api/newsletters/preview", generatorPreviewRouter);
app.use("/api/newsletters", newslettersRouter);
app.use("/api/azure", azureRouter);
app.use("/api/data", dataRouter);
// This should come after all other routes
app.use("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

module.exports = app;
