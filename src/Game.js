import React from "react";
import Container  from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stats from './components/Stats'
import EnemyDisplay from "./components/EnemyDisplay";
import EnemyPicture from "./components/EnemyPicture";
import MainDisplay from "./components/MainDisplay";

const Game = () => {



  const renderGameWindow = () => {
    return (
      <Container className="gameWrapper">
        <Row>
          <Col className="carrotTopLogo" xs={1.5}>
            CarrotTop Logo
          </Col>
          <Col className="gameTitle">KILLING CARROT TOP</Col>
        </Row>
        <Row>
          <Col className="stats">
            <Stats />
          </Col>
          <Col className="enemyDisplay" xs={6}>
            {" "}
            <EnemyDisplay />
          </Col>
          <Col className="enemyImage"><EnemyPicture/> </Col>
        </Row>
        <Row>
          <Col className="mainDisplay">Main Display <MainDisplay/></Col>
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