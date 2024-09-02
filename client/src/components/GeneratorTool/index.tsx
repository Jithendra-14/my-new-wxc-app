import React from "react";
import { ContextProvider } from "./context";
import GeneratorTool from "./GeneratorTool";
import "./index.scss";
import { initializeIcons } from "@fluentui/react/lib/Icons";
initializeIcons();

const GeneratorToolLayout: React.FC = () => {
  return (
    <ContextProvider>
      <GeneratorTool />
    </ContextProvider>
  );
};

export default GeneratorToolLayout;
