import React from "react";
import { CImageFieldsRenderer } from "./constants";
import { Stack, TextField } from "@fluentui/react";

const ImageFieldRenderer = (props: CImageFieldsRenderer) => {
  const {
    handleChange,
    id,
    title,
    textValue,
    horizontal = false,
    grow = true,
  } = props;
  return (
    <Stack
      horizontal={horizontal}
      tokens={{ childrenGap: "0 1rem" }}
      grow={grow}
    >
      <TextField
        type="file"
        id={`newsletter_${id}_img`}
        label="Image"
        name="image"
        ariaLabel="Upload Image"
        title={`Upload ${title} Image`}
        placeholder="Upload Image"
        onChange={handleChange}
        className="layout_textField"
      />
      <TextField
        type="text"
        id={`newsletter_${id}_img_text`}
        label="Alt Text"
        name="altText"
        ariaLabel="Image Alternate Text "
        title={`${title} Image Alternate Text`}
        placeholder="Enter Alternate Text for Image"
        value={textValue}
        onChange={handleChange}
        className="layout_textField"
      />
    </Stack>
  );
};

export default ImageFieldRenderer;
