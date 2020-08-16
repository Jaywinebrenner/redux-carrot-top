
import Container from "react-bootstrap/Container";
import React, { useState } from "react";
import { emoPhilips } from "../constants/Monsters";
import { AREAONE } from "../constants/Story";
import { useSelector, useDispatch } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Battle from "./Battle";
import {
incrementPlayerHp, decrementPlayerHp
} from "../actions";
import Game from "./Game";

const ChapterTwo = () => {

  const dispatch = useDispatch();
  

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
          coutryard. 'Welcome Comedian Slayer. To gain access to Ha Ha Tower,
          you must answer 5 questions about my celebrated situational comedy
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
            <h6>Tim Allen bursts from a pile of rebar and human remains. "You have little choice, Comedian Slayer," he smirks as he licks a handful of drill bits. "Either answer my
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
            "What
            was the name of the revered child actor who portrayed my son Randy?
          </h6>
          <input
            ref={(input) => input && input.focus()}
            className="submitNameInput"
            onChange={(event) => setQuestionOneInput(event.target.value.toUpperCase())}
            value={questionOneInput}
          />
          <h6 className="buttonText" onClick={() => {
            setFour(false);
            setFive(true)}}>
            SUBMIT
          </h6>
        </Container>
      );
    };

      const [questionTwoInput, setQuestionTwoInput] = useState('')



    const renderFive = () => {

      if (
        questionOneInput === "JONATHAN TAYLOR THOMAS" ||
        questionOneInput === "JONATHAN THOMAS"
      ) {
        return (
          <Container>
            <h4>"You are correct, Comedian Slayer"</h4>
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
              onClick={() => {
                setFive(false);
                setSix(true);
              }}
            >
              SUBMIT
            </h6>
          </Container>
        );
      } else {
       dispatch(decrementPlayerHp(.5))
        return (
          <Container>
            <h4>
              "WRONG!" he bellows as he spits the drill bit from his taut lips
              at an ungodly speed. It pierces your torso for 1 damage.
            </h4>
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
              onClick={() => {
                setFive(false);
                setSix(true);
              }}
            >
              SUBMIT
            </h6>
          </Container>
        );
      }
    };

     const [questionThreeInput, setQuestionThreeInput] = useState("");

    const renderSix = () => {
      if (questionTwoInput === "TOOL TIME") {
        return (
          <Container>
            <h4>"Yes, Comedian Slayer"</h4>
            <h6>
              With a taut flick of his thumb, Tim Allen arches a
              Flathead screwdriver bit into the air which lands on his tongue.
            </h6>
            <h6>
              "Question 3," he says while swallowing the bit. "Before fellating the drummer from the band responsible for the hit "Dr.Feelgood", this model / actress honed her acting chops on my show by wearing scantily clad clothing and giggling..."
            </h6>
            <input
              ref={(input) => input && input.focus()}
              className="submitNameInput"
              onChange={(event) => setQuestionThreeInput(event.target.value.toUpperCase())}
              value={questionThreeInput}
            />
            <h6
              className="buttonText"
              onClick={() => {
                setSix(false);
                setSeven(true);
              }}
            >
              SUBMIT
            </h6>
          </Container>
        );
      } else {
        dispatch(decrementPlayerHp(0.5));
        return (
          <Container>
            <h4>
              "WRONG!" he spits the bit out of his mouth at an unfathomable speed and it pierces the meat of your leg for 1 damage.
            </h4>
            <h6>
              With a taut flick of his thumb, Tim Allen arches a Flathead
              screwdriver bit into the air which lands on his tongue.
            </h6>
            <h6>
              "Question 3," he says while swallowing the bit. "Before fellating the
              drummer from the band responsible for the hit "Dr.Feelgood", this
              model / actress honed her acting chops on my show by wearing
              scantily clad clothing and giggling..."
            </h6>
            <input
              ref={(input) => input && input.focus()}
              className="submitNameInput"
              onChange={(event) =>
                setQuestionThreeInput(event.target.value.toUpperCase())
              }
              value={questionThreeInput}
            />
            <h6
              className="buttonText"
              onClick={() => {
                setSix(false);
                setSeven(true);
              }}
            >
              SUBMIT
            </h6>
          </Container>
        );
}
    };

    const [questionFourInput, setQuestionFourInput] = useState("");

    const renderSeven = () => {
      if (questionThreeInput === "PAMELA ANDERSON LEE" || "PAMELA ANDERSON" || "PAM ANDERSON") {
        return (
          <Container>
            <h4>"You are correct, Comedian Slayer"</h4>
            <h6>
              He flicks a Counter Sink bit into the air and sucks it in his
              mouth.
            </h6>
            <h6>
              "Question 4. What was the affliction my aforementioned ficticious son Randy was
              diagnosed with in the episode 'The Longest Day'?""
            </h6>
            <input
              ref={(input) => input && input.focus()}
              className="submitNameInput"
              onChange={(event) => setQuestionFourInput(event.target.value.toUpperCase())}
              value={questionFourInput}
            />
            <h6
              className="buttonText"
              onClick={() => {
                setSeven(false);
                setEight(true);
              }}
            >
              SUBMIT
            </h6>
          </Container>
        );
      } else {
        dispatch(decrementPlayerHp(0.5));
        return (
          <Container>
            <h4>
              He shoots the bit out of his mouth with a deep wet coughing sound. It sinks into your shoulder for 1 point of damage.
            </h4>
            <h6>
              He flicks a Counter Sink bit into the air and sucks it in his
              mouth.
            </h6>
            <h6>
              "Question 4. What was the affliction my aforementioned ficticious son Randy
              was diagnosed with in the episode 'The Longest Day'?""
            </h6>
            <input
              ref={(input) => input && input.focus()}
              className="submitNameInput"
              onChange={(event) =>
                setQuestionFourInput(event.target.value.toUpperCase())
              }
              value={questionFourInput}
            />
            <h6
              className="buttonText"
              onClick={() => {
                setSeven(false);
                setEight(true);
              }}
            >
              SUBMIT
            </h6>
          </Container>
        );
      }
    };

      const [questionFiveInput, setQuestionFiveInput] = useState("");

      const renderEight = () => {
        if (questionFourInput === "CANCER") {
          return (
            <Container>
              <h4>"Caner it is!"</h4>
              <h6>
                He tosses a Hex bit into the air and catches it in
                his mouth.
              </h6>
              <h6>
                "And the final question. Which season did celebrated comedian Jay Leno make a cameo in my
                serialized situational comedy?"
              </h6>
              <input
                ref={(input) => input && input.focus()}
                className="submitNameInput"
                onChange={(event) => setQuestionFiveInput(event.target.value.toUpperCase())}
                value={questionFiveInput}
              />
              <h6
                className="buttonText"
                onClick={() => {
                  setEight(false);
                  setNine(true);
                }}
              >
                SUBMIT
              </h6>
            </Container>
          );
        } else {
          dispatch(decrementPlayerHp(0.5));
          return (
            <Container>
              <h4>
                "BZZZZT!! WRONG!" he bellows as he spits the drill bit from his
                taut lips at an ungodly speed. It pierces your chest for 1
                damage.
              </h4>
              <h6>
                He tosses a Hex bit into the air and catches it in his mouth.
              </h6>
              <h6>
                "And the final question. Which season did celebrated comedian Jay Leno make a cameo in
                my serialized situational comedy?"
              </h6>
              <input
                ref={(input) => input && input.focus()}
                className="submitNameInput"
                onChange={(event) =>
                  setQuestionFiveInput(event.target.value.toUpperCase())
                }
                value={questionFiveInput}
              />
              <h6
                className="buttonText"
                onClick={() => {
                  setEight(false);
                  setNine(true);
                }}
              >
                SUBMIT
              </h6>
            </Container>
          );
        }
      };

      const renderNine = () => {
        if (questionFiveInput.toUpperCase() === "SEASON FOUR" || "SEASON 4" || "FOUR" || "4") {
          return (
            <Container>
              <h4>"Edd Hall would be proud. You are correct!"</h4>
              <h6 onClick={goToTen} className="buttonText">
                CONTINUE
              </h6>
            </Container>
          );
        } else {
          dispatch(decrementPlayerHp(0.5));
          return (
           <Container>
             <h4>"WRONG! Edd Hall would not be proud.</h4>
             <h4>He spits the bit out of his mouth at an unfathomable speed. It pierces your torgo for 1 hit point of damage.</h4>
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
        if ((questionOneInput === "JONATHAN TAYLOR THOMAS" || "JONATHAN THOMAS") && (questionTwoInput ===  "TOOL TIME") && (questionThreeInput === "PAMELA ANDERSON LEE" || "PAMELA ANDERSON" || "PAM ANDERSON") && (questionFourInput === "CANCER") && (questionFiveInput === "SEASON FOUR" || "SEASON 4" || "FOUR" || "4")) {
          alert("correct!")
          return (
            <Container>
              <h4>
                "You are a Tool Time fanatic!", he exclaims.</h4>
                <h4>
                "Much as I yearn to
                cut your throat and suck the air from your lungs, I can not. Your breadth of Tim Allen knowledge is far too vast. I loathe to say you are free pass.{" "}
              </h4>

              <h6>
                Tim Allen makes a gesture toward the sky as a Belt Sander
                materializes in his hand. "Ta ta," he exclaims as he pulls the trigger on the sander and evaporates
                into thin air.
              </h6>
              <h6 onClick={() => alert("go to Chapter 4")} className="buttonText">
                CONTINUE
              </h6>
            </Container>
          );
        } else {
          return (
            <Container>
              <h4>
                "I need not mention your obvious intellectual inadequacies. Your
                Tim Allen Knowledge is pitiful, woefully indept and deeply embarassing. And for that, you will die."{" "}
              </h4>
              <h4>
                Tim Allen makes a gesture toward the sky as a Belt Sander
                materializes in his hand. "Aeuuugh," he exclaims in his inexplicable Home Improvement noise as he pulls the
                trigger on the sander and attacks.
              </h4>
            </Container>
          );
        }


      }


  // console.log("1", questionOneInput);
  // console.log("2", questionTwoInput);
  // console.log("3",questionThreeInput);
  // console.log("4",questionFourInput);
  // console.log("5",questionFiveInput);


  return (
    <Container className="chapterTwoWrapper">
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

    </Container>
  );
}

export default ChapterTwo







