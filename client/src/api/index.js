import express, { json } from "express";
import cors from "cors";
import folderRouter from "./controllers/folder.js";
import contentRouter from "./controllers/content.js";
import previewRouter from "./controllers/preview.js";
import { actual_root_path } from "./helpers.js";
const app = express();
const port = 3100;

app.use(cors());
app.use(json()); // for json
app.use(express.static("a"));
app.use(express.static(actual_root_path));

app.use("/folder", folderRouter);
app.use("/content", contentRouter);
app.use("/preview", previewRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
