// {
//  <table
//                             border="0"
//                             cellpadding="0"
//                             cellspacing="0"
//                             width="100%"
//                             class="mcnTextBlock"
//                             style="min-width: 100%"
//                           >
//                             <tbody
//                               class="mcnTextBlockOuter"
//                               id="newsletter_body"
//                             >

//                             </tbody>
//                           </table>
// }
const tableBeforeImg = (bgcolor) => `<table
border="0"
cellpadding="0"
cellspacing="0"
width="100%"
bgcolor=${bgcolor}
class="mcnTextBlock"
style="min-width: 100%; background-color: ${bgcolor}; border-collapse: collapse; border: none;"
>
<tbody
  class="mcnTextBlockOuter"
  id="newsletter_body"
>`;

const tableAfterImg = () => `</tbody>
                        </table>`;
const imageInnerBlock = (
  alt,
  path,
  width,
  padding,
  background = "#fff",
  url
) => `${tableBeforeImg(background)} 
<tr>
<td valign="top" class="mcnTextBlockInner">
  ${imageBlockTable(alt, path, width, padding, background, url)}
</td>
</tr> ${tableAfterImg()} `;

const sbsImageInnerBlock = (
  image1,
  image2,
  image1desc,
  image2desc,
  background = "#FFF",
  url
) => `${tableBeforeImg(background)} 
<tr>
<td valign="top" class="mcnTextBlockInner">
  ${sbsImageTable(image1, image2, image1desc, image2desc, background, url)}
</td>
</tr> ${tableAfterImg()} `;

const imageBlockTable = (alt, path, width, padding, background, url) => `
  <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" 
    class="mcnImageContentContainer" style="border-collapse: collapse; border:none; min-width:100%;background: ${background};">
    <tbody>
      ${ImageRow({ alt, path, width, padding, url, background })}
    </tbody>
  </table>
`;

const sbsImageTable = (
  image1,
  image2,
  image1desc,
  image2desc,
  background = "#FFF",
  url
) => `
<table align="center" width="100%" border="0" cellpadding="0" cellspacing="0"
    class="mcnImageContentContainer" style="border-collapse: collapse; border:none; min-width:100%;background: ${background}">
    <tbody>
      ${sbsImageRow(image1, image2, url, background)}
      ${image1desc ? sbsImageDesc(image1desc, image2desc) : ""}
  </tbody>
</table>`;

const renderImageWithUrl = (alt, path, width, padding, url) => `
<a href=${url} target="_blank">
  <img align="center" alt="${alt}"
    src="${path}"
    width=${width}
    style="max-width:${width}px; display: block !important; vertical-align: top; border: 0;box-sizing: border-box;"
    class="mcnImage" />
</a>
`;

const renderImage = (alt, path, width, padding) => `
<img align="center" alt="${alt}"
    src="${path}"
    width=${width}
    style="max-width:${width}px; display: block !important; vertical-align: top; border: 0;box-sizing: border-box;"
    class="mcnImage" />
`;

const ImageRow = ({
  alt,
  path,
  width,
  padding,
  url,
  background = "#fff",
}) => `<tr>
<td class="mcnImageContent moduleImageContent" valign="top"
  style="padding: ${padding}; text-align:center;border: 0; background: ${background}; border-collapse: collapse; border: none;">
  ${tableBeforeImg(
    background
  )} <tr><td class="mcnImageContent moduleImageContent" valign="top" style="padding: 0; text-align:center;border: 0; background: ${background}; border-collapse: collapse; border:none;">
  ${
    url
      ? renderImageWithUrl(alt, path, width, padding, url)
      : renderImage(alt, path, width, padding)
  }
  </td></tr> ${tableAfterImg()}
</td>
</tr>`;

const sbsImageRow = (image1, image2, url) => `<tr>
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
const sbsImageDesc = (image1desc, image2desc, url) => `<tr>
<td width="40" class="mcnImageContent moduleImageContent" valign="top"
  style="width: 40px; text-align:center;"></td>
  <td class="mcnImageContent moduleImageContent" valign="top" class="mcnTextContent" style="padding: ${
    image1desc.padding
  }; text-align:center;">
  <span style="color: ${
    image1desc.color
  }; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px;line-height: 125%">
  ${image1desc.content ?? ""}
  </span>
</td>
<td width="20" class="mcnImageContent moduleImageContent" valign="top"
  style="width: 20px; text-align:center;"></td>
<td class="mcnImageContent moduleImageContent" valign="top" class="mcnTextContent" style="padding: ${
  image2desc.padding
}; text-align:center;">
                <span style="color: ${
                  image2desc.color
                }; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px;line-height: 125%">
                ${image2desc.content ?? ""}
                </span>
              </td>
<td width="40" class="mcnImageContent moduleImageContent" valign="top"
  style="width: 40px; text-align:center;"></td>
</tr>`;

const logoImageRow = (alt, path, width, padding) => ` ${tableBeforeImg(
  "#fff"
)}  <tr>
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
      display: block !important;
      vertical-align: top;
      border: 0;
      box-sizing: border-box;
    "
    class="mcnImage"
  />
</td>
</tr> ${tableAfterImgImg()} `;
