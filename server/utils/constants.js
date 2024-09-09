const { BlobServiceClient } = require("@azure/storage-blob");

const layoutType = {
  imageBanner: "IMAGE_BANNER",
  logoImage: "LOGO_IMAGE",
  textPassage: "TEXT_PASSAGE",
  SBSImage: "SBS_IMAGE",
  MultiColumnTextPassage: "Multi_Column_Text_Passage",
  segmentBanner: "SEGMENT_BANNER",
  pillarBanner: "PILLAR_BANNER",
  textAndImageSideSide: "TEXT_AND_IMAGE_SIDE_BY_SIDE",
};

const SECTIONS = {
  HEADER: "header",
  SEGMENT: "segment",
  FOOTER: "footer",
};

const IMAGES_LAYOUT = {
  SBS: "sideBySideImage",
};

const BANNER_WIDTH = 900;

const SECTION_PADDING = {
  [SECTIONS.HEADER]: "0px;",
  [SECTIONS.SEGMENT]: "10px 0px 0px 0px;",
  [SECTIONS.FOOTER]: "20px 0px 0px 0px;",
};

const TITLE_TEXT_COLOR = "#111;";
const CONTENT_TEXT_COLOR = "#000;";
const CONTENT_BG_COLOR = "#FFF;";
const SBS_IMAGE_WIDTH = 400;

const TEXT_PADDING = {
  [SECTIONS.HEADER]: "10px 0px;",
  [SECTIONS.SEGMENT]: "10px 0px 0px 0px;",
};

const IMAGE_PADDING = {
  [IMAGES_LAYOUT.SBS]: "0px 10px;",
};

const TEXT_FONT_SIZE = "17px;";

// Azure Storage Name
const AZURE_STORAGE_NAME = "az2024htmlpages";

const SAS_TOKEN =
  "?sp=r&st=2024-09-05T05:55:45Z&se=2024-09-30T13:55:45Z&spr=https&sv=2022-11-02&sr=c&sig=KZxeAb7xxjUWfholUTK3Ek0ptrLBMNF3NFaxqvTgWY8%3D";

const blobServiceClient = new BlobServiceClient(
  `https://${AZURE_STORAGE_NAME}.blob.core.windows.net${SAS_TOKEN}`
);

module.exports = {
  layoutType,
  SECTIONS,
  IMAGES_LAYOUT,
  BANNER_WIDTH,
  SECTION_PADDING,
  TITLE_TEXT_COLOR,
  CONTENT_TEXT_COLOR,
  CONTENT_BG_COLOR,
  SBS_IMAGE_WIDTH,
  TEXT_PADDING,
  IMAGE_PADDING,
  TEXT_FONT_SIZE,
  blobServiceClient,
  SAS_TOKEN,
  AZURE_STORAGE_NAME,
};
