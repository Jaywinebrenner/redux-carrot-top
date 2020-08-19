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
  toggleChapterThree,
  toggleChapterFour
} from "../actions";
import Battle from "./Battle";
import carrotTop from "../media/carrot-top.png";
import MainDisplay from "./MainDisplay";
import ReactHowler from "react-howler";
import gamePlay from "../media/gameplay.mp3";
import { emoPhilips, paulyShore } from "../constants/Monsters";
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
  const chapterThree = useSelector((state) => state.chapterThree);
  const chapterFour = useSelector((state) => state.chapterFour);

   console.log("Chapter 1 ", chapterOne);
  console.log("Chapter 2 ", chapterTwo);
    console.log("Chapter 3 ", chapterThree);


  const renderVictoryMessage = () => {
    return (
      <Container>
        <h6 className="deadText">
          {chapterOne && emoPhilips.died}
          {chapterTwo && timAllen.died}
          {chapterThree && paulyShore.died}
        </h6>
        <h1 className="areDeadText">VICTORIOUS</h1>
        <h1
          className="buttonText"
          onClick={() => {
            setVictoryMessage(false);
            setLootOptionsVisible(true);
          }}
        >
          CONTINUE
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
        <h6 className="lootTextSubheader">
          {chapterOne && emoPhilips.lootOne}
          {chapterTwo && timAllen.lootOne}
          {chapterThree && paulyShore.lootOne}
        </h6>
        <h6 className="lootText">
          {" "}
          {chapterOne && emoPhilips.lootTwo}
          {chapterTwo && timAllen.lootTwo}
          {chapterThree && paulyShore.lootTwo}
        </h6>
        <Row>
          <Col>
            <h1 className="buttonText" onClick={lootResults}>
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

  const lootResults = () => {
    setLootResultYes(true);
    setLootOptionsVisible(false);
    if(chapterThree === true) {
      dispatch(decrementPlayerHp(tenSidedDie));
    } else {
      dispatch(incrementPlayerHp(tenSidedDie));
    }
  }

  const renderLootResultYes = () => {
    if (lootResultYes)
      return (
        <Container>
          <h6>
            {chapterOne && emoPhilips.lootThree}
            {chapterTwo && timAllen.lootThree}
            {chapterThree && paulyShore.lootThree}
          </h6>
          {chapterThree ? <h6>You suffer {tenSidedDie} hit points of damage.</h6> : <h6>You recieve {tenSidedDie} hit points.</h6>}

          <Link
            onClick={() => {
              goBackToGame();
            }}
            style={{ textDecoration: "none", color: "white" }}
            to="/Game"
          >
            <h1 className="startGameText">CONTINUE</h1>
          </Link>
        </Container>
      );
  };

  // const history = useHistory();

  const goBackToGame = () => {
    dispatch(toggleChapterOne(false));
    dispatch(toggleChapterTwo(false));
    dispatch(toggleChapterThree(false));
    dispatch(toggleBattleDisplay(false));
    dispatch(toggleEnemyDisplay(false))
    chapterOne && dispatch(toggleChapterTwo(true));
    chapterTwo && dispatch(toggleChapterThree(true));
    chapterThree && dispatch(toggleChapterFour(true));
    // chapterFour && dispatch(toggleChapterFive(true));
  };

  const renderLootResultNo = () => {
    if (lootResultNo) {
      return (
        <Container>
          <h6>
            {chapterOne && emoPhilips.lootFour}
            {chapterTwo && timAllen.lootFour}
            {chapterThree && paulyShore.lootFour}
          </h6>
          <Link
            onClick={() => {
              goBackToGame();
            }}
            style={{ textDecoration: "none", fontFamily: "Red Rose" }}
            to="/Game"
          >
            <h1 className="buttonText">CONTINUE</h1>
          </Link>
        </Container>
      );
    }
  };

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







