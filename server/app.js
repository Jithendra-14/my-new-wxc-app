var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var newslettersRouter = require("./routes/newsletters");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/static", express.static(path.join(__dirname, "/mounts/web")));

app.use("/api", indexRouter);
app.use("/api/users", usersRouter);
app.use("/api/newsletters", newslettersRouter);

module.exports = app;
