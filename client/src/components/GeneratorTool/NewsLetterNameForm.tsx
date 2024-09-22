import React, { FormEvent, useCallback } from "react";
import {
  API_URL,
  NEWS_LETTER_ACTION_TYPES,
  NEWS_LETTER_FORM_SECTION_STAGES,
  NEWS_LETTER_OPTIONS,
  NEWS_LETTER_PREVIEW_STAGE,
  TNewsLetterName,
} from "./constants";
import useContextHook from "./context/useContextHook";
import {
  Dropdown,
  IDropdownOption,
  PrimaryButton,
  Stack,
  Text,
  TextField,
} from "@fluentui/react";

const NewsLetterNameForm: React.FC = () => {
  const { state, dispatch } = useContextHook();

  const handleChange = useCallback(
    (e: FormEvent<HTMLDivElement>, item: IDropdownOption) => {
      dispatch({
        type: NEWS_LETTER_ACTION_TYPES.SET_NEWS_LETTER_NAME_AND_TYPE,
        payload: {
          name: state.name,
          type: item.key,
        },
      });
    },
    [dispatch, state.name]
  );

  const handleInputChange = useCallback(
    (
      e: FormEvent<HTMLInputElement | HTMLTextAreaElement>,
      newValue: string
    ) => {
      dispatch({
        type: NEWS_LETTER_ACTION_TYPES.SET_NEWS_LETTER_NAME_AND_TYPE,
        payload: {
          type: state.type,
          name: newValue,
        },
      });
    },
    [dispatch, state.type]
  );

  const dropDownOptions = Object.keys(NEWS_LETTER_OPTIONS).map((key) => ({
    key: key,
    text: key,
  }));

  const handleSubmit = async () => {
    await submitNewsLetterName({ type: state.type, name: state.name });
  };

  const submitNewsLetterName = async (data: TNewsLetterName) => {
    try {
      const resp = await fetch(`${API_URL}/folder/create`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      await resp.text();
      dispatch({
        type: NEWS_LETTER_ACTION_TYPES.SET_NEWS_LETTER_FORM_ACTIVE_SECTION,
        payload: NEWS_LETTER_FORM_SECTION_STAGES.HEADER_SECTION,
      });
      dispatch({
        type: NEWS_LETTER_ACTION_TYPES.UPDATE_PREVIEW_STAGE,
        payload: NEWS_LETTER_PREVIEW_STAGE.header,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Stack tokens={{ childrenGap: "0.5rem" }}>
      <Text variant="xLarge">Enter News Letter Details</Text>
      <Stack className="formsLayout">
        <Dropdown
          label="Type"
          ariaLabel="News Letter Type"
          selectedKey={state ? state.type : undefined}
          onChange={handleChange}
          placeholder="Select News Letter Type"
          options={dropDownOptions}
        />
        <TextField
          type="text"
          id="newsletter_name"
          label="Name"
          ariaLabel="Name"
          title="NewsLetter Name"
          placeholder="Enter News Letter Name"
          value={state.name}
          onChange={handleInputChange}
        />
      </Stack>
      <Stack horizontal horizontalAlign="end" tokens={{ childrenGap: "1rem" }}>
        <PrimaryButton text="Next" onClick={handleSubmit} />
      </Stack>
    </Stack>
  );
};

export default NewsLetterNameForm;
