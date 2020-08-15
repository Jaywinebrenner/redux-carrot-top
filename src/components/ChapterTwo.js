
import Container from "react-bootstrap/Container";
import React, { useState } from "react";
import { emoPhilips } from "../constants/Monsters";
import { AREAONE } from "../constants/Story";
import { useSelector, useDispatch } from "react-redux";
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
} from "../actions";
import Game from "./Game";

const ChapterTwo = () => {

  const [isAreaOneDisplayed, setIsAreaOneDisplayed] = useState(false);
  const [isAreaOneThreeDisplayed, setIsAreaOneThreeDisplayed] = useState(false);
  const [isAreaOneFourDisplayed, setIsAreaOneFourDisplayed] = useState(false);
  const [isAreaOneFiveDisplayed, setIsAreaOneFiveDisplayed] = useState(false);
  const [isAreaOneSixDisplayed, setIsAreaOneSixDisplayed] = useState(false);

  const armor = useSelector((state) => state.armor);
  const [battleEmo, setBattleEmo] = useState(false);

  const [one, setOne] = useState(true);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false);

  console.log("CHAP TWO- is one true?", one);

  const renderOne = () => {
    return (
      <Container>
        <h1>Chapter Two</h1>
        <h3> Of Tools and Treachery</h3>
        <div>
          <h6
            onClick={endOne}
            className="buttonText"
          >
            CONTINUE
          </h6>
        </div>
      </Container>
    );
  }

  const endOne = () => {
    setTwo(true);
    setOne(false);
  }

  const renderTwo = () => {
    return (
      <Container>
        <h6>
          Crawling through a large pile of municipal waste and rubbish, you
          emerge in the courtyard of the elusive Ha Ha Tower. It is an imposing
          structure filled with menace and dread. Life-like statues of blood
          thristy comedians loom from the tresses like maniacal gargoyles.
        </h6>
        <h6>
          As you approach, a bellowing voice echos throughout the
          coutryard. 'Welcome Comedian Slayer. To gain access to Ha Ha Tower,
          you must answer 3 questions about my celebrated situational comedy
          Home Improvement.'
        </h6>
        <div
          onClick={() => {
            setTwo(false);
            setThree(true)
          }}
        >
          <h6 className="buttonText">CONTINUE</h6>
        </div>
      </Container>
    );
  };


  //QUESTIONS

    const renderThree = () => {
      return (
        <Container>
            <h6>Tim Allen bursts from a pile of rebar and human remains. "You have little choice, Comedian Slayer. Either answer my
              quesitons correctly... Or die."
            </h6>
          <Row>
            <Col>
              <h5 onClick={attack}>1- Attack</h5>
            </Col>

            <Col>
              <h5 onClick={() => {
                setThree(false)
                setFour(true)}}
                >2 -Answer his questions</h5>
            </Col>

            <Col>
              <h5 onClick={run}>3- Run</h5>
            </Col>
          </Row>
        </Container>
      );
    };

    const attack = () => {
      //to do
    }

    const run = () => {
      //to do
    };

    const [questionOneInput, setQuestionOneInput] = useState('')

    const renderFour = () => {

      return (
        <Container>
          <h6>
            "Wise choice," he smirks as he licks a handful of drillbits. 'What
            was the name of the revered child actor who portrayed my son Randy?'
          </h6>
          <input
            ref={(input) => input && input.focus()}
            className="submitNameInput"
            onChange={(event) => setQuestionOneInput(event.target.value)}
            value={questionOneInput}
          />
          <h6 className="buttonText" onClick={() => submitAnswerOne()}>
            SUBMIT
          </h6>
        </Container>
      );
    };

    const submitAnswerOne = () => {
        if (
          questionOneInput.toUpperCase() === "JONATHAN TAYLOR THOMAS" ||
          questionOneInput.toUpperCase() === "JONATHAN THOMAS"
        ) {
          return (
            <h6>You are correct.</h6>
          ) 
  
        }

    }




  return (
    <Container className="chapterTwoWrapper">
      {one && renderOne()}
      {two && renderTwo()}
      {three && renderThree()}
      {four && renderFour()}
    </Container>
  );
}

export default ChapterTwo