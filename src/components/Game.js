import React from "react";
import Container  from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stats from './Stats'
import EnemyDisplay from "./EnemyDisplay";
import EnemyPicture from "./EnemyPicture";
import MainDisplay from "./MainDisplay";
import carrotTop from "../media/carrot-top.png";

const Game = () => {



  const renderGameWindow = () => {
    return (
      <Container className="gameWrapper">
        <Row>
          <Col className="carrotTopLogo" xs={1.5}>
            <img className="carrotTopThumbNail" src={carrotTop} />
          </Col>
          <Col className="gameTitle">
            <h1 className="gameTitleText">KILLING CARROT TOP</h1>
          </Col>
        </Row>
        <Row>
          <Col className="stats">
            <Stats />
          </Col>
          <Col className="enemyDisplay" xs={6}>
            {" "}
            <EnemyDisplay />
          </Col>
          <Col className="enemyImage">
            <EnemyPicture />{" "}
          </Col>
        </Row>
        <Row>
          <Col className="mainDisplay">
            <MainDisplay />
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <React.Fragment>
      {renderGameWindow()}
    </React.Fragment>
  );
}

export default Game