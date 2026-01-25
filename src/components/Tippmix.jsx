import { useContext, useState } from "react";

// bootstrap
import { Col, Container, Row, Button } from "react-bootstrap";

// context
import { TippmixContext } from "../context/TippmixContext";

const Tippmix = () => {
  const { randomNumber, min, max, tipp, addHidden, removeHidden } =
    useContext(TippmixContext);
  const [score, setScore] = useState();
  const [firstScreen, setFirstScreen] = useState(removeHidden);
  const [secoundScreen, setSecoundScreen] = useState(addHidden);
  const [thirdScreen, setThirdScreen] = useState(addHidden);

  const newGame = () => {
    setFirstScreen(addHidden);
    setSecoundScreen(removeHidden);
    setThirdScreen(addHidden);
    tipp();
  };
  return (
    <>
      <Container className="bg-success text-center py-4">
        <Row>
          <Col>
            <h1>Tippmix</h1>
          </Col>
        </Row>
      </Container>
      <Container className="d-flex text-center py-3 bg-warning flex-column">
        <Row className="justify-content-center">
          <Col className={`${firstScreen}`} md="6">
            <div className="rounded-5 p-4 mb-3 bg-info">
              <h5>{`Gondoltam egy számra ${min} és ${max} között`}</h5>
            </div>
            <p className="opacity-50">Kitalálod?</p>
            <Button
              className="bg-gradient rounded-5 py-2 px-4"
              onClick={newGame}
            >
              Kezdés
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className={`${secoundScreen}`} md="6">
            <div className="rounded-5 p-4 mb-3 bg-info">
              <h5>A szám a tippednél kisebb</h5>
            </div>
            <p className="opacity-50">lehetőség maradt</p>
            <h5>Mit tippelsz?</h5>
            <div className="mb-3">
              <input type="text" onChange={(e) => setScore(e.target.value)} />
            </div>
            <Button className="bg-gradient rounded-5 py-2 px-4">Beküld</Button>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className={`${thirdScreen}`} md="6">
            <div className="rounded-5 p-4 mb-3 bg-info">
              <h5>Vége a játéknak, nyertél!</h5>
            </div>
            <p className="opacity-50">Még egy menet?</p>
            <Button className="bg-gradient rounded-5 py-2 px-4">
              új játék
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Tippmix;
