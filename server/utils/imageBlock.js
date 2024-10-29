function imageBlockTable(alt, path, width, padding, background, url) {
  return `
  <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0"
    class="mcnImageContentContainer" style="min-width:100%;background: ${background};">
    <tbody>
      ${ImageRow({ alt, path, width, padding, url })}
    </tbody>
  </table>
  `;
}

function imageInnerBlock(alt, path, width, padding, background = "#fff", url) {
  return `
    <tr>
    <td valign="top" class="mcnTextBlockInner">
    ${imageBlockTable(alt, path, width, padding, background, url)}
    </td>
    </tr>`;
}

function sbsImageInnerBlock(image1, image2, background = "#FFF", url) {
  return `
    <tr>
    <td valign="top" class="mcnTextBlockInner">
    ${sbsImageTable(image1, image2, background, url)}
    </td>
    </tr>`;
}

function sbsImageTable(image1, image2, background, url) {
  return `
<table align="center" width="100%" border="0" cellpadding="0" cellspacing="0"
    class="mcnImageContentContainer" style="min-width:100%;background: ${background}">
    <tbody>
      ${sbsImageRow(image1, image2, url)}
  </tbody>
</table>`;
}

function renderImageWithUrl(alt, path, width, padding, url) {
  return `
<a href=${url} target="_blank">
  <img align="center" alt="${alt}"
    src="${path}"
    width="${width}px"
    style="max-width:${width}px; padding:${padding} display: inline !important;vertical-align: top; border: 0;box-sizing: border-box; "
    class="mcnImage" />
</a>
  `;
}

function renderImage(alt, path, width, padding) {
  return `
<img align="center" alt="${alt}"
    src="${path}"
    style="max-width:${width}px; padding:${padding} display: inline !important; vertical-align: top; border: 0;box-sizing: border-box; "
    class="mcnImage" />
  `;
}

function ImageRow({ alt, path, width, padding, url }) {
  return `<tr>
<td class="mcnImageContent" valign="top"
  style="padding:${padding} text-align:center;border: 0">
  ${
    url
      ? renderImageWithUrl(alt, path, width, padding, url)
      : renderImage(alt, path, width, padding)
  }
</td>
</tr>`;
}

function sbsImageRow(image1, image2, url) {
  return `<tr>
<td width="40" class="mcnImageContent moduleImageContent" valign="top"
  style="width: 40px; text-align:center;"></td>
<td class="mcnImageContent moduleImageContent" valign="top"
  style="padding-right: 0px; padding-left: 0px; padding-top: 0; padding-bottom: 0px; text-align:center;">
  ${
    url
      ? renderImageWithUrl(
          image1.alt,
          image1.path,
          image1.width,
          image1.padding,
          url
        )
      : renderImage(image1.alt, image1.path, image1.width, image1.padding)
  }
</td>
<td width="20" class="mcnImageContent moduleImageContent" valign="top"
  style="width: 20px; text-align:center;"></td>
<td class="mcnImageContent moduleImageContent" valign="top"
  style="padding-right: 0px; padding-left: 0px; padding-top: 0; padding-bottom: 0px; text-align:center;">
  ${
    url
      ? renderImageWithUrl(
          image2.alt,
          image2.path,
          image2.width,
          image2.padding,
          url
        )
      : renderImage(image2.alt, image2.path, image2.width, image2.padding)
  }
</td>
<td width="40" class="mcnImageContent moduleImageContent" valign="top"
  style="width: 40px; text-align:center;"></td>
</tr>`;
}

function logoImageRow(alt, path, width, padding) {
  return `<tr>
<td
  class="mcnImageContent"
  valign="top"
  style="
    padding-right: 0px;
    padding-left: 0px;
    padding-top: 36px;
    padding-bottom: 0;
    text-align: center;
    border: 0;
  "
>
  <img
    align="center"
    alt=${alt}
    src=${path}
    width=${width}
    style="
      max-width:"${width}px";
      padding: ${padding}
      display: inline !important;
      vertical-align: top;
      border: 0;
      box-sizing: border-box;
    "
    class="mcnImage"
  />
</td>
</tr>`;
}

module.exports = {
  imageBlockTable,
  imageInnerBlock,
  sbsImageInnerBlock,
  sbsImageTable,
  renderImageWithUrl,
  renderImage,
  ImageRow,
  sbsImageRow,
  logoImageRow,
};
