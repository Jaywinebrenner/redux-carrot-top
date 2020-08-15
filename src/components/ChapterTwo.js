
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

  const [one, setOne] = useState(true);
  const [two, setTwo] = useState(false);
  const [isAreaOneDisplayed, setIsAreaOneDisplayed] = useState(false);
  const [isAreaOneThreeDisplayed, setIsAreaOneThreeDisplayed] = useState(false);
  const [isAreaOneFourDisplayed, setIsAreaOneFourDisplayed] = useState(false);
  const [isAreaOneFiveDisplayed, setIsAreaOneFiveDisplayed] = useState(false);
  const [isAreaOneSixDisplayed, setIsAreaOneSixDisplayed] = useState(false);

  const armor = useSelector((state) => state.armor);
  const [battleEmo, setBattleEmo] = useState(false);

  return (
    <Container>
      <h1>Chapter Two</h1>
      <h3> Of Tools &/ Treachery</h3>
      <div
        onClick={() => {
          setOne(false);
          setTwo(true);
        }}
      >
        <h6 className="buttonText">CONTINUE</h6>
      </div>
    </Container>
  );
}

export default ChapterTwo