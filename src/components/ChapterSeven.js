import React, { useState } from "react";
import {
  emoPhilips,
  paulyShore,
  judyTenuda,
  andrewDiceClay,
  samKinison,
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
import { Navigate } from "react-router-dom";

const ChapterSeven = () => {
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
        <h1>Chapter Five</h1>
        <h6>Thy Who Festers in Blistering Rage</h6>
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
          your way through a long windowless hallway as the sounds of enraged
          outbursts can be heard reverberating ahead. As you approach, the
          screaming abruptly stops.
        </h6>

        <h6>
          The hallway opens to a large room lined with what seems to be human
          veins pulsating in and out. In it's center lays a sticky pile of human
          gore, reeking of wet blood and unchecked rage. It is a ghastly site
          and the silence is deafening.
        </h6>

        <Row>
          <Col>
            <h5 className="choice-btn" onClick={encounterAndrewOne}>Investigate the pile</h5>
          </Col>
          <Col>
            <h5 className="choice-btn" onClick={encounterAndrewTwo}>
              Stealthily sneak past the pile and attempt enter a staircase at
              the rooms end
            </h5>
          </Col>
          <Col>
            <h5 className="choice-btn" onClick={() => setIsRunVisible(true)}>Run</h5>
          </Col>
        </Row>
      </Container>
    );
  };

  const [isRunVisible, setIsRunVisible] = useState(false);

  const renderRun = () => {
    return (
      <Navigate
        to={{
          pathname: "/Run",
        }}
      />
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
          You begin to inch toward the gore pile when you hear a familiar voice echo
          throughout the room. "I was calmly eating children when, as life would predictably DICTATE, an all too familiar DISTRACTION from all things I find PLEASURABLE!" says a disembodied voice vacilating between calm and enraged. "That some lousy DIPSHIT would waltz right into MY HOME and INTURRUPT MY SUPPER AND PREVENT ME FROM ENJOYING ONE SINGLE SOLITARY FUCKING MOMENT AND ARRRRRRRH ARRRRH ARRRRRRRRHHHHHH!!!"
        </h6>
        <h6>
          The pile of gore explodes to reveal Sam Kinison screaming is psychotic duress. 
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
          You begin to inch around the edges of the room when you hear a familiar voice
          echo throughout. "I was calmly eating children when, as life
          would predictably DICTATE, an all too familiar DISTRACTION from all
          things I find PLEASURABLE!" says a disembodied voice vacilating
          between calm and screaming. "That some lousy DIPSHIT would waltz right
          into MY HOME and INTURRUPT MY SUPPER AND PREVENT ME FROM ENJOYING ONE
          SINGLE SOLITARY FUCKING MOMENT AND ARRRRRRRH ARRRRH
          ARRRRRRRRHHHHHH!!!"
        </h6>
        <h6>
          The pile of gore explodes to reveal Sam Kinison screaming is psychotic
          duress.
        </h6>

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
    dispatch(setEnemyHp(samKinison.hitPoints));
    dispatch(toggleEnemyDisplay(true));
    dispatch(toggleBattleDisplay(true));
  };

  return (
    <div>
      {isRunVisible && renderRun()}
      {one && renderOne()}
      {two && renderTwo()}
      {three && renderThree()}
      {four && renderFour()}
      {battleSam && <Battle enemy={samKinison} />}
    </div>
  );
};

export default ChapterSeven;
