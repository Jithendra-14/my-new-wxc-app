import React, { FormEvent, useCallback, useEffect } from "react";
import {
  API_URL,
  Data,
  NEWS_LETTER_ACTION_TYPES,
  NEWS_LETTER_FORM_SECTION_STAGES,
  NEWS_LETTER_PREVIEW_STAGE,
} from "./constants";
import useContextHook from "./context/useContextHook";
import ImageFieldRenderer from "./ImageFieldRenderer";
import { convertHeaderJsonToFormData, submitNewsLetterBanner } from "./utils";
import { PrimaryButton, Stack, Text, TextField } from "@fluentui/react";
import useFetch from "./context/useFetch";

const NewsLetterHeaderForm: React.FC = () => {
  const { state, dispatch } = useContextHook();
  const { data } = useFetch(
    `${API_URL}/preview/json?type=${state.type}&name=${state.name}&stage=${state.previewSection}`
  );

  const handleSetStateFromApi = useCallback(
    (data: Data | null) => {
      dispatch({
        type: NEWS_LETTER_ACTION_TYPES.UPDATE_NEWS_LETTER_HEADER_CONTENT,
        payload: {
          altText: data?.header?.image?.altText || "",
          title: data?.header?.title || "",
          description: data?.header?.description || "",
        },
      });
    },
    [dispatch]
  );

  useEffect(() => {
    if (data) {
      handleSetStateFromApi(data);
    }
  }, [data, handleSetStateFromApi]);

  const handleChange = useCallback(
    (
      e: FormEvent<HTMLInputElement | HTMLTextAreaElement>,
      newValue?: string | undefined
    ) => {
      const { type, name, files } = e.target as HTMLInputElement;
      if (type === "file") {
        dispatch({
          type: NEWS_LETTER_ACTION_TYPES.SET_NEWS_LETTER_HEADER_IMAGE,
          payload: { image: files },
        });
      } else {
        dispatch({
          type: NEWS_LETTER_ACTION_TYPES.UPDATE_NEWS_LETTER_HEADER_CONTENT,
          payload: { [name]: newValue },
        });
      }
    },
    [dispatch]
  );

  const handleSubmit = async () => {
    const data = convertHeaderJsonToFormData(
      state.header,
      `${state.type}/${state.name}`
    );
    await submitNewsLetterBanner(data, "header");
    dispatch({
      type: NEWS_LETTER_ACTION_TYPES.SET_NEWS_LETTER_FORM_ACTIVE_SECTION,
      payload: NEWS_LETTER_FORM_SECTION_STAGES.DOMAIN_SECTION,
    });
    dispatch({
      type: NEWS_LETTER_ACTION_TYPES.UPDATE_PREVIEW_STAGE,
      payload: NEWS_LETTER_PREVIEW_STAGE.segment,
    });
  };

  return (
    <Stack tokens={{ childrenGap: "0.5rem" }}>
      <Text variant="xLarge">Enter Header Details</Text>
      <Stack className="formsLayout">
        <ImageFieldRenderer
          handleChange={handleChange}
          id="header"
          title="Header"
          textValue={state.header.altText}
          grow={false}
        />
        <TextField
          type="text"
          id="nlh_form_header"
          label="Title"
          name="title"
          ariaLabel="Header Title"
          title="Header Title"
          placeholder="Enter Title"
          value={state.header.title}
          onChange={handleChange}
        />
        <TextField
          type="text"
          id="nlh_form_content"
          label="Description"
          name="description"
          multiline={true}
          ariaLabel="Header Description"
          title="Header Description"
          placeholder="Enter Description"
          value={state.header.description}
          onChange={handleChange}
        />
      </Stack>
      <Stack horizontal horizontalAlign="end" tokens={{ childrenGap: "1rem" }}>
        <PrimaryButton text="Next" onClick={handleSubmit} />
      </Stack>
    </Stack>
  );
};

export default NewsLetterHeaderForm;
