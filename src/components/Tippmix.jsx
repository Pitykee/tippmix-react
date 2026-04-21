import { useContext, useState } from "react";

// bootstrap
import { Col, Container, Row, Button, FormControl } from "react-bootstrap";

// context
import { TippmixContext } from "../context/TippmixContext";

const Tippmix = () => {
  const {
    min,
    max,
    remaining,
    result,
    clue,
    firstScreen,
    secoundScreen,
    thirdScreen,
    tipp,
    userNumber,
    endGame,
  } = useContext(TippmixContext);
  const [score, setScore] = useState("");

  const handleEndGame = () => {
    setScore("");
    endGame();
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
          <Col className={firstScreen} md="6">
            <div className="rounded-4 p-4 mb-3 bg-info">
              <h5>{`Gondoltam egy számra ${min} és ${max} között`}</h5>
            </div>
            <p className="opacity-50">Kitalálod?</p>
            <Button className="bg-gradient rounded-4 py-2 px-4" onClick={tipp}>
              Kezdés
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className={secoundScreen} md="6">
            <div className="rounded-4 p-4 mb-3 bg-info">
              <h5>{`${clue}`}</h5>
            </div>
            <p className="opacity-50">{remaining} lehetőséged maradt</p>
            <h5>Mit tippelsz?</h5>
            <div className="mb-3">
              <FormControl
                type="number"
                min={min}
                max={max}
                placeholder="Szám"
                value={score}
                onChange={(e) => setScore(e.target.value)}
              />
            </div>
            <Button
              className="bg-gradient rounded-5 py-2 px-4"
              onClick={() => userNumber(score)}
            >
              Beküld
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className={thirdScreen} md="6">
            <div className="rounded-4 p-4 mb-3 bg-info">
              <h5>{result}</h5>
            </div>
            <p className="opacity-50">Még egy menet?</p>
            <Button
              className="bg-gradient rounded-4 py-2 px-4"
              onClick={handleEndGame}
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
