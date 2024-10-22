function nGen_init() {
  const body = document.getElementById("templateBody");
  const tableRows = [];
  nGenJSON.map(function (block) {
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
        const { image1, image2, image1desc, image2desc } = block;
        element = sbsImageInnerBlock(
          image1,
          image2,
          image1desc,
          image2desc,
          background,
          url
        );
        break;
      case layoutType.logoImage:
        element = logoImageRow(alt, path, width, padding);
        break;
      case layoutType.textPassage:
        const { content, status, segment } = block;
        element = textInnerBlock(
          headingColor,
          heading,
          content,
          bodyColor,
          status,
          statusColor,
          background,
          segment
        );
        break;
      case layoutType.MultiColumnTextPassage:
        const { column, data } = block;
        element = mColTextInnerBlock(headingColor, heading, column, data);
        break;
      case layoutType.textAndImageSideSide:
        const { desc, status: statusEl, segmentImg } = block;
        element = textAndImageSideBySide(
          heading,
          desc,
          statusColor,
          url,
          path,
          statusEl,
          headingColor,
          bodyColor,
          background,
          width,
          padding,
          segmentImg
        );
        break;
      case layoutType.introHeaderSideBySide:
        const { desc: desc3, desc1, desc2 } = block;
        element = introHeaderSideBySide(
          heading,
          desc3,
          statusColor,
          headingColor,
          bodyColor,
          desc1,
          desc2
        );
        break;
      case layoutType.introHeaderTopAndBottom:
        const { heading: head, description: desc20 } = block;
        element = introHeaderTopAndBottom(
          head,
          statusColor,
          headingColor,
          bodyColor,
          desc20
        );
        break;

      case layoutType.textSideBySide:
        const { description, textAlign } = block;
        element = textSideBySide(background, bodyColor, description, textAlign);
        break;

      default:
        break;
    }
    tableRows.push(element);
  });

  body.innerHTML = tableRows.join("");
}
