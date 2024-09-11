import React, { ChangeEvent, FormEvent, useCallback } from "react";
import {
  NEWS_LETTER_ACTION_TYPES,
  NEWS_LETTER_SEGMENT_LAYOUT_TYPES,
  TNLSegmentLayout,
} from "./constants";
import useContextHook from "./context/useContextHook";
import {
  Dropdown,
  IDropdownOption,
  Stack,
  Text,
  TextField,
} from "@fluentui/react";
import ImageFieldRenderer from "./ImageFieldRenderer";

const NewsLetterSegmentLayoutForm = (props: {
  data: TNLSegmentLayout;
  segmentId: any;
  layoutId: any;
}) => {
  const { state, dispatch } = useContextHook();
  const { data, segmentId, layoutId } = props;
  const dropDownOptions = Object.values(NEWS_LETTER_SEGMENT_LAYOUT_TYPES).map(
    (val) => ({ key: val, text: val })
  );

  const updateLayoutData = useCallback(
    (layoutId: any, segmentId: any, newData: any) => {
      let data = { ...state.segments };
      let layoutData = { ...data[segmentId].layouts };
      const currentLayoutData = { ...layoutData[layoutId] };

      // Merge newData into currentLayoutData
      const updatedLayoutData = { ...currentLayoutData, ...newData };

      layoutData = { ...layoutData, [layoutId]: updatedLayoutData };
      data = {
        ...data,
        [segmentId]: { ...data[segmentId], layouts: layoutData },
      };

      dispatch({
        type: NEWS_LETTER_ACTION_TYPES.UPDATE_SEGMENT_DATA,
        payload: data,
      });
    },
    [dispatch, state.segments]
  );

  const handleInputChange = useCallback(
    (
      e: FormEvent<HTMLInputElement | HTMLTextAreaElement>,
      newValue?: string
    ) => {
      const { name, value } = e.target as HTMLInputElement;
      updateLayoutData(layoutId, segmentId, { [name]: value });
    },
    [layoutId, segmentId, updateLayoutData]
  );

  const handleDropdownChange = useCallback(
    (
      event: FormEvent<HTMLDivElement>,
      item?: IDropdownOption<any>,
      index?: number
    ) => {
      if (item) {
        const newData = {
          type: item.key,
          pics:
            item.key === NEWS_LETTER_SEGMENT_LAYOUT_TYPES.TWO_COLUMN
              ? [
                  { image: null, altText: "" },
                  { image: null, altText: "" },
                ]
              : [{ image: null, altText: "" }],
        };
        updateLayoutData(layoutId, segmentId, newData);
      }
    },
    [layoutId, segmentId, updateLayoutData]
  );

  const handleChange = useCallback(
    (e: { target: HTMLInputElement }, inputKey?: string) => {
      let data = { ...state.segments };
      let layoutData = { ...data[segmentId].layouts };
      const currentLayoutData: TNLSegmentLayout = { ...layoutData[layoutId] };

      const [key, idx] = (inputKey?.split("_") as [string, string]) || ["", ""];
      currentLayoutData[key][idx][e.target.name] =
        e.target.type === "file"
          ? (e.target as HTMLInputElement).files
          : e.target.value;

      updateLayoutData(layoutId, segmentId, currentLayoutData);
    },
    [layoutId, segmentId, state.segments, updateLayoutData]
  );

  return (
    <Stack>
      <Text variant="mediumPlus">Segment Layout</Text>
      <Stack horizontal tokens={{ childrenGap: "0 1rem" }}>
        <Dropdown
          label="Type"
          id="newsletter_segment_layout_type"
          ariaLabel="Layout Type"
          selectedKey={
            data ? data.type : NEWS_LETTER_SEGMENT_LAYOUT_TYPES.ONE_COLUMN
          }
          onChange={handleDropdownChange}
          placeholder="Select News Letter Type"
          options={dropDownOptions}
        />
        <TextField
          type="text"
          id={`newsletter_segment_layout_header_${layoutId}`}
          label="Header"
          name="header"
          ariaLabel="Layout Header"
          title="Layout Title"
          placeholder="Enter Layout Title"
          value={data.header}
          onChange={handleInputChange}
          className="layout_textField"
        />
      </Stack>
      <TextField
        type="text"
        multiline
        id={`newsletter_segment_layout_description_${layoutId}`}
        label="Description"
        name="description"
        ariaLabel="Layout Description"
        title="Layout Description"
        placeholder="Enter Layout Description"
        value={data.description}
        onChange={handleInputChange}
      />
      <Stack horizontal tokens={{ childrenGap: "0 1rem" }}>
        {data.pics.map((pic, idx) => {
          return (
            <ImageFieldRenderer
              key={`Image_${layoutId}_${idx}`}
              id={`Image_${layoutId}_${idx}`}
              title={`Image ${layoutId} ${idx}`}
              textValue={pic.altText}
              handleChange={(e: ChangeEvent<HTMLInputElement>) => {
                handleChange(e, `pics_${idx}`);
              }}
            />
          );
        })}
      </Stack>
      <TextField
        type="url"
        id={`newsletter_segment_layout_url_${layoutId}`}
        label="Experience URL"
        name="url"
        ariaLabel="Experience URL"
        title="Experience URL"
        placeholder="Enter Experience URL"
        value={data.url}
        onChange={handleInputChange}
        className="layout_textField"
      />
    </Stack>
  );
};

export default NewsLetterSegmentLayoutForm;
