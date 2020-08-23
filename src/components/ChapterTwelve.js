import React, { useState } from "react";
import {
  yakovSmirnoff,
} from "../constants/Monsters";
import { useSelector, useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Battle from "./Battle";
import {
  toggleEnemyDisplay,
  toggleBattleDisplay,
  setEnemyHp,
} from "../actions";
import { Redirect } from "react-router-dom";

const ChapterTwelve = () => {
  const [one, setOne] = useState(true);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  const [battleYakov, setBattleYakov] = useState(false);

  const dispatch = useDispatch();

  const armor = useSelector((state) => state.armor);
  const name = useSelector((state) => state.name);

  const renderOne = () => {
    return (
      <div>
        <h1>Chapter Eight</h1>
        <h6>Thy of Obsequious Capitalist Sycophancy</h6>
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
          The door opens to reveal an escalator bathed in reds and whites and
          blues climbing skyward. You trepidatiously step on the escalator
          experiencing a brief moment of relief that you need not climb more
          stairs. The moment passes quickly albeit. As you ascend, a demonically
          cheerful slavic voice reverberates ahead.
        </h6>

        <h6>
          You reach the landing above, the chatter stops and it opens to a room
          completely populated with a nightmarish patriotic display of flags,
          bald eagles, guns and disposable American trinkets. There is a statue
          of Uncle Sam at the room's center.
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
            <h5 onClick={() => setIsRunVisible(true)}>Run</h5>
          </Col>
        </Row>
      </Container>
    );
  };

    const [isRunVisible, setIsRunVisible] = useState(false);

    const renderRun = () => {
      return (
        <Redirect
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
          You begin to inch forward when the statue of Uncle Sam exclaims, "Vhat
          a country!"
        </h6>
        <h6>Yakov Smirnoff tears off the mask and exclaims "If Comedy Slayer enter Yakov domain to kill Yakov. Yakov kill Comedy Slayer!"
        </h6>

        <h6>He whips out a bayonette and charges.</h6>

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
          You begin to inch around the edges of the room when the statue of Uncle Sam exclaims, "Vhat
          a country!"
        </h6>
        <h6>
          Yakov Smirnoff tears off the mask and exclaims "If Comedy Slayer enter
          Yakov domain to kill Yakov. Yakov kill Comedy Slayer!"
        </h6>

        <h6>He whips out a bayonette and charges.</h6>
        <div onClick={beginBattle}>
          <h6 className="buttonText">CONTINUE</h6>
        </div>
      </Container>
    );
  };

  const beginBattle = () => {
    setBattleYakov(true);
    setFour(false);
    setThree(false);
    dispatch(setEnemyHp(yakovSmirnoff.hitPoints));
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
      {battleYakov && <Battle enemy={yakovSmirnoff} />}
    </div>
  );
};

export default ChapterTwelve;
