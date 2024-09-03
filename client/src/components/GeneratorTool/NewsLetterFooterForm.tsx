import React, { ChangeEvent, useCallback, useEffect } from "react";
import {
  API_URL,
  Data,
  NEWS_LETTER_ACTION_TYPES,
  NEWS_LETTER_FORM_SECTION_STAGES,
  NEWS_LETTER_PREVIEW_STAGE,
} from "./constants";
import useContextHook from "./context/useContextHook";
import ImageFieldRenderer from "./ImageFieldRenderer";
import { convertFooterJSONToFormData, submitNewsLetterBanner } from "./utils";
import { DefaultButton, PrimaryButton, Stack, Text } from "@fluentui/react";
import useFetch from "./context/useFetch";

const NewsLetterFooterForm: React.FC = () => {
  const { state, dispatch } = useContextHook();
  const { data } = useFetch(
    `${API_URL}/preview/json?type=${state.type}&name=${state.name}&stage=${state.previewSection}`
  );

  const handleSetStateFromApi = useCallback(
    (data: Data | null) => {
      dispatch({
        type: NEWS_LETTER_ACTION_TYPES.SET_NEWS_LETTER_FOOTER_IMAGE_ALT_TEXT,
        payload: {
          altText: data?.footer?.image?.altText || "",
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
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.type === "file") {
        dispatch({
          type: NEWS_LETTER_ACTION_TYPES.SET_NEWS_LETTER_FOOTER_IMAGE,
          payload: { image: e.target.files },
        });
      } else {
        dispatch({
          type: NEWS_LETTER_ACTION_TYPES.SET_NEWS_LETTER_FOOTER_IMAGE_ALT_TEXT,
          payload: { altText: e.target.value },
        });
      }
    },
    [dispatch]
  );

  const handleBack = () => {
    dispatch({
      type: NEWS_LETTER_ACTION_TYPES.SET_NEWS_LETTER_FORM_ACTIVE_SECTION,
      payload: NEWS_LETTER_FORM_SECTION_STAGES.DOMAIN_SECTION,
    });
    dispatch({
      type: NEWS_LETTER_ACTION_TYPES.UPDATE_PREVIEW_STAGE,
      payload: NEWS_LETTER_PREVIEW_STAGE.segment,
    });
  };

  const handleNext = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const data = convertFooterJSONToFormData(
      state.footer,
      `${state.type}/${state.name}`
    );
    await submitNewsLetterBanner(data, "footer");
    dispatch({
      type: NEWS_LETTER_ACTION_TYPES.UPDATE_PREVIEW_STAGE,
      payload: NEWS_LETTER_PREVIEW_STAGE.preview,
    });
  };
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const data = new FormData();
    data.append("folderName", `${state.type}/${state.name}`);
    await submitNewsLetterBanner(data, "copy");
    const url = `/web/de/Newsletter/${state.type}/${state.name}`;
    window.open(url, "_blank");
    dispatch({
      type: NEWS_LETTER_ACTION_TYPES.RESET,
    });
  };
  return (
    <Stack tokens={{ childrenGap: "0.5rem" }}>
      <Text variant="xLarge">Enter Footer Details</Text>
      <ImageFieldRenderer
        handleChange={handleChange}
        id="footer"
        title="Footer"
        textValue={state.footer.altText}
      />
      <Stack horizontal horizontalAlign="end" tokens={{ childrenGap: "1rem" }}>
        <DefaultButton text="Back" onClick={handleBack} />

        <PrimaryButton text="Next" onClick={handleNext} />
      </Stack>
      <PrimaryButton text="Submit" onClick={handleSubmit} />
    </Stack>
  );
};

export default NewsLetterFooterForm;
