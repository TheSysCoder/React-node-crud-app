import { createContext } from "react";

export const WorkoutContext = createContext();

export const WorkoutContextProvider = (props) => {
  return <WorkoutContext.Provider>{props.children}</WorkoutContext.Provider>;
};
