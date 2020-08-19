import React, { useState } from "react";
import { emoPhilips, paulyShore } from "../constants/Monsters";
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

const ChapterThree = () => {
  const [one, setOne] = useState(true);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false)
  const [four, setFour] = useState(false);
  const [battlePauly, setBattlePauly] = useState(false)

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
        <h1>Chapter Three</h1>
        <h6>Thy Demon in Await with Tress</h6>
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
        <h6>{AREATHREE.one}</h6>
        <div
          onClick={() => {
            setTwo(false)
            setThree(true)          
          }}
        >
          <h6 className="buttonText">CONTINUE</h6>
        </div>
      </Container>
    );
  };

  const renderThree = () => {
    return (
      <Container>
        <h6>{AREATHREE.two}</h6>
        <h6>{AREATHREE.three}</h6>
        <h6>Do you:</h6>
        <Row className="answerGridWrapper">
          <Col className="answerGridOne" id="butterKnifeSelection">
            <h6
              onClick={() => {
                setThree(false);
                setFour(true);
              }}
            >
              Open Door Number One
            </h6>
          </Col>

          <Col className="answerGridTwo">
            <h6 onClick={() => {
                setThree(false);
                setFour(true);
              }}>Open Door Number Two</h6>
          </Col>

          <Col className="answerGridThree">
            <h6 onClick={() => {
                setThree(false);
                setFour(true);
              }}>Open Door Number Three</h6>
          </Col>

          <Col className="answerGridFour">
            <h6 onClick={() => {
                setThree(false);
                setFour(true);
              }}>Run from this vile place</h6>
          </Col>
        </Row>
      </Container>
    );
  }


  const renderFour = () => {
    return (
      <Container>
        <h6>
          Before grasping the door handle, a terrible shuffling noise is heard
          over head. Looking up, a human figure is seen flipping through the
          rafters in impressive Olympic fashion and lands several yards away.
        </h6>
        <h6>"Hey Buuuuuuuudy," </h6>
        <h1 className="buttonText" onClick={beginBattle}>CONTINUE</h1>
      </Container>
    );
  };

const beginBattle = () => {
  setBattlePauly(true)
      setFour(false)
      dispatch(setEnemyHp(paulyShore.hitPoints));
      dispatch(toggleEnemyDisplay(true));
      dispatch(toggleBattleDisplay(true));
}

  return (
    <div>
      {one && renderOne()}
      {two && renderTwo()}
      {three && renderThree()}
      {four && renderFour()}
      {battlePauly && <Battle enemy={paulyShore} />}
    </div>
  );
};

export default ChapterThree;
