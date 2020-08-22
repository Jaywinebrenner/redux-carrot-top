
import Container from "react-bootstrap/Container";
import React, { useState, useEffect } from "react";
import { AREAONE } from "../constants/Story";
import { useSelector, useDispatch } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Battle from "./Battle";
import { timAllen } from "../constants/Monsters";
import {
  decrementPlayerHp,
  toggleEnemyDisplay,
  toggleBattleDisplay,
  toggleChapterThree,
  toggleChapterTwo,
  setEnemyHp
} from "../actions";
import Game from "./Game";
import { Redirect, Route } from "react-router-dom";

const ChapterTwo = () => {

  const dispatch = useDispatch();

  const playerHitpoints = useSelector((state) => state.playerHitpoints);
  
  const isPlayerDeadCheck = () => {
    console.log("HIT POINTS ON CHAPTER TWO", playerHitpoints);

    if (playerHitpoints < 1) {
      return (
        <Redirect
          to={{
            pathname: "/Dead",
          }}
        />
      );
    }
  };
  

  const battleVisible = useSelector((state) => state.battleVisible);

  // console.log("battle visible -", battleVisible);

  const chapterTwo = useSelector((state) => state.chapterTwo);
  const [battleTim, setBattleTim] = useState(false);

  const [one, setOne] = useState(true);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false);
  const [six, setSix ] = useState(false);
  const [seven, setSeven] = useState(false);
  const [eight, setEight ] = useState(false);
  const [nine, setNine ] = useState(false)
  const [ten, setTen] = useState(false)

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
          coutryard. "Welcome Comedian Slayer. To gain access to Ha Ha Tower,
          you must answer 5 questions about my celebrated situational comedy
          Home Improvement."
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
          <h6>
            Tim Allen bursts from a pile of rebar and human remains. "You have
            little choice, Comedian Slayer," he smirks as he licks a handful of
            drill bits. "Either answer my quesitons correctly... Or die."
          </h6>
          <Row>
            <Col>
              <h5 onClick={() => {
                setThree(false);
                setAttackVisible(true);
                }}>Attack</h5>
            </Col>

            <Col>
              <h5
                onClick={() => {
                  setThree(false);
                  setFour(true);
                }}
              >
                Answer his questions
              </h5>
            </Col>

            <Col>
              <h5 onClick={() => setIsRunVisible(true)}>Run</h5>
            </Col>
          </Row>
        </Container>
      );
    };

    const [isRunVisible, setIsRunVisible] = useState(false)

      const renderRun = () => {
        return (
          <Redirect
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
           "In due time Comedy Slayer. I prefer to suss the intellectual meddle
           of my victims before eating out their brains."
         </h6>
         <h5 className="buttonText" onClick={() => {
           setAttackVisible(false);
           setFour(true);
          }}
           >CONTINUE</h5>
       </Container>
     );
    }



    const [questionOneInput, setQuestionOneInput] = useState('')

    const renderFour = () => {

      return (
        <Container>
          <h6>
            "What was the name of the revered child actor who portrayed my son
            Randy?
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

    const [playerDidNotEnterAnswer, setPlayerDidNotEnterAnswer] = useState(false)



      const submitOne = () => {
        if (!questionOneInput || questionOneInput === " ") {
          dispatch(decrementPlayerHp(3))
          isPlayerDeadCheck()
          setPlayerDidNotEnterAnswer(true)
        } else {

          if (
            questionOneInput === "JONATHAN TAYLOR THOMAS" ||
            questionOneInput === "JONATHAN THOMAS"
          ) {
            setFour(false);
            setFive(true);
            setPlayerDidNotEnterAnswer(false);
          } else {
            dispatch(decrementPlayerHp(3));
            isPlayerDeadCheck()
            setFour(false);
            setFive(true);
            setPlayerDidNotEnterAnswer(false);
          }

        }
      };

      const [questionTwoInput, setQuestionTwoInput] = useState('')



    const renderFive = () => {

      if (
        questionOneInput === "JONATHAN TAYLOR THOMAS" ||
        questionOneInput === "JONATHAN THOMAS"
      ) {
        return (
          <Container>
            <h6>"You are correct, Comedian Slayer"</h6>
            <h6>
              "Time for question two," he smirks. "What
              was the name of my characters ficticious television show?"
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
              "WRONG!" he bellows as he spits the drill bit from his taut lips
              at an ungodly speed. It pierces your torso for 3 hit points of damage.
            </h6>
            <h6>
              Tim Allen pauses, shoots you a condecending glare, flicks a
              Phillips head screwdriver bit into the air and catches it in his
              mouth.
            </h6>
            <h6>
              "Time for question two," he says while swallowing the bit. "What
              was the name of my characters ficticious television show?"
            </h6>
            <input
              ref={(input) => input && input.focus()}
              className="submitNameInput"
              onChange={(event) =>
                setQuestionTwoInput(event.target.value.toUpperCase())
              }
              value={questionTwoInput}
            />
            <h6
              className="buttonText"
              onClick={submitTwo}
            >
              SUBMIT
            </h6>
          </Container>
        );
      }
    };

    const submitTwo = () => {
      if (!questionTwoInput || questionTwoInput === " ") {
        dispatch(decrementPlayerHp(3));
        isPlayerDeadCheck();
        setPlayerDidNotEnterAnswer(true);
      } else {
        if (questionTwoInput === "TOOL TIME") {
        setFive(false);
        setSix(true);
        setPlayerDidNotEnterAnswer(false);
        } else {
        dispatch(decrementPlayerHp(3));     
        isPlayerDeadCheck();
        setFive(false);
        setSix(true);
        setPlayerDidNotEnterAnswer(false);
        }
      }
    };


    const [questionThreeInput, setQuestionThreeInput] = useState("");

    const renderSix = () => {
      if (questionTwoInput === "TOOL TIME") {
        return (
          <Container>
            <h6>"Yes, Comedian Slayer"</h6>
            <h6>
              "Question 3," he says while fondeling his Dewalt 20-Pocket Apron Tool Belt. "Before fellating
              the drummer from the band responsible for the hit "Dr.Feelgood",
              this model / actress honed her acting chops on my show..."
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
              "WRONG!" he spits the bit out of his mouth at an unfathomable
              speed and it pierces the meat of your leg for 3 damage.
            </h6>
            <h6>
              With a taut flick of his thumb, Tim Allen arches a Flathead
              screwdriver bit into the air which lands on his tongue. He swallows.
            </h6>
            <h6>
              "Question 3," he says while fondeling his Dewalt 20-Pocket Apron
              Tool Belt.. "Before fellating the drummer from the band
              responsible for the hit "Dr.Feelgood", this model / actress honed
              her acting chops on my show..."
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
          isPlayerDeadCheck();
          setPlayerDidNotEnterAnswer(true);
        } else {
          if (
            questionThreeInput === "PAMELA ANDERSON LEE" ||
            questionThreeInput === "PAMELA ANDERSON" ||
            questionThreeInput === "PAM ANDERSON"
          ) {
            setSix(false);
            setSeven(true);
            setPlayerDidNotEnterAnswer(false);
          } else {
            dispatch(decrementPlayerHp(3));
            isPlayerDeadCheck();
            setSix(false);
            setSeven(true);
            setPlayerDidNotEnterAnswer(false);
          }
        }
      };

    const [questionFourInput, setQuestionFourInput] = useState("");
    // console.log("QUESTION 3", questionThreeInput)

    const renderSeven = () => {
      if (
        questionThreeInput === "PAMELA ANDERSON LEE" ||
        questionThreeInput === "PAMELA ANDERSON" ||
        questionThreeInput === "PAM ANDERSON"
      ) {
        return (
          <Container>
            <h6>"You are correct, Comedian Slayer"</h6>
            <h6>
              "Question 4. What was the affliction my aforementioned ficticious
              son Randy was diagnosed with in the episode 'The Longest Day'?""
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
              "NO!" He shoots the bit out of his mouth with a deep wet coughing
              sound. It sinks into your shoulder for 3 point of damage.
            </h6>
            <h6>
              He flicks a Counter Sink bit into the air and sucks it in his
              mouth.
            </h6>
            <h6>
              "Question 4. What was the affliction my aforementioned ficticious
              son Randy was diagnosed with in the episode 'The Longest Day'?""
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
        isPlayerDeadCheck();
        setPlayerDidNotEnterAnswer(true);
      } else {
        if (questionFourInput === "CANCER") {
          setSeven(false);
          setEight(true);
          setPlayerDidNotEnterAnswer(false);
        } else {
          dispatch(decrementPlayerHp(3));
          isPlayerDeadCheck();
          setSeven(false);
          setEight(true);
          setPlayerDidNotEnterAnswer(false);
        }
      }
    };

      const [questionFiveInput, setQuestionFiveInput] = useState("");

      const renderEight = () => {
        if (questionFourInput === "CANCER") {
          return (
            <Container>
              <h6>"Caner it is!"</h6>
              <h6>
                "And the final question," he says while scratching his chin. "Which season did celebrated comedian
                Jay Leno make a cameo in my serialized situational comedy?"
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
                "BZZZZT!! WRONG!" he bellows as he spits the drill bit from his
                taut lips at an ungodly speed. It pierces your chest for 3
                damage.
              </h6>
              <h6>
                He tosses a Hex bit into the air and catches it in his mouth.
              </h6>
              <h6>
                "And the final question," he says while scratching his chin. "Which season did celebrated comedian
                Jay Leno make a cameo in my serialized situational comedy?"
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
              isPlayerDeadCheck();
              setPlayerDidNotEnterAnswer(true);
            } else {
              if (questionFiveInput === "CANCER") {
                setEight(false);
                setNine(true);
                setPlayerDidNotEnterAnswer(false);
              } else {
                dispatch(decrementPlayerHp(3));
                isPlayerDeadCheck();
                setEight(false);
                setNine(true);
                setPlayerDidNotEnterAnswer(false);
              }
            }
          };

      const renderNine = () => {
        if (questionFiveInput === "SEASON FOUR" || questionFiveInput === "SEASON 4" || questionFiveInput=== "FOUR" || questionFiveInput === "4") {
          return (
            <Container>
              <h6>"Edd Hall would be proud. You are correct!"</h6>
              <h6 onClick={goToTen} className="buttonText">
                CONTINUE
              </h6>
            </Container>
          );
        } else {
          return (
           <Container>
             <h6>"WRONG! Edd Hall would not be proud.</h6>
             <h6>He spits the bit out of his mouth at an unfathomable speed. It pierces your torso for 3 hit points of damage.</h6>
             <h6 onClick={goToTen} className="buttonText">
               CONTINUE
             </h6>
           </Container>
          )
        }
      };

      const goToTen = () => {
        setNine(false);
        setTen(true)
      }

      const renderTen = () => {
        if (
          (questionOneInput === "JONATHAN TAYLOR THOMAS" ||
            questionOneInput === "JONATHAN THOMAS") &&
          questionTwoInput === "TOOL TIME" &&
          (questionThreeInput === "PAMELA ANDERSON LEE" ||
            questionThreeInput === "PAMELA ANDERSON" ||
            questionThreeInput === "PAM ANDERSON") &&
          questionFourInput === "CANCER" &&
          (questionFiveInput === "SEASON FOUR" || questionFiveInput === "SEASON 4" || questionFiveInput === "FOUR" || questionFiveInput === "4")
        ) {

          return (
            <Container>
              <h6>"You are a Tool Time fanatic!", he exclaims.</h6>
              <h6>
                "Much as I yearn to cut your throat and suck the air from your
                lungs, I can not. Your breadth of Tim Allen knowledge is far too
                vast. I loathe to say you are free pass.{" "}
              </h6>

              <h6>
                Tim Allen makes a gesture toward the sky as a Makita Belt Sander
                materializes in his hand. "Ta ta," he exclaims as he pulls the
                trigger on the sander and evaporates into thin air.
              </h6>
              <h6
                onClick={() => skipBattle()}
                className="buttonText"
              >
                CONTINUE
              </h6>
            </Container>
          );
        } else {
          return (
            <Container>
              <h6>
                "I need not mention your obvious intellectual inadequacies. Your
                Tim Allen Knowledge is pitiful, woefully indept and deeply
                embarassing. And for that, you will die."{" "}
              </h6>
              <h6>
                Tim Allen makes a gesture toward the sky as a Belt Sander
                materializes in his hand. "Aeuuugh," he exclaims in his
                inexplicable Home Improvement noise as he pulls the trigger on
                the sander and attacks.
              </h6>
              <h6
                onClick={() => beginBattle()}
                className="buttonText"
              >
                CONTINUE
              </h6>
            </Container>
          );
        }
      }

    const skipBattle = () => {
      chapterTwo && dispatch(toggleChapterThree(true));
      chapterTwo && dispatch(toggleChapterTwo(false));
      setTen(false);
    };


  const beginBattle = () => {
    dispatch(setEnemyHp(timAllen.hitPoints));
    setBattleTim(true);
    setTen(false)
    dispatch(toggleEnemyDisplay(true));
    dispatch(toggleBattleDisplay(true))

  }



  // console.log("1", questionOneInput);
  // console.log("2", questionTwoInput);
  // console.log("3",questionThreeInput);
  // console.log("4",questionFourInput);
  // console.log("5",questionFiveInput);


  return (
    <Container className="chapterTwoWrapper">
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
      {isRunVisible && renderRun()}
      {playerDidNotEnterAnswer && <h1>THIS IS AN UNACCEPTABLE ANSWER!</h1>}
      {battleTim && <Battle enemy={timAllen} />}
    </Container>
  );
}

export default ChapterTwo







