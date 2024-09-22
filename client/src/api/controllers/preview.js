import { Router } from "express";
import { root_path, sectionsArr, txtFilePath } from "../helpers.js";
import path from "path";
import { readFileSync } from "fs";
const api = Router();

api.get("/", function (req, res) {
  const { type, name } = req.query;
  const filePath = path.join(type, name, "index.html");
  const html = readFileSync(`${root_path}/${filePath}`, "utf8");
  let updatedHTML = sectionsArr.reduce(
    (acc, fileName) =>
      acc.replace(
        `{${fileName}}`,
        readFileSync(txtFilePath(`${type}/${name}`, fileName), "utf8")
      ),
    html
  );
  updatedHTML = updatedHTML.replaceAll(
    "tmp/images/",
    `/${type}/${name}/tmp/images/`
  );
  res.format({
    html() {
      res.send(updatedHTML);
    },
  });
});
export default api;
