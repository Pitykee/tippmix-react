import { useContext, useState } from "react";

// bootstrap
import { Col, Container, Row, Button, FormControl } from "react-bootstrap";

// context
import { TippmixContext } from "../context/TippmixContext";

const Tippmix = () => {
  const {
    randomNumber,
    setRandomNumber,
    min,
    max,
    tipp,
    addHidden,
    removeHidden,
  } = useContext(TippmixContext);
  const [score, setScore] = useState("");
  const [firstScreen, setFirstScreen] = useState(removeHidden);
  const [secoundScreen, setSecoundScreen] = useState(addHidden);
  const [thirdScreen, setThirdScreen] = useState(addHidden);
  const [remaining, setRemaining] = useState(10);
  const [clue, setClue] = useState("");
  const [result, setResult] = useState("");

  const newGame = () => {
    setFirstScreen(addHidden);
    setSecoundScreen(removeHidden);
    setThirdScreen(addHidden);
    tipp();
  };

  const userNumber = () => {
    if (score === randomNumber) {
      setFirstScreen(addHidden);
      setSecoundScreen(addHidden);
      setThirdScreen(removeHidden);
      setResult("nyertél");
      return;
    }

    setRemaining((last) => {
      const next = last - 1;
      if (next < 1) {
        setFirstScreen(addHidden);
        setSecoundScreen(addHidden);
        setThirdScreen(removeHidden);
        setResult("vesztettél");
      } else {
        setClue(Number(score) > randomNumber ? "kisebb" : "nagyobb");
        setScore("");
      }
      return next;
    });
  };

  const endGame = () => {
    setFirstScreen(removeHidden);
    setSecoundScreen(addHidden);
    setThirdScreen(addHidden);
    setResult("");
    setRemaining(10);
    setRandomNumber("");
    setScore("");
  };

  return (
    <>
      <Container className="tippbg d-flex flex-column text-center py-3 rounded-4">
        <Row>
          <Col className="m-4">
            <h1>Tippmix</h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className={`${firstScreen}`} md="6">
            <div className="rounded-4 p-4 mb-3 bg-info">
              <h5>{`Gondoltam egy számra ${min} és ${max} között`}</h5>
            </div>
            <p className="opacity-50">Kitalálod?</p>
            <Button
              className="bg-gradient rounded-4 py-2 px-4"
              onClick={newGame}
            >
              Kezdés
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className={`${secoundScreen}`} md="6">
            <div className="rounded-4 p-4 mb-3 bg-info">
              <h5>{`A szám a tippednél ${clue}`}</h5>
            </div>
            <p className="opacity-50">{`${remaining} lehetőséged maradt`}</p>
            <h5>Mit tippelsz?</h5>
            <div className="mb-3">
              <FormControl
                type="number"
                placeholder="Szám"
                value={score}
                onChange={(e) => setScore(Number(e.target.value))}
              />
            </div>
            <Button
              className="bg-gradient rounded-5 py-2 px-4"
              onClick={userNumber}
            >
              Beküld
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className={`${thirdScreen}`} md="6">
            <div className="rounded-4 p-4 mb-3 bg-info">
              <h5>{`Vége a játéknak, ${result}!`}</h5>
            </div>
            <p className="opacity-50">Még egy menet?</p>
            <Button
              className="bg-gradient rounded-4 py-2 px-4"
              onClick={endGame}
            >
              új játék
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Tippmix;
