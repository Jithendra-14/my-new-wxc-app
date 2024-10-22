const { Router } = require("express");
const { existsSync, mkdirSync, readFileSync } = require("fs");
const path = require("path");
const {
  createNewHTML,
  root_path,
  sectionsArr,
  txtFilePath,
} = require("../utils/helpers.js");
const {
  getBlobFromAzure,
  NEWSLETTERS_FOLDER,
} = require("../utils/azureHelpers.js");

const api = Router();

api.get("/html", async (req, res) => {
  const { type, name } = req.query;
  const folderName = `${type}/${name}`;
  const htmlFilePath = `${NEWSLETTERS_FOLDER}/${folderName}/index.html`;

  try {
    console.log(`Fetching base HTML file from: ${htmlFilePath}`);

    // Fetch the base HTML file and convert Buffer to string
    let htmlFileBuffer = await getBlobFromAzure(htmlFilePath);
    let htmlFile = htmlFileBuffer.toString("utf-8");

    // Fetch content for each section asynchronously
    const updatedHTML = await sectionsArr.reduce(
      async (accPromise, fileName) => {
        const acc = await accPromise;

        // Construct the path for the section content
        const filePath = txtFilePath(`${type}/${name}`, fileName);

        // Fetch the section content
        const sectionBuffer = await getBlobFromAzure(filePath);
        const sectionContent = sectionBuffer.toString("utf-8");

        // Replace the section placeholder with the content
        return acc.replace(`{${fileName}}`, sectionContent);
      },
      Promise.resolve(htmlFile) // Initial promise with base HTML file
    );

    // Send the updated HTML response
    res.format({
      html() {
        res.status(200).send(updatedHTML);
      },
    });
  } catch (err) {
    // Handle the error and send a response
    res
      .status(500)
      .json({ message: "Error fetching HTML content", error: err.message });
  }
});

api.get("/json", async (req, res) => {
  const { type, name } = req.query;
  const folderName = path.join(type, name);

  try {
    const json = await getBlobFromAzure(
      `${NEWSLETTERS_FOLDER}/${folderName}/data.json`
    );

    const JSONResp = JSON.parse(json.toString());
    if (!JSONResp) {
      res.status(200).send({});
    }
    // Send the JSON response
    res.send(JSONResp);
  } catch (err) {
    res.status(200).send({});
  }
});

module.exports = api;
