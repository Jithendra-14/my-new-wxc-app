const { layoutType } = require("./constants.js");
const {
  imageInnerBlock,
  sbsImageInnerBlock,
  logoImageRow,
} = require("./imageBlock.js");
const {
  textInnerBlock,
  mColTextInnerBlock,
  PillarsSegments,
  SegmentBanner,
  textAndImageSideBySide,
} = require("./textBlock.js");

function generator(block) {
  let element = "";
  let {
    alt,
    padding,
    width,
    path,
    headingColor,
    statusColor,
    bodyColor,
    heading,
    background,
    url,
  } = block;

  switch (block.type) {
    case layoutType.imageBanner:
      element = imageInnerBlock(alt, path, width, padding, background, url);
      break;
    case layoutType.SBSImage:
      const { image1, image2 } = block;
      element = sbsImageInnerBlock(image1, image2, background, url);
      break;
    case layoutType.logoImage:
      element = logoImageRow(alt, path, width, padding);
      break;
    case layoutType.textPassage:
      const { content, img, segment, fontSize } = block;
      element = textInnerBlock(
        headingColor,
        heading,
        content,
        bodyColor,
        img,
        statusColor,
        background,
        segment,
        url,
        padding,
        fontSize
      );
      break;
    case layoutType.MultiColumnTextPassage:
      const { column, data } = block;
      element = mColTextInnerBlock(headingColor, heading, column, data);
      break;
    case layoutType.pillarBanner:
      const { image, description } = block;
      element = PillarsSegments(
        image,
        heading,
        description,
        padding,
        bodyColor
      );
      break;
    case layoutType.segmentBanner:
      element = SegmentBanner(background, heading, headingColor, path, padding);
      break;
    case layoutType.textAndImageSideSide:
      const { desc, segmentName, segmentImg } = block;
      element = textAndImageSideBySide(
        heading,
        desc,
        statusColor,
        url,
        path,
        segmentName,
        headingColor,
        bodyColor,
        width,
        segmentImg
      );
      break;
    default:
      break;
  }
  return element;
}

module.exports = {
  generator,
};
