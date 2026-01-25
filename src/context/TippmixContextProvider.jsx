import { useState } from "react";

// context
import { TippmixContext } from "./TippmixContext";

export const TippmixContextProvider = ({ children }) => {
  const [randomNumber, setRandomNumber] = useState("");

  const min = 0;
  const max = 1000;

  const tipp = () => {
    const machineNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    setRandomNumber(machineNumber);
  };

  const addHidden = "visually-hidden";
  const removeHidden = "";
  return (
    <TippmixContext.Provider
      value={{
        randomNumber,
        setRandomNumber,
        min,
        max,
        tipp,
        addHidden,
        removeHidden,
      }}
    >
      {children}
    </TippmixContext.Provider>
  );
};
