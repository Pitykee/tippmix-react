import {} from "react";

// context
import { TippmixContext } from "./TippmixContext";

export const TippmixContextProvider = ({ children }) => {
  return (
    <TippmixContext.Provider value={{}}>{children}</TippmixContext.Provider>
  );
};
