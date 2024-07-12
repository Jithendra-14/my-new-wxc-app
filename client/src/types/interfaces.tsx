import { PartialTheme } from "@fluentui/react";

export interface Todo {
  id: number;
  title: string;
  isCompleted: boolean;
  createdAt: Date;
}

export type ActionTypes =
  | "ADD_ROUTES"
  | "ADD_TODO"
  | "REMOVE_TODO"
  | "MARK_AS_DONE";

export interface Action {
  type: ActionTypes;
  payload?: any;
}

export interface State {
  lightTheme: PartialTheme;
  darkTheme: PartialTheme;
  todos: Todo[];
  routes: string[];
}

export type ReducerType = (state: State, action: Action) => State;

export type ContextHook = () => {
  state: State;
  dispatch: (action: Action) => void;
};
