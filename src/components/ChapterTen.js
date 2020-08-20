import React, { useState } from "react";
import {
  emoPhilips,
  paulyShore,
  judyTenuda,
  andrewDiceClay,
  samKinison,
  victoriaJackson,
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
import Game from "./Game";

const ChapterTen = () => {
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
        <h1>Chapter Eight</h1>
        <h6>Thy of Rest in Diaboical Idolatry</h6>
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
          The door opens with to reveal an escaltor painted in pastels and
          littered with bibles. You trepedatiously step on the
          escaltor experiencing a brief moment of relief that you need not climb
          more stairs. The moment passes quickly albeit. As you ascend, a high
          pitched squawking can be heard reverberating from the room above. It
          sounds human and resembles a nasally affectiation once known as
          "ditsy" in the old world.
        </h6>

        <h6>
          You reach the landing above and it is filled with mannequins in various
          vaudevillian dance poses.
        </h6>

        <Row>
          <Col>
            <h5 onClick={encounterAndrewOne}>Investigate the room</h5>
          </Col>
          <Col>
            <h5 onClick={encounterAndrewTwo}>
              Stealthily sneak past through the mannequins and attempt enter a door at
              the rooms end
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
          You begin to inch forward when the squeaking voice proclaims, "Hit it!"
        </h6>
        <h6>
          Victoria Jackson, posing as a mannequin, animates and flips four times in the air, makes a gesture towards the ground as a tophat rapidly levitates on her head. A brassy vaudevillian song begins blasting at a deafening volume and she begins to dance. 
          "Hey there, mister Comedian Slayer Man," she sings while chorus-lineing her way towards you. "I am going to kill you if I can, but I know that you will die slowly and I will eat your brains hungrily!"
        </h6>

        <h6>She stops in a jazz hands pose and says, "the power of Christ compells you to DIE!!!". She attacks.</h6>

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
          You begin to inch around the edges of the room when the squeaking voice proclaims, "Hit
          it!"
        </h6>
        <h6>
          Victoria Jackson, posing as a mannequin, animates and flips four times
          in the air, makes a gesture towards the ground as a tophat rapidly
          levitates on her head. A brassy vaudevillian song begins blasting at a
          deafening volume and she begins to dance. "Hey there, mister Comedian
          Slayer Man," she sings while chorus-lineing her way towards you. "I am
          going to kill you if I can, but I know that you will die slowly and I
          will eat your brains hungrily!"
        </h6>
        <h6>
          She stops in a jazz hands pose and says, "the power of Christ compells
          you to DIE!!!". She attacks.
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
    dispatch(setEnemyHp(victoriaJackson.hitPoints));
    dispatch(toggleEnemyDisplay(true));
    dispatch(toggleBattleDisplay(true));
  };

  return (
    <div>
      {one && renderOne()}
      {two && renderTwo()}
      {three && renderThree()}
      {four && renderFour()}
      {battleSam && <Battle enemy={victoriaJackson} />}
    </div>
  );
};

export default ChapterTen;
