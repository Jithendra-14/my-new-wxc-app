import { Fragment } from "react";
import useContextHook from "./context/useContextHook";
import { API_URL, NEWS_LETTER_PREVIEW_STAGE } from "./constants";
import { Stack, Text } from "@fluentui/react";

const PreviewHtml = () => {
  const { state } = useContextHook();
  return (
    <Fragment>
      {state.previewSection !== NEWS_LETTER_PREVIEW_STAGE.name ? (
        <iframe
          title="DE News Letter"
          src={`${API_URL}/preview/html?type=${state.type}&name=${state.name}&stage=${state.previewSection}`}
          className="preview"
        ></iframe>
      ) : (
        <Stack className="preview">
          <Text variant="mediumPlus" style={{ marginTop: "3rem" }}>
            Preview of the HTML will be shown here.
          </Text>
        </Stack>
      )}
    </Fragment>
  );
};

export default PreviewHtml;
