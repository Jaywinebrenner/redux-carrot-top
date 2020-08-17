import { DEAD } from "../constants/Story";
import React, { useState } from "react";
import { Redirect, Link, useHistory } from "react-router-dom";
import Game from "./Game";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stats from "./Stats";
import { useSelector, useDispatch } from "react-redux";
import {
  decrementPlayerHp,
  incrementPlayerHp,
  toggleChapterOne,
  toggleBattleDisplay,
  toggleEnemyDisplay,
  toggleChapterTwo,
} from "../actions";
import Battle from "./Battle";
import carrotTop from "../media/carrot-top.png";
import MainDisplay from "./MainDisplay";
import ReactHowler from "react-howler";
import gamePlay from "../media/gameplay.mp3";
import { emoPhilips } from "../constants/Monsters";
import { timAllen } from "../constants/Monsters";
import { judyTenuda } from "../constants/Monsters";

const Victory = (props, { isRunVisible }) => {

  const dispatch = useDispatch();


  const playerHitpoints = useSelector((state) => state.playerHitpoints);
  const [victoryMessage, setVictoryMessage] = useState(true);
  const [pushedContinue, setPushedContinue] = useState(false);
  const [lootOptionsVisible, setLootOptionsVisible] = useState(false);
  const [lootResultYes, setLootResultYes] = useState(false);
  const [lootResultNo, setLootResultNo] = useState(false);

  const chapterOne = useSelector((state) => state.chapterOne);
  const chapterTwo = useSelector((state) => state.chapterTwo);

  const renderVictoryMessage = () => {
    return (
      <Container>
        <h4 className="deadText">
          {chapterOne && emoPhilips.died}
          {chapterTwo && timAllen.died}
        </h4>
        <h1 className="areDeadText">VICTORIOUS</h1>
        <h1
          className="buttonText"
          onClick={() => {
            setVictoryMessage(false);
            setLootOptionsVisible(true);
          }}
        >
          Continue
        </h1>
      </Container>
    );
  };


  const [tenSidedDie, setTenSidedDie] = useState(
    Math.floor(Math.random() * 10) + 1,
  );
  const renderLootOptions = () => {
    return (
      <Container>
        <h4 className="lootTextSubheader">
          {chapterOne && emoPhilips.lootOne}
          {chapterTwo && timAllen.lootOne}
        </h4>
        <h1 className="lootText">
          {" "}
          {chapterOne && emoPhilips.lootTwo}
          {chapterTwo && timAllen.lootTwo}
        </h1>
        <Row>
          <Col>
            <h1
              className="buttonText"
              onClick={() => {
                setLootResultYes(true);
                setLootOptionsVisible(false);
                dispatch(incrementPlayerHp(tenSidedDie));
              }}
            >
              Yes
            </h1>
          </Col>
          <Col>
            <h1
              className="buttonText"
              onClick={() => {
                setLootResultNo(true);
                setLootOptionsVisible(false);
              }}
            >
              No
            </h1>
          </Col>
        </Row>
      </Container>
    );
  };

  const renderLootResultYes = () => {
    if (lootResultYes)
      return (
        <Container>
          <h4>
            {chapterOne && emoPhilips.lootThree}
            {chapterTwo && timAllen.lootThree}
          </h4>
          <h4>You receive {tenSidedDie} hit points.</h4>

          <Link
            className="buttonText"
            onClick={() => {
              goBackToGame();
              // setLootResultYes(false);
              // setLootResultNo(false);
            }}
            style={{ textDecoration: "none", color: "white" }}
            to="/Game"
          >
            Continue
          </Link>
        </Container>
      );
  };

  // const history = useHistory();

  const goBackToGame = () => {
    dispatch(toggleChapterOne(false));
    dispatch(toggleBattleDisplay(false));
    dispatch(toggleEnemyDisplay(false))
    dispatch(toggleChapterTwo(false));
    // setCreateCharacterVisible(false);
    // setLootResultYes(false);
    // setLootResultNo(false);
  };

  const renderLootResultNo = () => {
    if (lootResultNo) {
      return (
        <Container>
          <h4>
            {chapterOne && emoPhilips.lootFour}
            {chapterTwo && timAllen.lootFour}
          </h4>
          <Link
            className="linkButton"
            onClick={() => {
              goBackToGame();
            }}
            style={{ textDecoration: "none", fontFamily: "Red Rose" }}
            to="/ChapterTwo"
          >
            Continue
          </Link>
        </Container>
      );
    }
  };

  return (
    // <React.Fragment>
    //   {victoryMessage && renderVictoryMessage()}
    //   {lootResultYes && renderLootResultYes()}
    //   {lootResultNo && renderLootResultNo()}
    //   {lootOptionsVisible && renderLootOptions()}
    // </React.Fragment>
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
        <Col className="enemyDisplay"></Col>
        <Col className="enemyPictureDisplay"></Col>
      </Row>
      <Row>
        <Col className="mainDisplayOne">
          <MainDisplay />
          {victoryMessage && renderVictoryMessage()}
          {lootResultYes && renderLootResultYes()}
          {lootResultNo && renderLootResultNo()}
          {lootOptionsVisible && renderLootOptions()}
        </Col>
      </Row>
      <ReactHowler
        src={gamePlay}
        volume={0.4}
        loop={true}
        // playing={isGameMusicPlaying}
      />
    </Container>
  );
};

export default Victory;







