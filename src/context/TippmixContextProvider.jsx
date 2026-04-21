import { useState } from "react";

// context
import { TippmixContext } from "./TippmixContext";

export const TippmixContextProvider = ({ children }) => {
  const [randomNumber, setRandomNumber] = useState(null);
  const [remaining, setRemaining] = useState(10);
  const [clue, setClue] = useState("");
  const [result, setResult] = useState("");

  const removeHidden = "";
  const addHidden = "visually-hidden";
  const [firstScreen, setFirstScreen] = useState(removeHidden);
  const [secoundScreen, setSecoundScreen] = useState(addHidden);
  const [thirdScreen, setThirdScreen] = useState(addHidden);

  const min = 0;
  const max = 1000;

  const tipp = () => {
    const machineNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    setRandomNumber(machineNumber);
    setRemaining(10);
    setResult("");
    setClue("");

    setFirstScreen(addHidden);
    setSecoundScreen(removeHidden);
    setThirdScreen(addHidden);
  };

  const userNumber = (score) => {
    const num = Number(score);

    if (score === "" || isNaN(num)) {
      setClue(`Írj be egy számot!`);
      return;
    }

    if (num < min || num > max) {
      setClue(`Csak ${min} és ${max} között letet tippelni!`);
      return;
    }

    if (num === randomNumber) {
      setFirstScreen(addHidden);
      setSecoundScreen(addHidden);
      setThirdScreen(removeHidden);
      setResult("Gratulálunk, nyertél!");
      return;
    }

    setRemaining((last) => {
      const next = last - 1;

      if (next < 1) {
        setFirstScreen(addHidden);
        setSecoundScreen(addHidden);
        setThirdScreen(removeHidden);
        setResult("Sajnáljuk, vesztettél!");
        return 0;
      }
      return next;
    });
    setClue(num > randomNumber ? "A szám kisebb." : "A szám nagyobb.");
  };

  const endGame = () => {
    setRandomNumber(null);
    setRemaining(10);
    setResult("");
    setClue("");

    setFirstScreen(removeHidden);
    setSecoundScreen(addHidden);
    setThirdScreen(addHidden);
  };

  return (
    <TippmixContext.Provider
      value={{
        min,
        max,
        randomNumber,
        remaining,
        result,
        clue,
        firstScreen,
        secoundScreen,
        thirdScreen,
        addHidden,
        removeHidden,
        tipp,
        userNumber,
        endGame,
      }}
    >
      {children}
    </TippmixContext.Provider>
  );
};
