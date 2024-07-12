import React,{ useContext } from "react";
import { ContextHook } from "../types/interfaces";
import { globalContext } from "./index";

export const useContextHook: ContextHook = () => {
  const { state, dispatch } = useContext(globalContext);
  return { state, dispatch };
};

export default useContextHook;
