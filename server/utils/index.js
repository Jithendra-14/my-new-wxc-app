const {
  layoutType,
  BANNER_WIDTH,
  TITLE_TEXT_COLOR,
  CONTENT_TEXT_COLOR,
  TEXT_PADDING,
  TEXT_FONT_SIZE,
  SECTION_PADDING,
  CONTENT_BG_COLOR,
  SBS_IMAGE_WIDTH,
  IMAGES_LAYOUT,
  IMAGE_PADDING,
} = require("./constants.js");

function banner(type, fileName, alt, url) {
  return {
    type: layoutType.imageBanner,
    path: fileName,
    alt: alt,
    width: BANNER_WIDTH,
    padding: SECTION_PADDING[type],
    url: url,
  };
}

function banner_text(type, heading, content) {
  return {
    type: layoutType.textPassage,
    headingColor: TITLE_TEXT_COLOR,
    bodyColor: CONTENT_TEXT_COLOR,
    heading: heading,
    content: content,
    padding: TEXT_PADDING[type],
    fontSize: TEXT_FONT_SIZE,
  };
}

function sbs_image(images, url) {
  return {
    type: layoutType.SBSImage,
    background: CONTENT_BG_COLOR,
    url: url,
    image1: {
      path: `${images[0].image}`,
      alt: images[0].name,
      width: SBS_IMAGE_WIDTH,
      padding: IMAGE_PADDING[IMAGES_LAYOUT.SBS],
    },
    image2: {
      path: `${images[1].image}`,
      alt: images[1].name,
      width: SBS_IMAGE_WIDTH,
      padding: IMAGE_PADDING[IMAGES_LAYOUT.SBS],
    },
  };
}

module.exports = {
  banner,
  banner_text,
  sbs_image,
};
