import React, { useState } from "react";
import {
  emoPhilips,
  paulyShore,
  judyTenuda,
  andrewDiceClay,
  samKinison,
  victoriaJackson,
  rodneyDangerfield,
  yakovSmirnoff,
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

const ChapterThirteen = () => {
  const [one, setOne] = useState(true);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  const [four, setFour] = useState(false);
  const [four, setFour] = useState(false);
  const [four, setFour] = useState(false);
  const [battleGallagher, setBattleGallagher] = useState(false);

  const dispatch = useDispatch();

  const armor = useSelector((state) => state.armor);
  const name = useSelector((state) => state.name);

  const renderOne = () => {
    return (
      <div>
        <h1>Chapter Nine</h1>
        <h6>Thy Crusher of Worlds and Obliterator of All Innocence</h6>
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
          You move forward into a collasal archway revealing an endless lake of
          blood as far as the eye can see. Nothing will surprise you with what lies
          inside this repugnant tower's walls.
        </h6>
        <h6>
          A small skiff with a cloaked figure is seen paddling your way using languid strokes of a long pole. The figure docks and slowly removes his hood. "I am here to help you, " say a voice radiating with genuine kindness.
        </h6>

        <h6>
          "This new world is no world at all,"  says George Carlin. You instinctively reach for your weapon, yet there is an aura around this man that leads you to believe this is no trickery. "And this new world must come to end. I can help you. You have but two more obstacles to before freeing humanity of this vile scourge."
        </h6>

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
          You begin to inch forward when the statue of Uncle Sam exclaims, "Vhat
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

  const renderFour = () => {
    return (
      <Container>
        <h6>
          You begin to inch around the edges of the room when the statue of
          Uncle Sam exclaims, "Vhat a country!"
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
    setBattleGallagher(true);
    setFour(false);
    setThree(false);
    dispatch(setEnemyHp(yakovSmirnoff.hitPoints));
    dispatch(toggleEnemyDisplay(true));
    dispatch(toggleBattleDisplay(true));
  };

  return (
    <div>
      {one && renderOne()}
      {two && renderTwo()}
      {three && renderThree()}
      {four && renderFour()}
      {battleGallagher && <Battle enemy={yakovSmirnoff} />}
    </div>
  );
};

export default ChapterThirteen;
