const tableBefore = (bgcolor) => `<table
border="0"
cellpadding="0"
cellspacing="0"
width="100%"
bgcolor=${bgcolor}
class="mcnTextBlock"
style="min-width: 100%; background-color: ${bgcolor}"
>
<tbody
  class="mcnTextBlockOuter"
  id="newsletter_body"
>`;

const tableAfter = () => `</tbody>
                        </table>`;

textInnerBlock = (
  color,
  heading,
  content,
  bodyColor = "#111",
  status,
  statusColor = "#111",
  background = "#fff",
  segment = null
) => ` ${tableBefore(background)}
<tr>
<td valign="top" class="mcnTextBlockInner">
  ${textBlockTable(
    color,
    heading,
    content,
    bodyColor,
    status,
    statusColor,
    background,
    segment
  )}
</td>
</tr> ${tableAfter()} `;

mColTextInnerBlock = (color, heading, column, object) => `${tableBefore(
  "transparent"
)}
<tr>
<td valign="top" class="mcnTextBlockInner" style="padding: 0 0 0 0;">
  ${mColTextBlockTable(color, heading, column, object)}
</td>
</tr> ${tableAfter()} `;

textBlockTable = (
  color,
  heading,
  content,
  bodyColor,
  status,
  statusColor,
  background,
  segment
) => `
<table align="center" border="0" cellpadding="0" cellspacing="0"
  style="border-collapse: collapse; border:none; max-width:100%; min-width:100%; background: ${background}" width="100%" class="mcnTextContentContainer">
  <tbody>
    ${textWithHeadingRow(
      color,
      heading,
      content,
      bodyColor,
      status,
      statusColor,
      segment
    )}
  </tbody>
</table>`;

mColTextBlockTable = (color, heading, column, object) => `
<table align="center" border="0" cellpadding="0" cellspacing="0"
  style="border-collapse: collapse; border:none; max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">
  <tbody>
    <tr>
      <td valign="top" class="mcnTextContent" style="padding: 20px 40px; width: 100%;">
        <div style="text-align: left;">
          ${textHeadingH4(color, heading)}
        </div>
      </td>
    </tr>
    ${mColTextRow(color, column, object)}
  </tbody>
</table>`;

textHeading = (color, heading, status, statusColor) => `
<h2>
  <span
    style="color: ${color}; font-weight: 700;font-family:Helvetica;">
    ${heading}
  </span>
  <span class="flighted-feature"  style="font-family:Helvetica;color: ${statusColor}">${
  status || ""
}</span>
</h2>`;

textHeadingH4 = (color, heading, status, statusColor, segment = null) => `
${
  segment !== null
    ? `<h4 style="color:${segment.color};font-size:14px;line-height: 125%;padding-bottom: 4px;font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; ">${segment.title}</h4>`
    : ""
}
<h4>
  <span
    style="color: ${color}; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; ">
    ${heading}
  </span>
  <span class="flighted-feature" style="font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-weight: 600; line-height: 125%; color: ${statusColor};">
    ${status || ""}
  </span>
</h4>`;

textWithHeadingRow = (
  color,
  heading,
  content,
  bodyColor,
  status,
  statusColor,
  segment
) => `
<tr>
<td valign="top" class="mcnTextContent" style="padding: 40px 40px 6px;">
  <div style="text-align: left;">
    ${
      heading !== ""
        ? textHeadingH4(color, heading, status, statusColor, segment)
        : ""
    }
  </div>
</td>
</tr>
<tr>
<td valign="top" class="mcnTextContent" style="padding: 0px 40px 20px;">
  <div style="text-align: left;">
    <span
      style="color: ${bodyColor}; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 16px;line-height: 125%; line-height: 26px;">
      ${content}
    </span>
    <br/>
  </div>
</td>
</tr>`;

mColTextWithHeading = (color, object) => `
<td class="mcnImageContent moduleImageContent" valign="top"
style="padding-right: 0px; padding-left: 0px; padding-top: 0; padding-bottom: 0px; text-align:center;">
<table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" class="mcnImageContentContainer" style="border-collapse: collapse; border:none; min-width:100%;">
  <tbody>
    <tr>
      <td width="20"></td>
      <td style="height: 80px;">
        ${
          object.url
            ? `<a href="${object.url}" target="_blank" style="cursor:pointer">
            <img align="left" alt="${object.alt}" 
            src="${object.path}"
            width="${object.imageW}"
            style="max-width:${object.imageW}px; padding:${object.padding}; display: block; vertical-align: bottom; box-sizing: border-box;"
            class="mcnImage" />
            </a>`
            : object.path !== ""
            ? `<img align="left" alt="${object.alt}" 
            src="${object.path}"
            width="${object.imageW}"
            style="max-width:${object.imageW}px; padding:${object.padding}; display: block; vertical-align: bottom; box-sizing: border-box;"
            class="mcnImage" />`
            : `<div style="width:${object.imageW}px; height: 20px"></div>`
        }
      </td>
      <td width="20"></td>
    </tr>
  </tbody>
</table>
<div class="mclContent" style="text-align: left; max-width:${object.width}px;">
    ${textHeadingH4(color, object.heading)}
    <p style="margin: 0; padding: 4px 0 0 0;color: #000; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 16px;line-height: 125%;">
    <span
      style="color: #4D4D4D; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 16px;line-height: 26px;">
      ${object.content}
    </span>
    </p>
</div>
</td> 
<td width="20" class="mcnImageContent moduleImageContent" valign="top"
  style="width: 20px; text-align:center;"></td>`;

mColTextRow = (color, column, object) => `<tr>
<td valign="top" class="mcnTextBlockInner">
<table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" class="mcnImageContentContainer" style="border-collapse: collapse; border:none; min-width:100%;">
  <tbody>
    <tr>
      <td width="40" class="mcnImageContent moduleImageContent" valign="top"
        style="text-align:center;"></td>
        ${new Array(column)
          .fill(0)
          .map(function (x, index) {
            return mColTextWithHeading(color, object[index]);
          })
          .join("")}
      <td width="20" class="mcnImageContent moduleImageContent" valign="top"
        style="width: 20px; text-align:center;"></td>
      </tr>
    </tbody>
</table>
</td>
</tr>`;

textAndImageSideBySide = (
  heading,
  desc,
  statusColor,
  url,
  path,
  status,
  headingColor,
  bodyColor,
  background = "#fff",
  width,
  paddingValue = { top: "40px", left: "0px", right: "0px", bottom: "40px" },
  img,
  segment = null
) => {
  return ` ${tableBefore(background)} <tr>
<td style="padding:0px 0px 20px; text-align:center;border: 0; background: ${background};">
<table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnDividerBlock" style="border-collapse: collapse;border:none; min-width:100%; background: ${background}">
          <tbody class="mcnDividerBlockOuter">
          <tr>
              <td colspan="2" valign="middle" class="mcnTextContent" style="padding-top: ${
                paddingValue.top
              }; padding-left: ${paddingValue.left}; padding-right: ${
    paddingValue.right
  }; padding-bottom: 6px;">
              <div style="display:inline-block;width: 90%;">
              ${textHeadingH4(
                headingColor,
                heading,
                status,
                statusColor,
                segment
              )}
              </td>
              </tr>
            <tr>
              <td valign="top" class="mcnTextContent" style="padding-left: ${
                paddingValue.left
              }; padding-right: 0px; padding-bottom: ${paddingValue.bottom};">
              <table align="center" border="0" cellpadding="0" cellspacing="0"  style="border-collapse: collapse;border:none; " class="mcnImageContentContainer">
                  <tbody>
                    <tr>
                      <td valign="top" class="mcnTextContent">
                      <div style="display:inline-block;width: 100%;">
                      <span style="color: ${bodyColor}; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 16px;line-height: 125%">
                        ${desc}
                      </span>
                      </td>
                      <td width="20" height="20" style="width: 20px; height: 20px;"></td>
                    </tr>
                  </tbody>
                </table>             
              </td>
              <td class="mcnDividerBlockInner singleLineContent" style="min-width: 100%; padding-left:0px; padding-right: ${
                paddingValue.right
              }; padding-bottom: ${paddingValue.bottom};" valign="middle">
                <table align="center" border="0" cellpadding="0" cellspacing="0"  style="border-collapse: collapse;border:none; " class="mcnImageContentContainer">
                  <tbody>
                    <tr>
                    <td width="40" height="40" style="width: 40px; height: 40px;"></td>
                      <td valign="middle" class="mcnTextContent">
                        <div style="text-align: left;">
                          <a href="${url}" target="_blank" style="cursor:pointer">
                             <img align="center" alt=="${heading}" src="${path}" width="${width}" style="box-sizing: border-box; max-width:${width}px; padding-bottom: 0; display: inline !important; vertical-align: bottom;" class="mcnImage">
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr> ${tableAfter()} `;
};

introHeaderSideBySide = (
  heading,
  desc,
  statusColor,
  headingColor,
  bodyColor,
  desc1,
  desc2
) => {
  return ` ${tableBefore("transparent")} <tr>
<td style="padding:0px 40px 0px; text-align:center;border: 0">
                <div style="display:inline-block;width: 100%;">
                  <h1 style="padding: 0 0 6px 0;">
                  <span style="color:${headingColor}; font-size: 32px;line-height: 36px; font-weight: 700; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
                   ${heading}
                  </span>
                </h1>
                </div>
          </td>
          </tr>
            <tr>
              <td valign="top" class="mcnTextContent" style="padding: 0px 40px 40px 40px;">
              <div style="display:inline-block;width: 100%;">
                <span style="color: ${bodyColor}; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 20px;line-height: 30px;">
                  ${desc}
                  ${desc1}
                  ${desc2}
                </span>
                </div>
              </td>
              
            </tr>
          </tbody>
        </table>
      </td>
    </tr> ${tableAfter()} `;
};

introHeaderTopAndBottom = (
  heading,
  statusColor,
  headingColor,
  bodyColor,
  description
) => {
  return ` ${tableBefore("transparent")} <tr>
<td style="padding:0px 0px 20px; text-align:center;border: 0">
<table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnDividerBlock" style="border-collapse: collapse;border:none; min-width:100%;">
          <tbody class="mcnDividerBlockOuter">
            <tr>
              <td valign="middle" class="mcnTextContent" style="padding: 0px 40px 0px 40px;">
              <div style="display:inline-block;">
                <h1 style="padding: 0 0 6px 0;text-align: center">
                  <span style="color:${headingColor}; font-size: 48px; line-height: 48px; font-weight: 700; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
                   ${heading}
                  </span>
                </h1>
                </div>
              </td>
              </tr>
              <tr>
              <td valign="middle" class="mcnTextContent" style="padding: 0px 40px 0px 40px;">
              <div style="display:inline-block;text-align:center">
                <span style="color: ${bodyColor}; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 24px;line-height: 28px">
                  ${description} 
                </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr> ${tableAfter()} `;
};

textSideBySide = (background, bodyColor, description, textAlign) => {
  return `  <tr>
<td style="padding:0px 0px 20px; text-align:center;border: 0; background: ${background}">
<table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnDividerBlock" style="border-collapse: collapse;border:none; min-width:100%; background: ${background}">
          <tbody class="mcnDividerBlockOuter">
            <tr>
                  ${description.map(
                    (
                      desc
                    ) => ` <td valign="middle" class="mcnTextContent" style="text-align: center;padding: 0;"><span style="color: ${bodyColor}; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 16px;line-height: 24px;">
                            ${desc}
                      </span></td>`
                  )}
             
            </tr>
          </tbody>
        </table>
      </td>
    </tr>`;
};
