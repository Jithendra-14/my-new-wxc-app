/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import { AppHeader } from "./Header/AppHeader";
import { ErrorNotFound } from "./ErrorNotFound/ErrorNotFound";
import GeneratorTool from "./GeneratorTool";
import { MainContainer } from "./MainContainer/MainContainer";
import { Newsletters } from "./Newsletters/Newsletters";
import { Prototypes } from "./Prototypes/Prototypes";
import { Tools } from "./Tools/Tools";
/**
 * Renders the navbar component with a sign-in or sign-out button depending on whether or not a user is authenticated
 * @param props
 */
export const PageLayout = (props: any) => {
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.location]);

  return (
    <>
      {currentPath !== "/generator" && <AppHeader />}
      <Routes>
        <Route path="/" element={<MainContainer />}></Route>
        <Route path="/prototypes" element={<Prototypes />}></Route>
        <Route path="/newsletters" element={<Newsletters />}></Route>
        <Route path="/home" element={<MainContainer />}></Route>
        <Route path="/tools" element={<Tools />}></Route>
        <Route path="/generator" element={<GeneratorTool />}></Route>
        <Route path="*" element={<ErrorNotFound />}></Route>
      </Routes>
    </>
  );
};
