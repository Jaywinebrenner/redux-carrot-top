import React, { useState } from "react";
import { emoPhilips, paulyShore, judyTenuda } from "../constants/Monsters";
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

const ChapterFive = () => {
  const [one, setOne] = useState(true);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  const [battleJudy, setBattleJudy] = useState(false);

  const dispatch = useDispatch();

  const armor = useSelector((state) => state.armor);
  const name = useSelector((state) => state.name);

  const renderOne = () => {
    return (
      <div>
        <h1>Chapter Five</h1>
        <h6>Thy Coven Bathed in Unholy Sound</h6>
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
          your way through a long windowless hallway as the sounds of what
          appear to be an accordian competently played gets louder and louder.
          As you approach an archway which leads to an open room shrouded in
          madness, the sound abruptly stops. An upright sarcophagus stands
          perfectly in the room's center with bones strewn about it's base. The
          sudden void of the accordian's syllabic tones leaves you uneasy. You get
          the feeling you are being watched.
        </h6>
        <Row>
          <Col>
            <h5 onClick={encounterJudyOne}>Investigate the sarcophagus</h5>
          </Col>
          <Col>
            <h5 onClick={encounterJudyTwo}>
              Stealthily sneak past the sarcophagus and attempt enter a
              staircase at the rooms end
            </h5>
          </Col>
          <Col>
            <h5 onClick={() => alert("RUN")}>Run</h5>
          </Col>
        </Row>
      </Container>
    );
  };

  const encounterJudyOne = () => {
    setTwo(false);
    setThree(true);
  }
  const encounterJudyTwo = () => {
    setTwo(false);
    setThree(true);
  };

  const renderThree = () => {
    return (
      <Container>
        <h6>
          As you make your way towards the sarcophagus, an ear piercing shreik
          knifes your ears and an ominious blast bellows from an accordian.
          "Welllllllll," mocks a voice in the unmistakable affectation of famed
          80s character comedian Judy Tenuta. "If it isn't {name}, the Comedian
          Slayer! Welcome to the inner sanctum of the Illuminati of Laughter,
          where you will die horribly soundtracked by my proficient accordian
          melodies!'
        </h6>
        <h6>
          Judy Tenuta blasts out of the sarcophagus, sending the pile of bones
          into a flurry and hovers in the air. She omits a hysterical cackle and
          attacks!
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
          As you quietly make your way around the edges of the room- an ear
          piercing shreik knifes your ears and an ominious blast bellows from an
          accordian. "Welllllllll," mocks a voice in the unmistakable
          affectation of famed 80s character comedian Judy Tenuta. "If it isn't{" "}
          {name}, the Comedian Slayer! Welcome to the inner sanctum of the
          Illuminati of Laughter, where you will die horribly soundtracked by my
          proficient accordian melodies!'
          <h6>
            Judy Tenuta blasts out of the sarcophagus, sending the pile of bones
            into a flurry and hovers in the air. She omits a hysterical cackle
            and attacks!
          </h6>
        </h6>
        <div onClick={beginBattle}>
          <h6 className="buttonText">CONTINUE</h6>
        </div>
      </Container>
    );
  };


  const beginBattle = () => {
    setBattleJudy(true)
    setFour(false);
    setThree(false);
    dispatch(setEnemyHp(judyTenuda.hitPoints));
    dispatch(toggleEnemyDisplay(true));
    dispatch(toggleBattleDisplay(true));
  };

  return (
    <div>
      {one && renderOne()}
      {two && renderTwo()}
      {three && renderThree()}
      {four && renderFour()}
      {battleJudy && <Battle enemy={judyTenuda} />}
    </div>
  );
};

export default ChapterFive;
