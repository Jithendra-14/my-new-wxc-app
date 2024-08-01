import { State } from "../types/interfaces";

const InitialState: State = {
  lightTheme: {
    semanticColors: {
      bodyBackground: "white",
      bodyText: "black",
    },
  },
  darkTheme: {
    semanticColors: {
      bodyBackground: "black",
      bodyText: "white",
    },
  },
  todos: [
    {
      id: 0,
      title: "Prepare dev.to article ✍",
      createdAt: new Date("2021-09-28T12:00:00-06:30"),
      isCompleted: false,
    },
    {
      id: 2,
      title: "Watch season 3 episode 2 of Attack on titans 👀",
      createdAt: new Date("2021-09-30T11:00:00-06:30"),
      isCompleted: false,
    },
  ],
  routes: [],
};

export default InitialState;
