import { DEAD } from "../constants/Story";
import React, { useState } from "react";
import { Redirect, Link, useHistory } from "react-router-dom";
import Game from "./Game";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stats from "./Stats";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleChapterOne,
} from "../actions";

const Victory = (props, { isRunVisible }) => {

  const dispatch = useDispatch();

  const [victoryMessage, setVictoryMessage] = useState(true);
  const [pushedContinue, setPushedContinue] = useState(false);
  const [lootOptionsVisible, setLootOptionsVisible] = useState(false);
  const [lootResultYes, setLootResultYes] = useState(false);
  const [lootResultNo, setLootResultNo] = useState(false);

  // Prop passed via Redirect Component on BattleNewApproach
  let setCreateCharacterVisible = props.location.setCreateCharacterVisible;

  const renderVictoryMessage = () => {
    return (
      <Container className="victoryWrapper">
        <h6 className="deadText">
          With one last crushing blow, Emo Philips lets out an ungodly howl and
          begins to convulse. His marionette-like frame swivels in your
          direction. "You will never topple The Illuminati of Laughter," he
          squeaks with a mild smirk on his blood-soaked face. He shoots you one
          final wild-eyed stare and crumples to the ground. You are...
        </h6>
        <h1 className="areDeadText">VICTORIOUS</h1>
        <h1
          className="buttonText"
          onClick={() => {
            setVictoryMessage(false);
            setLootOptionsVisible(true);
          }}
        >
          Continue
        </h1>
      </Container>
    );
  };

  const renderLootOptions = () => {
    return (
      <Container className="victoryWrapper">
        <h6 className="lootTextSubheader">
          You stand triumphantly over this fallen Lilth Menace and pick up the
          severed human hand which he threw at your feet. All that make you
          human yearns to resist feasting on this wretched thing for sustanance,
          yet your stomach says otherwise...
        </h6>
        <h6 className="lootText">Do you eat the severed human hand?</h6>
        <Row>
          <Col>
            <h1
              className="buttonText"
              onClick={() => {
                setLootResultYes(true);
                setLootOptionsVisible(false);
              }}
            >
              Yes
            </h1>
          </Col>
          <Col>
            <h1
              className="buttonText"
              onClick={() => {
                setLootResultNo(true);
                setLootOptionsVisible(false);
              }}
            >
              No
            </h1>
          </Col>
        </Row>
      </Container>
    );
  };

  const renderLootResultYes = () => {
    if (lootResultYes)
      return (
        <Container className="victoryWrapper">
          <h6>
            You close your eyes and dig your teeth into the meat and tendon
            which cling to the hand. The taste of garlic, chives and sumptious
            flesh fill your mouth. You feel no regret. You receive 7 hit points.
          </h6>

          <Link
            activeClassName="buttonText"
            onClick={() => {
              goBackToGame();
              // setLootResultYes(false);
              // setLootResultNo(false);
            }}
            style={{ textDecoration: "none", color: "white" }}
            to="/ChapterTwo"
          >
            Continue
          </Link>
        </Container>
      );
  };

  // const history = useHistory();

  const goBackToGame = () => {
    alert("fart")
    dispatch(toggleChapterOne(false));
    // setCreateCharacterVisible(false);
    // setLootResultYes(false);
    // setLootResultNo(false);
  };

  const renderLootResultNo = () => {
    if (lootResultNo) {
      return (
        <Container className="victoryWrapper">
          <h6>
            You are filled with disgust at the thought of entertaining eating a
            human hand. This hand, after all, likely belonged to some poor
            broken soul fallen victim to these vile comedic overlords. You
            gingerly place some debris over the appendage and clench your fist.
          </h6>
          <Link
            className="linkButton"
            onClick={() => {
              goBackToGame();
            }}
            style={{ textDecoration: "none", color: "white" }}
            to="/ChapterTwo"
          >
            Continue
          </Link>
        </Container>
      );
    }
  };

  return (
    <React.Fragment>
      {victoryMessage && renderVictoryMessage()}
      {lootResultYes && renderLootResultYes()}
      {lootResultNo && renderLootResultNo()}
      {lootOptionsVisible && renderLootOptions()}
    </React.Fragment>
  );
};

export default Victory;
