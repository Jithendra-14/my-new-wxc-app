function textInnerBlock(
  color,
  heading,
  content,
  bodyColor = "#111",
  img,
  statusColor = "#111",
  background = "#fff",
  segment = "",
  url = "",
  padding = "20px;",
  fontSize = "18px"
) {
  return `
<tr>
<td valign="top" class="mcnTextBlockInner">
  ${textBlockTable(
    color,
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
  )}
</td>
</tr>`;
}

function mColTextInnerBlock(color, heading, column, object) {
  return `
<tr>
<td valign="top" class="mcnTextBlockInner" style="padding: 0 0 20px 0;">
  ${mColTextBlockTable(color, heading, column, object)}
</td>
</tr>`;
}

function textBlockTable(
  color,
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
) {
  return `
<table align="center" border="0" cellpadding="0" cellspacing="0"
  style="max-width:100%; min-width:100%; background: ${background}" width="100%" class="mcnTextContentContainer">
  <tbody>
    ${textWithHeadingRow(
      color,
      heading,
      content,
      bodyColor,
      img,
      statusColor,
      segment,
      url,
      padding,
      fontSize
    )}
  </tbody>
</table>`;
}

function mColTextBlockTable(color, heading, column, object) {
  return `
<table align="center" border="0" cellpadding="0" cellspacing="0"
  style="max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">
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
}

function textHeading(color, heading, status, statusColor) {
  return `
<h2>
  <span
    style="color: ${color}; font-weight: 700;font-family:Helvetica;">
    ${heading}
  </span>
  <span class="flighted-feature"  style="font-family:Helvetica;color: ${statusColor}">${
    status || ""
  }</span>
</h2>`;
}

function textHeadingH4(color, heading, img, statusColor, segment, url) {
  return `
<div style="display:inline-block;width: 100%;">
<h4 style='color:${statusColor};font-size:16px;line-height: 125%;padding-bottom: 6px;'>${segment}</h4>
<h4
<span style="color: ${color}; font-weight: 400;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;font-size:22px;font-weight:600;cursor:pointer;">
    ${heading}
    </span>
</h4>
</div>
${checkForUrlAndAttachVisitSite(url, heading, img)}
`;
}

function checkForUrlAndAttachVisitSite(url, heading, img) {
  if (url && url !== null) {
    return `<a href=${url} target="_blank" alt=${url} style="color:#fff;cursor:pointer;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; display:inline-block;">
    <img align="left"
    src="${img.path}"
    width="${img.imageW}"
    style="max-width:${img.imageW}px; padding:${img.padding}; display: block; vertical-align: bottom; box-sizing: border-box;"
    class="mcnImage" />
</a>`;
  } else {
    return ``;
  }
}

function textWithHeadingRow(
  color,
  heading,
  content,
  bodyColor,
  img,
  statusColor,
  segment,
  url,
  padding,
  fontSize
) {
  return `
<tr>
<td valign="top" class="mcnTextContent" style="padding: ${padding};font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif">
  <div style="text-align: left;">
    ${
      heading !== ""
        ? textHeadingH4(color, heading, img, statusColor, segment, url)
        : ""
    }
    ${
      content !== ""
      ? `<div style="color: ${bodyColor}; font-size: ${fontSize}; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 125%; padding: 10px 0;">
      ${content}
        </div>`
      : ""
    }
  </div>
</td>
</tr>`;
}

function mColTextWithHeading(color, object) {
  return `
<td class="mcnImageContent moduleImageContent" valign="top"
style="padding-right: 0px; padding-left: 0px; padding-top: 0; padding-bottom: 0px; text-align:center;">
<table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" class="mcnImageContentContainer" style="min-width:100%;">
  <tbody>
    <tr>
      <td width="20"></td>
      <td style="height: 80px;">
        <img align="left" alt="${object.alt}"
            src="${object.path}"
            width="${object.imageW}"
            style="max-width:${object.imageW}px; padding:${
    object.padding
  }; display: block; vertical-align: bottom; box-sizing: border-box;"
            class="mcnImage" />
      </td>
      <td width="20"></td>
    </tr>
  </tbody>
</table>
<div class="mclContent" style="text-align: left; font-size: 14px; font-family:Helvetica;max-width:${
    object.width
  }px;">
    ${textHeadingH4(color, object.heading)}
    <br />
    <span
      style="color: #000; line-height: 16px;font-family:Helvetica;">
      ${object.content}
    </span>
    <br />
</div>
</td>
<td width="20" class="mcnImageContent moduleImageContent" valign="top"
  style="width: 20px; text-align:center;"></td>`;
}

function mColTextRow(color, column, object) {
  return `<tr>
<td valign="top" class="mcnTextBlockInner">
<table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" class="mcnImageContentContainer" style="min-width:100%;">
  <tbody>
    <tr>
      <td width="40" class="mcnImageContent moduleImageContent" valign="top"
        style="width: 40px 40px 20px; text-align:center;"></td>
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
}

function test(color, bodyColor, Heading) {
  return `<tr>
<td valign="top" class="mcnTextContent" style="padding: 0px 40px 40px 40px;">
  <h2>
    <span
      style="color:#fff; font-weight: 700; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif">
      ${Heading}
    </span>
  </h2>
  <br />
  <span
    style="color: #fff; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif">
    Rich engaging pages on 250+ healthy foods featuring detailed information on
    Nutrition facts, top-of-the-mind questions answered by Nutritionists,
    recirculation to other food and article pages. DE team has created engaging
    and rich interactive components using web components keeping delightful
    experience in mind
  </span>
</td>
<td class="mcnDividerBlockInner" style="min-width: 100%; padding: 40px;"
  valign="center">
  <table align="center" border="0" cellpadding="0" cellspacing="0"
    style="width:370px;" class="mcnImageContentContainer">
    <tbody>
      <tr>
        <td valign="top" class="mcnTextContent">
          <div style="text-align: left;">
            <a target='_blank'
              href="https://www.msn.com/en-us/health/food/Capsicum?ocid=entnewsntp&cvid=e4cb5ed9441e4ecbade3d73198e414f3">
              <img align="center" alt="Know everything about food"
                src="./img/FoodA_Z.gif" width="370"
                style="box-sizing: border-box; max-width:370px; padding-bottom: 0; display: inline !important; vertical-align: bottom;"
                class="mcnImage" />
            </a>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</td>
</tr>`;
}

function SegmentBanner(background, heading, headingColor, path, padding) {
  return `<tr><td valign="top" class="mcnTextBlockInner" style="padding: ${padding}; color: ${headingColor};background-color: ${background}">
  <h1 style="text-align: center;">
    <span style="color:${headingColor}; font-size: 40px; font-weight: 600; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif">
      ${heading}
    </span>
  </h1>
</td></tr>`;
}

function PillarsSegments(
  image,
  heading,
  description,
  padding,
  pillarColor = "#444"
) {
  return `<tr><td valign="top" class="mcnTextBlockInner" style="padding:${padding};background-color:#fff;">
        <div style="text-align:center">
            <div style="text-align:center;">
              <img src=${image} alt=${heading} style="height: 40px; display: inline-block;vertical-align: bottom;">
              <h1 class="pillar-header" style="display:inline-block; color: ${pillarColor}; font-weight: bold">${heading}</h1>
            </div>
            <p class="pillar-description" style="font-size: 18px; line-height:28px; color: #444;"><i>
            ${description} </i></p>
        </div>
</td></tr>`;
}

function textAndImageSideBySide(
  heading,
  desc,
  statusColor,
  url,
  path,
  segment,
  headingColor,
  bodyColor,
  width,
  img
) {
  return `<tr>
<td style="padding:0px 0px 20px; text-align:center;border: 0">
<table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnDividerBlock" style="min-width:100%;">
          <tbody class="mcnDividerBlockOuter">
            <tr>
              <td valign="middle" class="mcnTextContent" style="padding: 0px 20px 40px 20px;">
              <div style="display:inline-block;width: 90%;">
                  <h4 style='color:${statusColor};font-size:16px;line-height: 125%;padding-bottom: 6px;'>${segment}</h4>
              <h4>
                <h2>
                  <span style="color:${headingColor}; font-weight: 600; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
                   ${heading}
                  </span>
                </h2>
                ${checkForUrlAndAttachVisitSite(url, heading, img)}
                <br>
                <span style="color: ${bodyColor}; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 16px;line-height: 125%">
                  ${desc}
                </span>
              </td>
              <td class="mcnDividerBlockInner singleLineContent" style="min-width: 100%; padding:0 20px 40px 20px;" valign="center">
                <table align="center" border="0" cellpadding="0" cellspacing="0" class="mcnImageContentContainer">
                  <tbody>
                    <tr>
                      <td valign="top" class="mcnTextContent">
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
    </tr>`;
}

module.exports = {
  textInnerBlock,
  mColTextInnerBlock,
  textBlockTable,
  mColTextBlockTable,
  textHeading,
  textHeadingH4,
  checkForUrlAndAttachVisitSite,
  textWithHeadingRow,
  mColTextWithHeading,
  mColTextRow,
  test,
  SegmentBanner,
  PillarsSegments,
  textAndImageSideBySide,
};
