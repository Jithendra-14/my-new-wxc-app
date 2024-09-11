import {
  INewsLetterAction,
  INewsLetterState,
  NEWS_LETTER_ACTION_TYPES,
} from "../constants";
const reducer = (state: INewsLetterState, action: INewsLetterAction) => {
  switch (action.type) {
    case NEWS_LETTER_ACTION_TYPES.SET_NEWS_LETTER_NAME_AND_TYPE: {
      return { ...state, ...action.payload };
    }
    case NEWS_LETTER_ACTION_TYPES.SET_NEWS_LETTER_HEADER_IMAGE: {
      return { ...state, header: { ...state.header, ...action.payload } };
    }
    case NEWS_LETTER_ACTION_TYPES.UPDATE_NEWS_LETTER_HEADER_CONTENT: {
      return { ...state, header: { ...state.header, ...action.payload } };
    }
    case NEWS_LETTER_ACTION_TYPES.SET_NEWS_LETTER_FOOTER_IMAGE: {
      return { ...state, footer: { ...state.footer, ...action.payload } };
    }
    case NEWS_LETTER_ACTION_TYPES.SET_NEWS_LETTER_FOOTER_IMAGE_ALT_TEXT: {
      return { ...state, footer: { ...state.footer, ...action.payload } };
    }
    case NEWS_LETTER_ACTION_TYPES.SET_NEWS_LETTER_FORM_ACTIVE_SECTION: {
      return { ...state, formSection: action.payload };
    }
    case NEWS_LETTER_ACTION_TYPES.ADD_NEW_SEGMENT_DATA: {
      return { ...state, segments: { ...state.segments, ...action.payload } };
    }
    case NEWS_LETTER_ACTION_TYPES.UPDATE_SEGMENT_DATA: {
      return { ...state, segments: action.payload };
    }
    case NEWS_LETTER_ACTION_TYPES.UPDATE_PREVIEW_STAGE: {
      return { ...state, previewSection: action.payload };
    }
    default:
      return state;
  }
};

export default reducer;
