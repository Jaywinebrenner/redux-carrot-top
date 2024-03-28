import React, { useState } from "react";
import { emoPhilips, paulyShore } from "../constants/Monsters";
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

const ChapterThree = () => {
  const [one, setOne] = useState(true);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false)
  const [four, setFour] = useState(false);
  const [battlePauly, setBattlePauly] = useState(false)

  const [isAreaOneDisplayed, setIsAreaOneDisplayed] = useState(false);
  const [isAreaOneThreeDisplayed, setIsAreaOneThreeDisplayed] = useState(false);
  const [isAreaOneFourDisplayed, setIsAreaOneFourDisplayed] = useState(false);
  const [isAreaOneFiveDisplayed, setIsAreaOneFiveDisplayed] = useState(false);
  const [isAreaOneSixDisplayed, setIsAreaOneSixDisplayed] = useState(false);

  const dispatch = useDispatch();

  const armor = useSelector((state) => state.armor);
  const [battleEmo, setBattleEmo] = useState(false);

  const renderOne = () => {
    return (
      <div>
        <h1>Chapter Three</h1>
        <h6>Thy Demon in Await with Tress</h6>
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
        <h6>{AREATHREE.one}</h6>

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

    const renderThree = () => {
      return (
        <Container>
          <h6>{AREATHREE.two}</h6>
          <h6>{AREATHREE.three}</h6>
          <h1
            className="buttonText"
            onClick={() => {
              setThree(false);
              setFour(true);
            }}
          >
            CONTINUE
          </h1>
        </Container>
      );
    };

  const renderFour = () => {
    return (
      <Container>
        <h6>
          "Hey Buuuuuuuudy," drawls Pauly Shore as he unsheaths a stiletto knife from the front pocket of his multi-colored drug rug poncho.
        </h6>
        <h6 >"The Weeeeasel is here to carve you into bite sized bits. I'm gonna suck the marrow from your bones and pop the eyes right out of your skull, buuuuuuuudy!" Pauly Shore shakes his curly tresses and lunges at you...</h6>
        <h1 className="buttonText" onClick={beginBattle}>
          CONTINUE
        </h1>
      </Container>
    );
  }


const beginBattle = () => {
      setBattlePauly(true)
      setFour(false)
      dispatch(setEnemyHp(paulyShore.hitPoints));
      dispatch(toggleEnemyDisplay(true));
      dispatch(toggleBattleDisplay(true));
}

  return (
    <div>
      {one && renderOne()}
      {two && renderTwo()}
      {three && renderThree()}
      {four && renderFour()}
      {battlePauly && <Battle enemy={paulyShore} />}
    </div>
  );
};

export default ChapterThree;
