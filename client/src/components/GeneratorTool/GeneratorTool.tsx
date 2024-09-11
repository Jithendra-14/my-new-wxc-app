import React from "react";
import NewsLetterNameForm from "./NewsLetterNameForm";
import useContextHook from "./context/useContextHook";
import { NEWS_LETTER_FORM_SECTION_STAGES } from "./constants";
import NewsLetterHeaderForm from "./NewsLetterHeaderForm";
import NewsLetterDomainForm from "./NewsLetterDomainForm";
import NewsLetterFooterForm from "./NewsLetterFooterForm";
import { Separator, Stack, Text } from "@fluentui/react";
import PreviewHtml from "./PreviewHtml";

const GeneratorTool: React.FunctionComponent = () => {
  const { state } = useContextHook();
  return (
    <Stack horizontal className="gt_container">
      <Stack
        tokens={{ childrenGap: "1.5rem", padding: "0px 0px 0px 1rem" }}
        className="form_container"
      >
        <Text variant="xxLarge">NewsLetter Generator</Text>
        {state.formSection === NEWS_LETTER_FORM_SECTION_STAGES.NAME_SECTION && (
          <NewsLetterNameForm />
        )}
        {/* Header Form */}
        {state.formSection ===
          NEWS_LETTER_FORM_SECTION_STAGES.HEADER_SECTION && (
          <NewsLetterHeaderForm />
        )}
        {/* Domain Form */}
        {state.formSection ===
          NEWS_LETTER_FORM_SECTION_STAGES.DOMAIN_SECTION && (
          <NewsLetterDomainForm />
        )}
        {/* Footer Form */}
        {state.formSection ===
          NEWS_LETTER_FORM_SECTION_STAGES.FOOTER_SECTION && (
          <NewsLetterFooterForm />
        )}
      </Stack>
      <Separator vertical className="page_seperator"></Separator>
      <PreviewHtml />
    </Stack>
  );
};

export default GeneratorTool;
