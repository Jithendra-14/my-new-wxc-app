import React, { ChangeEvent, MouseEvent, useCallback, useEffect } from "react";
import useContextHook from "./context/useContextHook";
import {
  createLayoutObject,
  convertSegementJSONToFormData,
  createSegmentObject,
  submitNewsLetterBanner,
} from "./utils";
import {
  API_URL,
  Data,
  NEWS_LETTER_ACTION_TYPES,
  NEWS_LETTER_FORM_SECTION_STAGES,
  NEWS_LETTER_PREVIEW_STAGE,
  Segment,
  TNLSegementForm,
} from "./constants";
import ImageFieldRenderer from "./ImageFieldRenderer";
import NewsLetterSegmentLayoutForm from "./NewsLetterSegmentLayoutForm";
import { DefaultButton, PrimaryButton, Stack, Text } from "@fluentui/react";
import useFetch from "./context/useFetch";

const NewsLetterDomainForm: React.FC = () => {
  const { state, dispatch } = useContextHook();
  const { data } = useFetch(
    `${API_URL}/preview/json?type=${state.type}&name=${state.name}&stage=${state.previewSection}`
  );

  const handleAddSegmentDataFromApi = useCallback(
    (segmentData: Segment, id: number) => {
      const { header, layouts } = segmentData;

      const updatedLayouts = layouts.map((layoutData) => {
        const { header, description, type, images, url } = layoutData;
        const updatedPics = images.map(({ name }) => ({
          image: null,
          altText: name,
        }));

        const updatedLayoutData = {
          type,
          header,
          description,
          pics: updatedPics,
          url,
        };

        return updatedLayoutData;
      });

      return {
        [id]: {
          id: id,
          header: {
            image: null,
            altText: header.image.name,
          },
          layouts: updatedLayouts,
        },
      };
    },
    []
  );

  const handleSetStateFromApi = useCallback(
    (data: Data | null) => {
      const { segments } = data;
      if (segments && segments.length > 0) {
        const segmentJSONs = segments.reduce((acc, segmentData, idx) => {
          return {
            ...acc,
            ...handleAddSegmentDataFromApi(segmentData, idx + 1),
          };
        }, {});

        dispatch({
          type: NEWS_LETTER_ACTION_TYPES.UPDATE_SEGMENT_DATA,
          payload: segmentJSONs,
        });
      }
    },
    [handleAddSegmentDataFromApi, dispatch]
  );

  useEffect(() => {
    if (data) {
      handleSetStateFromApi(data);
    }
  }, [data, handleSetStateFromApi]);

  const handleBack = (e) => {
    dispatch({
      type: NEWS_LETTER_ACTION_TYPES.SET_NEWS_LETTER_FORM_ACTIVE_SECTION,
      payload: NEWS_LETTER_FORM_SECTION_STAGES.HEADER_SECTION,
    });
    dispatch({
      type: NEWS_LETTER_ACTION_TYPES.UPDATE_PREVIEW_STAGE,
      payload: NEWS_LETTER_PREVIEW_STAGE.header,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData: FormData[] = convertSegementJSONToFormData(
      state.segments,
      `${state.type}/${state.name}`
    );
    while (formData.length) {
      await submitNewsLetterBanner(formData.shift(), "segment");
    }
    dispatch({
      type: NEWS_LETTER_ACTION_TYPES.SET_NEWS_LETTER_FORM_ACTIVE_SECTION,
      payload: NEWS_LETTER_FORM_SECTION_STAGES.FOOTER_SECTION,
    });
    dispatch({
      type: NEWS_LETTER_ACTION_TYPES.UPDATE_PREVIEW_STAGE,
      payload: NEWS_LETTER_PREVIEW_STAGE.footer,
    });
  };

  const handleAddSegment = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      dispatch({
        type: NEWS_LETTER_ACTION_TYPES.ADD_NEW_SEGMENT_DATA,
        payload: { [Date.now()]: createSegmentObject() },
      });
    },
    [dispatch]
  );

  const handleAddLayout = useCallback(
    (e, id: string) => {
      const segmentsData = { ...state.segments };
      const currentSegmentData = { ...segmentsData[id] };
      currentSegmentData.layouts[Date.now()] = createLayoutObject();
      segmentsData[id] = currentSegmentData;
      dispatch({
        type: NEWS_LETTER_ACTION_TYPES.UPDATE_SEGMENT_DATA,
        payload: segmentsData,
      });
    },
    [dispatch, state.segments]
  );

  const handleChange = useCallback(
    (
      e: ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
      newValue: string,
      id: string
    ) => {
      const segmentsData = { ...state.segments };
      const currentSegmentData: TNLSegementForm = { ...segmentsData[id] };

      currentSegmentData.header[e.target.name] =
        e.target.type === "file"
          ? (e.target as HTMLInputElement).files
          : newValue;

      segmentsData[id] = currentSegmentData;
      dispatch({
        type: NEWS_LETTER_ACTION_TYPES.UPDATE_SEGMENT_DATA,
        payload: segmentsData,
      });
    },
    [dispatch, state.segments]
  );

  return (
    <Stack tokens={{ childrenGap: "0.5rem" }}>
      <Text variant="xLarge">Enter Domain Details</Text>
      <Stack className="formsLayout">
        {Object.keys(state.segments)?.map((id, idx: number) => {
          const obj: TNLSegementForm = state.segments[id];
          return (
            <Stack key={id} tokens={{ childrenGap: "0.5rem" }}>
              <Text variant="large">Segment {idx + 1}</Text>
              <Text variant="mediumPlus">Segment Header</Text>
              <ImageFieldRenderer
                handleChange={(e, newValue: string) => {
                  handleChange(e, newValue, id);
                }}
                id={`section_${idx + 1}`}
                title={`Section ${idx + 1}`}
                textValue={obj?.header?.altText}
                horizontal={true}
              />
              {Object.keys(obj.layouts)?.map((layoutId) => {
                const layout = obj.layouts[layoutId];
                return (
                  <NewsLetterSegmentLayoutForm
                    key={layoutId}
                    data={layout}
                    segmentId={id}
                    layoutId={layoutId}
                  />
                );
              })}
              <DefaultButton
                text="Add Layout"
                iconProps={{ iconName: "Add" }}
                onClick={(e: MouseEvent<HTMLButtonElement>) => {
                  handleAddLayout(e, id);
                }}
              />
            </Stack>
          );
        })}
      </Stack>
      <DefaultButton
        text="Add Segment"
        iconProps={{ iconName: "Add" }}
        onClick={handleAddSegment}
      />
      <Stack horizontal horizontalAlign="end" tokens={{ childrenGap: "1rem" }}>
        <DefaultButton text="Back" onClick={handleBack} />
        <PrimaryButton text="Next" onClick={handleSubmit} />
      </Stack>
    </Stack>
  );
};

export default NewsLetterDomainForm;
