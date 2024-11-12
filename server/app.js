var express = require("express");
var cors = require("cors");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index.js");
var imagesRouter = require("./routes/images.js");
var generatorContentRouter = require("./routes/newsletter-generator-content");
var generatorFolderRouter = require("./routes/newsletter-generator-folder");
var generatorPreviewRouter = require("./routes/newsletter-generator-preview");
var azureRouter = require("./routes/azure.js");
var authRouter = require("./routes/auth");
var userRouter = require("./routes/user");
const session = require("express-session");
const { isAuthenticated } = require("./utils/authMiddleware.js");
var app = express();

app.use(cors({
  origin: 'http://localhost:3000', // Replace with your client app's origin
  credentials: true,
}));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
  secret: process.env.EXPRESS_SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
      httpOnly: true,
      secure: false, // set this to true on production
  }
}));


app.use("/api/newsletters/v2/content", generatorContentRouter);
app.use("/api/newsletters/v2/folder", generatorFolderRouter);
app.use("/api/newsletters/v2/preview", generatorPreviewRouter);
app.use("/api/azure", isAuthenticated, azureRouter);
app.use("/api", isAuthenticated, imagesRouter);
app.use("/auth", authRouter);
app.use("/user", isAuthenticated, userRouter);
app.use("/", isAuthenticated, indexRouter);

app.use(isAuthenticated, express.static("build"));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// This should come after all other routes
app.use("/*", isAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

module.exports = app;
