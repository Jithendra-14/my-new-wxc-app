const { Router } = require("express");
const { existsSync, mkdirSync, readFileSync } = require("fs");
const path = require("path");
const {
  createNewHTML,
  root_path,
  sectionsArr,
  txtFilePath,
  getJSONFromAzure,
  CONTAINER_NAME,
  NEWSLETTERS_FOLDER,
  delay,
} = require("../utils/helpers.js");
const { generator } = require("../utils/generator.js");
const { SECTIONS, SAS_TOKEN } = require("../utils/constants.js");
const { banner, banner_text } = require("../utils/index.js");

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
      data: { text: "Successfully Created Folder with the Mentioned Name" },
    });
  } catch (err) {
    res.send(err);
  }
});

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

api.get("/html", async (req, res) => {
  const { type, name } = req.query;
  const folderName = path.join(type, name);

  let htmlFile = readFileSync(`utils/index.html`, "utf8");
  try {
    await delay(500);
    const json = await getJSONFromAzure(
      CONTAINER_NAME,
      `${NEWSLETTERS_FOLDER}/${folderName}/data.json`
    );

    const JSONResp = JSON.parse(json.toString());
    if (!JSONResp) {
      throw new Error("Unavailable Data");
    }

    // Update HTML Title
    htmlFile = htmlFile.replace("{title}", name);

    // Update HTML header Details
    if (!JSONResp.header) {
      htmlFile = htmlFile.replace("{header}", "");
    }
    if (JSONResp.header) {
      const { image, title, description } = JSONResp.header;
      const headerImgHTML = generator(
        banner(SECTIONS.HEADER, image.url + "?" + SAS_TOKEN, image.altText)
      );
      const headerTextHTML = generator(
        banner_text(SECTIONS.HEADER, title, description)
      );
      htmlFile = htmlFile.replace("{header}", headerImgHTML + headerTextHTML);
    }

    // Update HTML Footer Details
    if (!JSONResp.footer) {
      htmlFile = htmlFile.replace("{footer}", "");
    }
    if (JSONResp.footer) {
      const { image } = JSONResp.footer;
      const footerImgHTML = generator(
        banner(SECTIONS.FOOTER, image.url + "?" + SAS_TOKEN, image.altText)
      );
      htmlFile = htmlFile.replace("{footer}", footerImgHTML);
    }

    // Set Content-Type to text/html
    res.setHeader("Content-Type", "text/html");

    // Send the HTML response
    res.send(htmlFile);
  } catch (err) {
    htmlFile = htmlFile.replace("{title}", "");
    htmlFile = htmlFile.replace("{header}", "");
    htmlFile = htmlFile.replace("{segments}", "");
    htmlFile = htmlFile.replace("{footer}", "");
    res.setHeader("Content-Type", "text/html");

    // Send the HTML response
    res.status(200).send(htmlFile);
  }
});

api.get("/json", async (req, res) => {
  const { type, name } = req.query;
  const folderName = path.join(type, name);

  try {
    const json = await getJSONFromAzure(
      CONTAINER_NAME,
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
