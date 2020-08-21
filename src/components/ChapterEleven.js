import React, { useState } from "react";
import {
  emoPhilips,
  paulyShore,
  judyTenuda,
  andrewDiceClay,
  samKinison,
  victoriaJackson,
  rodneyDangerfield,
} from "../constants/Monsters";
import { AREATHREE } from "../constants/Story";
import { useSelector, useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Battle from "./Battle";
import {
  changeName,
  changeWeapon,
  changeDamage,
  changeArmor,
  changeMainDisplayOne,
  changeMainDisplayTwo,
  toggleCreateCharacter,
  toggleChapterOne,
  toggleChapterTwo,
  changeDefence,
  toggleEnemyDisplay,
  toggleBattleDisplay,
  setEnemyHp,
} from "../actions";
import Game from "./Game";

const ChapterEleven = () => {
  const [one, setOne] = useState(true);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  const [battleSam, setBattleSam] = useState(false);

  const dispatch = useDispatch();

  const armor = useSelector((state) => state.armor);
  const name = useSelector((state) => state.name);

  const renderOne = () => {
    return (
      <div>
        <h1>Chapter Eight</h1>
        <h6>Thy of No Respect</h6>
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
          The door opens with to reveal an escalator climbing skyward littered
          with divorce papers and restraining orders. You trepidatiously step on
          the escaltor experiencing a brief moment of relief that you need not
          climb more stairs. The moment passes quickly albeit. As you ascend, a
          chorus of canned laughter can be heard reverberating from ahead.
        </h6>

        <h6>
          You reach the landing above, the laughter halts and it opens a room
          completely shrouded in darkness. You hear the wet, sticky sounds of
          someone eating.
        </h6>

        <Row>
          <Col>
            <h5 onClick={encounterAndrewOne}>Investigate the room</h5>
          </Col>
          <Col>
            <h5 onClick={encounterAndrewTwo}>
              Stealthily sneak past through the edges of the room and enter a
              door at it's end
            </h5>
          </Col>
          <Col>
            <h5 onClick={() => alert("RUN")}>Run</h5>
          </Col>
        </Row>
      </Container>
    );
  };

  const encounterAndrewOne = () => {
    setTwo(false);
    setThree(true);
  };
  const encounterAndrewTwo = () => {
    setTwo(false);
    setFour(true);
  };

  const renderThree = () => {
    return (
      <Container>
        <h6>
          You begin to inch forward when a spotlight illuminiates a man hunched over feasting on a carcass.
        </h6>
        <h6>
          Rodney Dangerfield slowly swivels his head in your direction. "I tell ya," he says with blood and sinew dangling from his mouth. "My wife is so ugly she looks like a plate of meat and potatoes. That's why I'm eating her right fucking now!"
        </h6>

        <h6>
          He leaps to his feat and lunges at you with surprising speed. 
        </h6>

        <div onClick={beginBattle}>
          <h6 className="buttonText">CONTINUE</h6>
        </div>
      </Container>
    );
  };

  const renderFour = () => {
    return (
      <Container>
        <h6>
          You begin to inch around the corners of the room when a spotlight illuminiates a man hunched
          over feasting on a carcass.
        </h6>
        <h6>
          Rodney Dangerfield slowly swivels his head in your direction. "I tell
          ya," he says with blood and sinew dangling from his mouth. "My wife is
          so ugly she looks like a plate of meat and potatoes. That's why I'm
          eating her right fucking now!"
        </h6>
        <h6>He leaps to his feat and lunges at you with surprising speed.</h6>
        <div onClick={beginBattle}>
          <h6 className="buttonText">CONTINUE</h6>
        </div>
      </Container>
    );
  };

  const beginBattle = () => {
    setBattleSam(true);
    setFour(false);
    setThree(false);
    dispatch(setEnemyHp(rodneyDangerfield.hitPoints));
    dispatch(toggleEnemyDisplay(true));
    dispatch(toggleBattleDisplay(true));
  };

  return (
    <div>
      {one && renderOne()}
      {two && renderTwo()}
      {three && renderThree()}
      {four && renderFour()}
      {battleSam && <Battle enemy={rodneyDangerfield} />}
    </div>
  );
};

export default ChapterEleven;
