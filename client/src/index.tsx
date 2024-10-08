import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ContextProvider } from "./context";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { initializeIcons } from "@fluentui/react/lib/Icons";
import reportWebVitals from "./reportWebVitals";
import GeneratorToolLayout from "./components/GeneratorTool";

initializeIcons();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <ContextProvider>
        <Routes>
          <Route path="/generator" element={<GeneratorToolLayout />} />
          <Route path="/" element={<App />} />
        </Routes>
        {/* <App /> */}
      </ContextProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
