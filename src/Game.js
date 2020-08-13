import React from "react";
import Container  from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Game = () => {



  return (
    <Container>
      <Row>
        <Col className="carrotTopLogo" xs={3}>
          1 of 2
        </Col>
        <Col className="gameTitle" >
          2 of 2
        </Col>
      </Row>
      <Row>
        <Col className="stats">Stats</Col>
        <Col className="enemyDisplay" xs={6}>
          2 of 3 (wider)
        </Col>
        <Col className="enemyImage">Images</Col>
      </Row>
      <Row>
        <Col className="mainDisplay">
          Main Display
        </Col>
      </Row>
    </Container>
  );
}

export default Game