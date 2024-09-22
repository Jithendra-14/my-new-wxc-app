import { Router } from "express";
import { existsSync, mkdirSync } from "fs";
import { createNewHTML, root_path } from "../helpers.js";
const api = Router();

api.post("/create", function (req, res) {
  const { type, name } = req.body;
  const folderPath = `${root_path}/${type}/${name}`;
  try {
    if (!existsSync(folderPath)) {
      mkdirSync(folderPath, { recursive: true });
    }
    createNewHTML(folderPath);
    res.send({
      status: 200,
      data: { text: "Succesfully Created Folder with the Mentioned Name" },
    });
  } catch (err) {
    res.send(err);
  }
});

export default api;
