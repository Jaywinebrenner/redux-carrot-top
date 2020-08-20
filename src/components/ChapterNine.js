import React, { useState } from "react";
import { emoPhilips, paulyShore } from "../constants/Monsters";
import { AREATHREE } from "../constants/Story";
import { useSelector, useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Battle from "./Battle";
import {
  toggleChapterTen,
  toggleChapterThirteen,
  toggleChapterEleven,
  toggleChapterTwelve,
  toggleChapterSix,
  toggleEnemyDisplay,
  toggleBattleDisplay,
  setEnemyHp,
} from "../actions";
import Game from "./Game";

const ChapterNine = () => {
  const [one, setOne] = useState(true);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  const [battlePauly, setBattlePauly] = useState(false);

  const [isAreaOneDisplayed, setIsAreaOneDisplayed] = useState(false);
  const [isAreaOneThreeDisplayed, setIsAreaOneThreeDisplayed] = useState(false);
  const [isAreaOneFourDisplayed, setIsAreaOneFourDisplayed] = useState(false);
  const [isAreaOneFiveDisplayed, setIsAreaOneFiveDisplayed] = useState(false);
  const [isAreaOneSixDisplayed, setIsAreaOneSixDisplayed] = useState(false);

  const dispatch = useDispatch();

  const armor = useSelector((state) => state.armor);

  const renderOne = () => {
    return (
      <div>
        <h1>Chapter Seven</h1>
        <h6>Ascent into the Inner Chambers</h6>
        <div
          onClick={() => {
            setOne(false);
            setTwo(true);
          }}
        >
          <h6 className="buttonText">CONTINUE</h6>
        </div>
      </div>
    );
  };

  const renderTwo = () => {
    return (
      <Container>
        <h6>
          You take one final glance at Bobcat Goldthwait's half-eaten dead body and enter a stark room containing, once again, three more doors. 
        </h6>

        <h6>You examine them.</h6>
        <h6>
          A faint high-pitched squawking can be heard beyond Door Number One. Door Number Two reeks of insecruity, bitterness and profound discontent. Door Number three is bathed in sickly variations of the colors red, white and blue.
        </h6>
        <Row>
          <Col>
            <h5 onClick={victoriaDoor}>Enter Door #1</h5>
          </Col>
          <Col>
            <h5 onClick={rodneyDoor}>Enter Door #2</h5>
          </Col>
          <Col>
            <h5 onClick={yakovDoor}>Enter Door #3</h5>
          </Col>
          <Col>
            <h5 onClick={run}>Run from this vile place</h5>
          </Col>
        </Row>
      </Container>
    );
  };

  const victoriaDoor = () => {
    setTwo(false);
    dispatch(toggleChapterTen(true));
    dispatch(toggleChapterThirteen(false));
  };

  const rodneyDoor = () => {
    setTwo(false);
    dispatch(toggleChapterEleven(true));
    dispatch(toggleChapterThirteen(false));
  };

  const yakovDoor = () => {
    setTwo(false);
    dispatch(toggleChapterTwelve(true));
    dispatch(toggleChapterThirteen(false));
  };

  const run = () => {
    setTwo(false);
    alert("to do");
  };

  // const beginBattle = () => {
  //   setBattlePauly(true);
  //   setFour(false);
  //   dispatch(setEnemyHp(paulyShore.hitPoints));
  //   dispatch(toggleEnemyDisplay(true));
  //   dispatch(toggleBattleDisplay(true));
  // };

  return (
    <div>
      {one && renderOne()}
      {two && renderTwo()}
      {/* {battlePauly && <Battle enemy={paulyShore} />} */}
    </div>
  );
};

export default ChapterNine;
