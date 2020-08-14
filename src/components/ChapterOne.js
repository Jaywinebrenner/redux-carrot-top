import React, { useState } from "react";
import {emoPhilips}  from "../constants/Monsters";
import { AREAONE } from "../constants/Story";
import { useSelector, useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Battle from './Battle'
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
  toggleBattleDisplay
} from "../actions";
import Game from './Game';

const ChapterOne = () => {

  const [one, setOne] = useState(true);
  const [two, setTwo] = useState(false);
  const [isAreaOneDisplayed, setIsAreaOneDisplayed] = useState(false);
  const [isAreaOneThreeDisplayed, setIsAreaOneThreeDisplayed] = useState(false);
  const [isAreaOneFourDisplayed, setIsAreaOneFourDisplayed] = useState(false);
  const [isAreaOneFiveDisplayed, setIsAreaOneFiveDisplayed] = useState(false);
  const [isAreaOneSixDisplayed, setIsAreaOneSixDisplayed] = useState(false);

  console.log("EMO ON CHAPTER ONE", emoPhilips);
  const dispatch = useDispatch();

  const armor = useSelector((state) => state.armor);
  const [battleEmo, setBattleEmo] = useState(false);

  const renderOne = () => {
    return (
      <div>
        <h1>Chapter One</h1>
        <h6>Domain of Thy Unspeakable Lilth Menace</h6>
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
        <h6>{AREAONE.one}</h6>
        <h6>{AREAONE.two}</h6>
        <h6>Do you:</h6>
        <Row className="answerGridWrapper">
          <Col className="answerGridOne" id="butterKnifeSelection">
            <h6 onClick={handleAreaOneThree}>
              1 - Quietly slink by the ramshacked tent and continue forth to Ha
              Ha Tower
            </h6>
          </Col>

          <Col className="answerGridTwo">
            <h6 onClick={handleAreaOneFour}>
              2 - Carefully approach the tent and sumptuous smells
            </h6>
          </Col>

          <Col className="answerGridThree">
            <h6 onClick={handleAreaOneFive}>3 - Say, 'Is anyone there?'</h6>
          </Col>

          <Col className="answerGridFour">
            <h6 onClick={handleAreaOneSix}>
              4 - Hide behind a nearby dumpster to survey the tent
            </h6>
          </Col>
        </Row>
      </Container>
    );
  };

  const handleAreaOneThree = () => {
    setTwo(false);
    setIsAreaOneThreeDisplayed(true);
  };

  const renderAreaOneThree = () => {
    if (armor === "Naked") {
      return (
        <div>
          <h6>{AREAONE.three}</h6>
          <div onClick={console.log("to do")} className="continueButtonWrapper">
            <h6 className="continueButtonText">CONTINUE</h6>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h6>
            As you begin to quietly slink through the area, your {armor} gently
            scrapes against an errant spire of rebar protruding from the
            crumbling debris.{AREAONE.eight}
          </h6>
          <div
            onClick={() => {
              setBattleEmo(true);
              // setIsEmoImageVisible(true);
              setIsAreaOneThreeDisplayed(false);
              dispatch(toggleEnemyDisplay(true));
              // dispatch(toggleChapterOne(false));
              dispatch(toggleBattleDisplay(true));
            }}
            className="continueButtonWrapper"
          >
            <h6 className="continueButtonText">CONTINUE</h6>
          </div>
        </div>
      );
    }
  };

  const handleAreaOneFour = () => {
    setTwo(false);
    setIsAreaOneFourDisplayed(true);
    // setIsEmoImageVisible(true);
  };
  const renderAreaOneFour = () => {
    return (
      <div>
        <h6>{AREAONE.four}</h6>
        <div
          onClick={() => {
            setIsAreaOneFourDisplayed(false);
            setBattleEmo(true);
            dispatch(toggleEnemyDisplay(true));
            // dispatch(toggleChapterOne(false));
            dispatch(toggleBattleDisplay(true));
            // setIsEmoImageVisible(true);
          }}
          className="continueButtonWrapper"
        >
          <h6 className="continueButtonText">CONTINUE</h6>
        </div>
      </div>
    );
  };

  const handleAreaOneFive = () => {
    setTwo(false);
    setIsAreaOneFiveDisplayed(true);
  };
  const renderAreaOneFive = () => {
    return (
      <div>
        <h6>{AREAONE.five}</h6>
        <div
          onClick={() => {
            setBattleEmo(true);
            // setIsEmoImageVisible(true);
            setIsAreaOneFiveDisplayed(false);
            dispatch(toggleEnemyDisplay(true));
            // dispatch(toggleChapterOne(false));
            dispatch(toggleBattleDisplay(true));
          }}
          className="continueButtonWrapper"
        >
          <h6 className="buttonText">CONTINUE</h6>
        </div>
      </div>
    );
  };

  const handleAreaOneSix = () => {
    setTwo(false);
    setIsAreaOneSixDisplayed(true);
  };
  const renderAreaOneSix = () => {
    return (
      <div>
        <h6>{AREAONE.six}</h6>
        <h6>{AREAONE.seven}</h6>
        <div
          onClick={() => {
            setBattleEmo(true);
            // setIsEmoImageVisible(true);
            setIsAreaOneSixDisplayed(false);
            dispatch(toggleEnemyDisplay(true));
            // dispatch(toggleCreateCharacter(false));
            // dispatch(toggleChapterOne(false));
            dispatch(toggleBattleDisplay(true))
          }}
          className="emoButtonWrapper"
        >
          <h6 className="emoButtonText">CONTINUE</h6>
        </div>
      </div>
    );
  };

  return (
    <div>
      {one && renderOne()}
      {two && renderTwo()}
      {isAreaOneThreeDisplayed && renderAreaOneThree()}
      {isAreaOneFourDisplayed && renderAreaOneFour()}
      {isAreaOneFiveDisplayed && renderAreaOneFive()}
      {isAreaOneSixDisplayed && renderAreaOneSix()}

      {battleEmo && <Battle enemy={emoPhilips}/>}
      {/* {battleEmo && Battle(emoPhilips)} */}
      {/* {battleEmo && <Game enemy={emoPhilips}/>} */}

    </div>
  );
};

export default ChapterOne;
