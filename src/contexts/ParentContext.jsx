import { createContext } from "react";

export const ParentContext = createContext();

export const ParentProvider = ({ children }) => {
  return <ParentContext.Provider value={{ state: "raghav" }}>{children}</ParentContext.Provider>;
};
