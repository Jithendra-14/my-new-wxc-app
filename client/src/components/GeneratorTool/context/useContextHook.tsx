import { useContext } from "react";
import { globalContext } from "./index";
import { TNewsLetterContextHook } from "../constants";

export const useContextHook: TNewsLetterContextHook = () => {
  const { state, dispatch } = useContext(globalContext);
  return { state, dispatch };
};

export default useContextHook;
