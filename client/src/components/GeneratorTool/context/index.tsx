import { createContext, Dispatch, ReactNode, useReducer } from "react";

import reducer from "./reducer";
import {
  INewsLetterState as State,
  INewsLetterAction as Action,
} from "../constants";
import InitialState from "./initialState";

export const globalContext = createContext<{
  state: State;
  dispatch: Dispatch<Action>;
}>({
  state: InitialState,
  dispatch: () => {},
});

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, InitialState);
  return (
    <globalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </globalContext.Provider>
  );
};
