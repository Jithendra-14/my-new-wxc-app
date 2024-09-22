import {
  INewsLetterState,
  NEWS_LETTER_FORM_SECTION_STAGES,
  NEWS_LETTER_OPTIONS,
  NEWS_LETTER_PREVIEW_STAGE,
} from "../constants";

const InitialState: INewsLetterState = {
  name: "",
  type: NEWS_LETTER_OPTIONS.Monthly,
  formSection: NEWS_LETTER_FORM_SECTION_STAGES.NAME_SECTION, //NEWS_LETTER_FORM_SECTION_STAGES.HEADER_SECTION
  header: {
    image: null,
    altText: "",
    title: "",
    description: "",
  },
  footer: {
    image: null,
    altText: "",
  },
  segments: {},
  previewSection: NEWS_LETTER_PREVIEW_STAGE.name,
};

export default InitialState;
