import React, { useState } from "react";
import { emoPhilips, paulyShore, judyTenuda, andrewDiceClay } from "../constants/Monsters";
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

const ChapterSix = () => {
  const [one, setOne] = useState(true);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  const [battleAndrew, setBattleAndrew] = useState(false);

  const dispatch = useDispatch();

  const armor = useSelector((state) => state.armor);
  const name = useSelector((state) => state.name);
  console.log("NAME on DICE MAN", armor);

  const renderOne = () => {
    return (
      <div>
        <h1>Chapter Five</h1>
        <h6>Thy Dark Prince of Masculinity</h6>
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
          The door opens with a firm push of the shoulder. You gingerly make
          your way through a long windowless hallway as the sounds of an
          emphatic "Ohhhhhh!" can sporadically be heard reverberating ahead. As
          you approach an archway which leads to an open room shrouded in dark
          male energy, the "ohhhhs" abruptly stop.
        </h6>

        <h6>
          The hallway opens to large room padded in black leather with a
          pristine red and white 1957 Ford Fairlane 500 Skyliner parked
          in it's center. It's sight is dreadfully out of place and the silence
          is deafening.
        </h6>

        <Row>
          <Col>
            <h5 onClick={encounterAndrewOne}>Investigate the Automobile</h5>
          </Col>
          <Col>
            <h5 onClick={encounterAndrewTwo}>
              Stealthily sneak past the sarcophagus and attempt enter a
              staircase at the rooms end
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
          You begin to inch toward the car when you hear a familiar voice echo
          throughout the room. "{name} and Jill go up a hill..." says a black
          leather clad man as he casually steps out of the car. "... and Jill
          comes down with {name}'s intestines in her fuckin' mouth,
          OHHHHHHHHHHH!"{" "}
        </h6>
        <h6>
          Andrew Dice Clay snaps out a cigarette with lightening precision,
          lights it and attacks.
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
          You begin to inch toward the car when you hear a familiar voice echo
          throughout the room. "{name} and Jill go up a hill..." says a black
          leather clad man as he casually steps out of the car. "... and Jill
          comes down with {name}'s intestines in her fuckin' mouth, OHHHHHHHHHHH!"{" "}
        </h6>
        <h6>
          Andrew Dice Clay snaps out a cigarette with lightening precision,
          lights it up and attacks.
        </h6>
        <div onClick={beginBattle}>
          <h6 className="buttonText">CONTINUE</h6>
        </div>
      </Container>
    );
  };

  const beginBattle = () => {
    setBattleAndrew(true);
    setFour(false);
    setThree(false);
    dispatch(setEnemyHp(andrewDiceClay.hitPoints));
    dispatch(toggleEnemyDisplay(true));
    dispatch(toggleBattleDisplay(true));
  };

  return (
    <div>
      {one && renderOne()}
      {two && renderTwo()}
      {three && renderThree()}
      {four && renderFour()}
      {battleAndrew && <Battle enemy={andrewDiceClay} />}
    </div>
  );
};

export default ChapterSix;
