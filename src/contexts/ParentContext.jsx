import { createContext, useState } from "react";

export const ParentContext = createContext();

export const ParentProvider = ({ children }) => {
  const [courseBought, setcourseBought] = useState(false);
  return <ParentContext.Provider value={{ courseBought, setcourseBought }}>{children}</ParentContext.Provider>;
};
