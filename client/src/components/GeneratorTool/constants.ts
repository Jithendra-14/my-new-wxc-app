import { ChangeEvent, ChangeEventHandler } from "react";

export enum NEWS_LETTER_OPTIONS {
  Monthly = "Monthly",
  Quaterly = "Quaterly",
}

export enum NEWS_LETTER_FORM_SECTION_STAGES {
  NAME_SECTION = "Folder Name",
  HEADER_SECTION = "Header Fields",
  DOMAIN_SECTION = "Domain Fields",
  FOOTER_SECTION = "Footer Fields",
}

export enum NEWS_LETTER_ACTION_TYPES {
  SET_NEWS_LETTER_NAME_AND_TYPE = "SET_NEWS_LETTER_NAME_AND_TYPE",
  SET_NEWS_LETTER_FORM_ACTIVE_SECTION = "SET_NEWS_LETTER_FORM_ACTIVE_SECTION",
  SET_NEWS_LETTER_HEADER_IMAGE = "SET_NEWS_LETTER_HEADER_IMAGE",
  UPDATE_NEWS_LETTER_HEADER_CONTENT = "UPDATE_NEWS_LETTER_HEADER_CONTENT",
  SET_NEWS_LETTER_FOOTER_IMAGE = "SET_NEWS_LETTER_FOOTER_IMAGE",
  SET_NEWS_LETTER_FOOTER_IMAGE_ALT_TEXT = "SET_NEWS_LETTER_FOOTER_IMAGE_ALT_TEXT",
  ADD_NEW_SEGMENT_DATA = "ADD_NEW_SEGMENT_DATA",
  UPDATE_SEGMENT_DATA = "UPDATE_SEGMENT_DATA",
  UPDATE_PREVIEW_STAGE = "UPDATE_PREVIEW_STAGE",
  RESET = "RESET",
}

export enum NEWS_LETTER_SEGMENT_LAYOUT_TYPES {
  ONE_COLUMN = "One Column",
  TWO_COLUMN = "Two Column",
}

export enum NEWS_LETTER_PREVIEW_STAGE {
  name = "name",
  header = "header",
  segment = "segment",
  footer = "footer",
  preview = "preview",
}

export type TNewsLetterName = {
  name: string;
  type: `${NEWS_LETTER_OPTIONS}`;
};

export interface CImageFieldsRenderer {
  handleChange: any;
  id: string;
  title: string;
  textValue: string;
  horizontal?: boolean;
  grow?: boolean;
}

export interface CColumnLayoutRenderer {
  id: string;
  handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  handlePicsChange: (e: ChangeEvent<HTMLInputElement>, id: number) => void;
  headerValue: string;
  descriptionValue: string;
  pics: TNLImageField[];
}

export interface INewsLetterState {
  name: string;
  type: `${NEWS_LETTER_OPTIONS}`;
  formSection: `${NEWS_LETTER_FORM_SECTION_STAGES}`;
  header: TNLHeaderFields;
  footer: TNLImageField;
  segments: INLSegmentFormObject;
  previewSection: `${NEWS_LETTER_PREVIEW_STAGE}`;
}

export interface INewsLetterAction {
  type: `${NEWS_LETTER_ACTION_TYPES}`;
  payload?: any;
}

export type TNewsLetterReducer = (
  state: INewsLetterState,
  action: INewsLetterAction
) => INewsLetterAction;

export type TNewsLetterContextHook = () => {
  state: INewsLetterState;
  dispatch: (action: INewsLetterAction) => void;
};

export type TNLImageField = {
  [key: string]: any; // Add this index signature
  altText: string;
  image: FileList | null;
};

export type TNLHeaderFields = TNLImageField & {
  title: string;
  description: string;
};

export type TNLSegmentFields = {
  type: NEWS_LETTER_SEGMENT_LAYOUT_TYPES;
  header: string;
  description: string;
  pics: TNLImageField[];
};

export type TNLSegementForm = {
  header: TNLImageField;
  layouts: INLSegmentLayoutsObject;
};

export type TNLSegmentLayout = {
  [key: string]: any; // Add this index signature
  type: NEWS_LETTER_SEGMENT_LAYOUT_TYPES;
  header: string;
  description: string;
  pics: TNLImageField[];
  url: string;
};

export interface INLSegmentFormObject {
  [key: string]: TNLSegementForm;
}

export interface INLSegmentLayoutsObject {
  [key: string]: TNLSegmentLayout;
}

export const API_HOST =
  process.env.NODE_ENV === "development" ? "http://localhost:5000" : "";

export const API_URL = "api/newsletters";

export interface Header {
  image: {
    altText: string;
  };
  title: string;
  description: string;
}
export interface Footer {
  image: {
    altText: string;
  };
}

export interface Data {
  header: Header;
  footer: Footer;
}