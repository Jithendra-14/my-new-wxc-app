import {
  API_URL,
  INLSegmentFormObject,
  NEWS_LETTER_SEGMENT_LAYOUT_TYPES,
  TNLHeaderFields,
  TNLImageField,
  TNLSegmentLayout,
} from "./constants";

export const submitNewsLetterBanner = async (
  data: FormData,
  section: "header" | "footer" | "segment" | "copy"
) => {
  try {
    const resp = await fetch(`${API_URL}/content/${section}`, {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });
    await resp.text();
  } catch (err) {
    console.log(err);
  }
};

export const createSegmentObject = () => {
  return {
    id: Date.now(),
    header: {
      image: null,
      altText: "",
    },
    layouts: {},
  };
};

export const createLayoutObject = () => {
  return {
    type: NEWS_LETTER_SEGMENT_LAYOUT_TYPES.ONE_COLUMN,
    header: "",
    description: "",
    pics: [{ image: null, altText: "" }],
    url: "",
  };
};

export const convertHeaderJsonToFormData = (
  data: TNLHeaderFields,
  folderName: string
) => {
  const fd = new FormData();
  //append images at last of form data to access other data inside callbacks in server.
  fd.append("folderName", folderName);
  fd.append("header_title", data.title);
  fd.append("header_description", data.description);
  fd.append("header_imageName", data.altText);
  fd.append("header_image", data.image[0]);

  return fd;
};

export const convertFooterJSONToFormData = (
  data: TNLImageField,
  folderName: string
) => {
  const fd = new FormData();
  //append images at last of form data to access other data inside callbacks in server.
  fd.append("folderName", folderName);
  fd.append("footer_imageName", data.altText);
  fd.append("footer_image", data.image[0]);

  return fd;
};

export const convertSegementJSONToFormData = (
  segmentsData: INLSegmentFormObject,
  folderName: string
) => {
  const formData = Object.values(segmentsData).map((obj, sgmIdx) => {
    const sfData = new FormData();
    const layouts = Object.values(obj.layouts);
    sfData.append("folderName", folderName);
    sfData.append("header_imageName", obj.header.altText);
    layouts.forEach((layout: TNLSegmentLayout, layoutIdx) => {
      sfData.append(`segment_layout_[${layoutIdx}]_type`, layout.type);
      sfData.append(`segment_layout_[${layoutIdx}]_header`, layout.header);
      sfData.append(
        `segment_layout_[${layoutIdx}]_description`,
        layout.description
      );
      sfData.append(`segment_layout_[${layoutIdx}]_url`, layout.url);
      if (layouts.length > 0) {
        Object.values(layout.pics).forEach((pic, picsIdx) => {
          sfData.append(
            `segment_layout_[${layoutIdx}]_images_[${picsIdx}]_imageName`,
            pic?.altText
          );
        });
      }
    });
    // append a param segments to identify segment last call or not
    sfData.append("isFirst", sgmIdx === 0 ? "true" : "false");
    //append images at last of form data to access other data inside callbacks in server.
    sfData.append("header_image", obj.header.image[0]);
    if (layouts.length > 0) {
      layouts.forEach((layout: TNLSegmentLayout, layoutIdx) => {
        Object.values(layout.pics).forEach((pic, picsIdx) => {
          sfData.append(
            `segment_layout_[${layoutIdx}]_images_[${picsIdx}]_image`,
            pic?.image && pic?.image[0]
          );
        });
      });
    }
    return sfData;
  });

  return formData;
};
