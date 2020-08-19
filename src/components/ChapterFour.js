import React, { useState } from "react";
import { emoPhilips, paulyShore } from "../constants/Monsters";
import { AREATHREE } from "../constants/Story";
import { useSelector, useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Battle from "./Battle";
import {
  toggleChapterFive,
  toggleChapterFour,
  toggleChapterEight,
  toggleChapterSeven,
  toggleChapterSix,
  toggleEnemyDisplay,
  toggleBattleDisplay,
  setEnemyHp,
} from "../actions";
import Game from "./Game";

const ChapterFour = () => {
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
  const [battleEmo, setBattleEmo] = useState(false);

  const renderOne = () => {
    return (
      <div>
        <h1>Chapter Four</h1>
        <h6>Descent into the Bowls of Ha Ha Tower</h6>
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
          You kick Pauly Shores fallen carcass and make your way up the
          staircase enshrouded in infinite blackness. You climb and climb. For
          hours, perhaps days. You come to a landing with three doors bathed in
          blood-red light. You are now deep in the Bowles of Ha Ha Tower. The
          highest echelon of The Illuminati of Laughter is near. Your bones ache
          and your blood quickens.
        </h6>

        <h6>You examine the three doors.</h6>
        <h6>
          The aroma of maddness and the soft unsettling sounds of what seems to
          be an accordian can be heard reverberating through what lies beyond
          Door One. Door Number Two is wrapped in what appears to be black
          leather and reeks of casual sexism and cigarette smoke. Door Number
          Three smells of unchecked rage and pulsates with what looks to be
          human veins.
        </h6>
        <Row>
          <Col>
            <h5 onClick={judyDoor}>Enter Door #1</h5>
          </Col>
          <Col>
            <h5 onClick={diceDoor}>Enter Door #2</h5>
          </Col>
          <Col>
            <h5 onClick={kinisonDoor}>Enter Door #3</h5>
          </Col>
          <Col>
            <h5 onClick={run}>Run from this vile place</h5>
          </Col>
        </Row>
      </Container>
    );
  };

    const judyDoor = () => {
      setTwo(false);
      dispatch(toggleChapterFive(true))
      dispatch(toggleChapterFour(false));
    }

    const diceDoor= () => {
      setTwo(false);
      dispatch(toggleChapterSix(true));
      dispatch(toggleChapterFour(false));
    };

    const kinisonDoor = () => {
      setTwo(false);
      dispatch(toggleChapterSeven(true));
      dispatch(toggleChapterFour(false));
    };

    const run = () => {
      setTwo(false);
      alert("to do")
    };



  const beginBattle = () => {
    setBattlePauly(true);
    setFour(false);
    dispatch(setEnemyHp(paulyShore.hitPoints));
    dispatch(toggleEnemyDisplay(true));
    dispatch(toggleBattleDisplay(true));
  };

  return (
    <div>
      {one && renderOne()}
      {two && renderTwo()}
      {battlePauly && <Battle enemy={paulyShore} />}
    </div>
  );
};

export default ChapterFour;
