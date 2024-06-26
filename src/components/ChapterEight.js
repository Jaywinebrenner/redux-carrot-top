import Container from "react-bootstrap/Container";
import React, { useState, useEffect } from "react";
import { AREAONE } from "../constants/Story";
import { useSelector, useDispatch } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Battle from "./Battle";
import { timAllen, bobcatGoldthwait } from "../constants/Monsters";
import {
  incrementPlayerHp,
  decrementPlayerHp,
  toggleEnemyDisplay,
  toggleBattleDisplay,
  toggleChapterEight,
  toggleChapterNine,
  setEnemyHp,
} from "../actions";
import { Navigate } from "react-router-dom";

const ChapterEight = () => {
  const dispatch = useDispatch();

  const battleVisible = useSelector((state) => state.battleVisible);

  // console.log("battle visible -", battleVisible);

  const chapterEight = useSelector((state) => state.chapterEight);
  const chapterNine = useSelector((state) => state.chapterNine);
  const name = useSelector((state) => state.name);
  const [battleBobcat, setBattleBobcat] = useState(false);

  const [one, setOne] = useState(true);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false);
  const [six, setSix] = useState(false);
  const [seven, setSeven] = useState(false);
  const [eight, setEight] = useState(false);
  const [nine, setNine] = useState(false);
  const [ten, setTen] = useState(false);

  const renderOne = () => {
    return (
      <Container>
        <h1>Chapter Six</h1>
        <h3>Of Thy Wretched Misery and Terrible Derangement</h3>
        <div>
          <h6 onClick={endOne} className="buttonText">
            CONTINUE
          </h6>
        </div>
      </Container>
    );
  };

  const endOne = () => {
    setTwo(true);
    setOne(false);
  };

  const renderTwo = () => {
    return (
      <Container>
        <h6></h6>
        <h6>
          You enter the ceasless stairwell which seems to pierce the sky itself.
          You walk for what seems to be days. Your legs ache. Your feet blister.
          Yet your sense of purpose is direct, unwaivering. It could crush worlds. You are close.
        </h6>
        <h6>Atop the stairwell you see a silhouette of man. "Hi {name}. It's time for you to answer some questions, to ya know, like move forward..." says a stilted voice in choppy, off-kiler cadence.</h6>
        <div
          onClick={() => {
            setTwo(false);
            setThree(true);
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
        <h6>
          Bobcat Goldthwait steps into a sickly pink light. "But ya know, let's
          face it though. You're going to die either way, Eeruhh."
        </h6>
        <Row>
          <Col>
            <h5 className="choice-btn"
              onClick={() => {
                setThree(false);
                setAttackVisible(true);
              }}
            >
              Attack
            </h5>
          </Col>

          <Col>
            <h5 className="choice-btn"
              onClick={() => {
                setThree(false);
                setFour(true);
              }}
            >
              Answer his questions
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

  const [attackVisible, setAttackVisible] = useState(false);

  const renderAttackOption = () => {
    return (
      <Container>
        <h6>
          "What's the rush {name}? I'll be licking your beating heart soon enough, you know what I mean?"
        </h6>
        <h5
          className="buttonText"
          onClick={() => {
            setAttackVisible(false);
            setFour(true);
          }}
        >
          CONTINUE
        </h5>
      </Container>
    );
  };



  const [questionOneInput, setQuestionOneInput] = useState("");

  const renderFour = () => {
    return (
      <Container>
        <h6>
          Bobcat Goldthwait pauses and glances at his hand. He inserts his index
          finger into his mouth and scraps off the meat and skin with his teeth revealing three
          connected skeletal finger bones. 
        </h6>
        <h6>
          "So like, the actor who made weird noises with his mouth and stuff who
          starred with me in some of these movies about police people? Yea, um... what's his name in like, real life?
        </h6>
        <input
          ref={(input) => input && input.focus()}
          className="submitNameInput"
          onChange={(event) =>
            setQuestionOneInput(event.target.value.toUpperCase())
          }
          value={questionOneInput}
        />
        <h6 className="buttonText" onClick={submitOne}>
          SUBMIT
        </h6>
      </Container>
    );
  };

  const [playerDidNotEnterAnswer, setPlayerDidNotEnterAnswer] = useState(false);

  const submitOne = () => {
    if (!questionOneInput || questionOneInput === " ") {
      dispatch(decrementPlayerHp(3));
      setPlayerDidNotEnterAnswer(true);
    } else {
      if (
        questionOneInput === "MICHAEL WINSLOW"
      ) {
        setFour(false);
        setFive(true);
        setPlayerDidNotEnterAnswer(false);
      } else {
        dispatch(decrementPlayerHp(3));
        setFour(false);
        setFive(true);
        setPlayerDidNotEnterAnswer(false);
      }
    }
  };

  const [questionTwoInput, setQuestionTwoInput] = useState("");

  const renderFive = () => {
    if (questionOneInput === "MICHAEL WINSLOW") {
      return (
        <Container>
          <h6>"Yea, that was his name."</h6>
          <h6>
            "So, question two... in those same police movies, there was this
            real tall guy. Like, real tall. What did they call him in the
            movies?"
          </h6>
          <input
            ref={(input) => input && input.focus()}
            className="submitNameInput"
            onChange={(event) =>
              setQuestionTwoInput(event.target.value.toUpperCase())
            }
            value={questionTwoInput}
          />
          <h6 className="buttonText" onClick={submitTwo}>
            SUBMIT
          </h6>
        </Container>
      );
    } else {
      return (
        <Container>
          <h6>
            Bobcat's eye light up. "WRONG!" he squeals and spits the finger
            flesh at you with lightening speed, piercing you for 3 hit points of
            damage.
          </h6>
          <h6>
            Bobcat Goldthwait inserts another finger into his mouth and scraps
            off the flesh with his teeth.
          </h6>
          <h6>
            "So, question two... in those same police movies, there was this
            real tall guy. Like, real tall. What did they call him in the
            movies?"
          </h6>
          <input
            ref={(input) => input && input.focus()}
            className="submitNameInput"
            onChange={(event) =>
              setQuestionTwoInput(event.target.value.toUpperCase())
            }
            value={questionTwoInput}
          />
          <h6 className="buttonText" onClick={submitTwo}>
            SUBMIT
          </h6>
        </Container>
      );
    }
  };

  const submitTwo = () => {
    if (!questionTwoInput || questionTwoInput === " ") {
      dispatch(decrementPlayerHp(3));
      setPlayerDidNotEnterAnswer(true);
    } else {
      if (
        questionTwoInput === "HIGHTOWER" ||
        questionTwoInput === "HIGH TOWER"
      ) {
        setFive(false);
        setSix(true);
        setPlayerDidNotEnterAnswer(false);
      } else {
        dispatch(decrementPlayerHp(3));
        setFive(false);
        setSix(true);
        setPlayerDidNotEnterAnswer(false);
      }
    }
  };

  const [questionThreeInput, setQuestionThreeInput] = useState("");

  const renderSix = () => {
    if (questionTwoInput === "HIGHTOWER" || questionTwoInput === "HIGH TOWER") {
      return (
        <Container>
          <h6>"Yea, you got it."</h6>
          <h6>
            "So like, the lead character in some of these police movies was
            called Mahoney. What was his name in real life?"
          </h6>
          <input
            ref={(input) => input && input.focus()}
            className="submitNameInput"
            onChange={(event) =>
              setQuestionThreeInput(event.target.value.toUpperCase())
            }
            value={questionThreeInput}
          />
          <h6 className="buttonText" onClick={submitThree}>
            SUBMIT
          </h6>
        </Container>
      );
    } else {
      return (
        <Container>
          <h6>
            Bobcat's eye light up. "WRONG!" he squeals and spits the finger
            flesh at you with lightening speed, piercing you for 3 hit points of
            damage.
          </h6>
          <h6>
            Bobcat Goldthwait inserts another finger into his mouth and scraps
            off the flesh with his teeth.
          </h6>
          <h6>
            "So like, the lead character in some of these police movies was
            called Mahoney. What was his name in real life?"
          </h6>
          <input
            ref={(input) => input && input.focus()}
            className="submitNameInput"
            onChange={(event) =>
              setQuestionThreeInput(event.target.value.toUpperCase())
            }
            value={questionThreeInput}
          />
          <h6 className="buttonText" onClick={submitThree}>
            SUBMIT
          </h6>
        </Container>
      );
    }
  };

  const submitThree = () => {
    if (!questionThreeInput || questionThreeInput === " ") {
      dispatch(decrementPlayerHp(3));
      setPlayerDidNotEnterAnswer(true);
    } else {
      if (
        questionThreeInput === "STEVE GUTTENBERG" 
      ) {
        setSix(false);
        setSeven(true);
        setPlayerDidNotEnterAnswer(false);
      } else {
        dispatch(decrementPlayerHp(3));
        setSix(false);
        setSeven(true);
        setPlayerDidNotEnterAnswer(false);
      }
    }
  };

  const [questionFourInput, setQuestionFourInput] = useState("");

  const renderSeven = () => {
    if (questionThreeInput === "STEVE GUTTENBERG") {
      return (
        <Container>
          <h6>"Yep. You are right {name}"</h6>
          <h6>
            "Okay, here comes question four. That actor guy from that last question? He had sex with an alien in some movie. It wasn't normal sex, it was like with light beams and stuff, but still sex. What was the name of that movie?"
          </h6>
          <input
            ref={(input) => input && input.focus()}
            className="submitNameInput"
            onChange={(event) =>
              setQuestionFourInput(event.target.value.toUpperCase())
            }
            value={questionFourInput}
          />
          <h6 className="buttonText" onClick={submitFour}>
            SUBMIT
          </h6>
        </Container>
      );
    } else {
      return (
        <Container>
          <h6>
            Bobcat's eye light up. "WRONG!" he squeals and spits the finger
            flesh at you with lightening speed, piercing you for 3 hit points of
            damage.
          </h6>
          <h6>
            Bobcat Goldthwait inserts another finger into his mouth and scraps
            off the flesh with his teeth.
          </h6>
          <h6>
            "Okay, here comes question four. That actor guy from that last
            question? He had sex with an alien in some movie. It wasn't normal
            sex, it was like with light beams and stuff, but still sex. What was
            the name of that movie?"
          </h6>
          <input
            ref={(input) => input && input.focus()}
            className="submitNameInput"
            onChange={(event) =>
              setQuestionFourInput(event.target.value.toUpperCase())
            }
            value={questionFourInput}
          />
          <h6 className="buttonText" onClick={submitFour}>
            SUBMIT
          </h6>
        </Container>
      );
    }
  };

  const submitFour = () => {
    if (!questionFourInput || questionFourInput === " ") {
      dispatch(decrementPlayerHp(3));
      setPlayerDidNotEnterAnswer(true);
    } else {
      if (questionFourInput === "CACOON") {
        setSeven(false);
        setEight(true);
        setPlayerDidNotEnterAnswer(false);
      } else {
        dispatch(decrementPlayerHp(3));
        setSeven(false);
        setEight(true);
        setPlayerDidNotEnterAnswer(false);
      }
    }
  };

  const [questionFiveInput, setQuestionFiveInput] = useState("");

  const renderEight = () => {
    if (questionFourInput === "CACOON") {
      return (
        <Container>
          <h6>"Yea that's right. Cacoon it is."</h6>
          <h6>
            "Okay, last question before I eat your face off. So, that last movie also starred a guy that kind of looked like a walrus and said the name of a metabolic disorder really weird. What was the name of that metabolic disorder?"
          </h6>
          <input
            ref={(input) => input && input.focus()}
            className="submitNameInput"
            onChange={(event) =>
              setQuestionFiveInput(event.target.value.toUpperCase())
            }
            value={questionFiveInput}
          />
          <h6 className="buttonText" onClick={submitFive}>
            SUBMIT
          </h6>
        </Container>
      );
    } else {
      return (
        <Container>
          <h6>
            Bobcat's eye light up. "WRONG!" he squeals and spits the finger
            flesh at you with lightening speed, piercing you for 3 hit points of
            damage.
          </h6>
          <h6>
            Bobcat Goldthwait inserts another finger into his mouth and scraps
            off the flesh with his teeth.
          </h6>
          <h6>
            "Okay, last question before I eat your face off. So, that last movie
            also starred a guy that kind of looked like a walrus and said the
            name of a metabolic disorder really weird. What was the name of that
            metabolic disorder?"
          </h6>
          <input
            ref={(input) => input && input.focus()}
            className="submitNameInput"
            onChange={(event) =>
              setQuestionFiveInput(event.target.value.toUpperCase())
            }
            value={questionFiveInput}
          />
          <h6 className="buttonText" onClick={submitFive}>
            SUBMIT
          </h6>
        </Container>
      );
    }
  };

  const submitFive = () => {
    if (!questionFiveInput || questionFiveInput === " ") {
      dispatch(decrementPlayerHp(3));
      setPlayerDidNotEnterAnswer(true);
    } else {
      if (questionFiveInput === "DIABETES") {
        setEight(false);
        setNine(true);
        setPlayerDidNotEnterAnswer(false);
      } else {
        dispatch(decrementPlayerHp(3));
        setEight(false);
        setNine(true);
        setPlayerDidNotEnterAnswer(false);
      }
    }
  };

  const renderNine = () => {
    if (questionFiveInput === "DIABETES") {
      return (
        <Container>
          <h6>"Yea," he squeals.</h6>
          <h6 onClick={goToTen} className="buttonText">
            CONTINUE
          </h6>
        </Container>
      );
    } else {
      return (
        <Container>
          <h6>
            Bobcat's eye light up. "WRONG!" he squeals and spits the finger
            flesh at you with lightening speed, piercing you for 3 hit points of
            damage.
          </h6>

          <h6 onClick={goToTen} className="buttonText">
            CONTINUE
          </h6>
        </Container>
      );
    }
  };

  const goToTen = () => {
    setNine(false);
    setTen(true);
  };

  const renderTen = () => {
    if (
      questionOneInput === "MICHAEL WINSLOW" &&
      (questionTwoInput === "HIGHTOWER" || questionTwoInput === "HIGH TOWER") &&
      questionThreeInput === "STEVE GUTTENBERG" &&
      questionFourInput === "CACOON" &&
      questionFiveInput === "DIABETES"
    ) {
      return (
        <Container>
          <h6>"Damn it", he growls.</h6>
          <h6>"I can't eat you. You answered all the questions. So hungry."</h6>

          <h6>
            Bobcat Goldthwait falls to the ground and frantically begins eating
            his own arm, then his legs and feet until he begins to convulse in a
            pool of his own blood.
          </h6>
          <h6>He has died.</h6>
          <h6 onClick={() => skipBattle()} className="buttonText">
            CONTINUE
          </h6>
        </Container>
      );
    } else {
      return (
        <Container>
          <h6>
            "This is exactly what I want. I'm so happy you are so stupid. I'm so
            hungry."
          </h6>
          <h6>
            Bobcat Goldthwait inserts another finger into his mouth and scraps
            it clean. "SO... HUNGRY!!"
          </h6>
          <h6>He attacks. </h6>
          <h6 onClick={() => beginBattle()} className="buttonText">
            CONTINUE
          </h6>
        </Container>
      );
    }
  };


  const skipBattle = () => {
    chapterEight && dispatch(toggleChapterNine(true));
    chapterEight && dispatch(toggleChapterEight(false));
    setTen(false);
  }

  const beginBattle = () => {
    dispatch(setEnemyHp(timAllen.hitPoints));
    setBattleBobcat(true);
    setTen(false);
    dispatch(toggleEnemyDisplay(true));
    dispatch(toggleBattleDisplay(true));
  };

  // console.log("1", questionOneInput);
  // console.log("2", questionTwoInput);
  // console.log("3",questionThreeInput);
  // console.log("4",questionFourInput);
  // console.log("5",questionFiveInput);

  return (
    <Container className="chapterTwoWrapper">
      {isRunVisible && renderRun()}
      {attackVisible && renderAttackOption()}
      {one && renderOne()}
      {two && renderTwo()}
      {three && renderThree()}
      {four && renderFour()}
      {five && renderFive()}
      {six && renderSix()}
      {seven && renderSeven()}
      {eight && renderEight()}
      {nine && renderNine()}
      {ten && renderTen()}
      {playerDidNotEnterAnswer && <h1>THIS IS AN UNACCEPTABLE ANSWER!</h1>}
      {battleBobcat && <Battle enemy={bobcatGoldthwait} />}
    </Container>
  );
};

export default ChapterEight;
