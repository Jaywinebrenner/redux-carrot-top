import React, { useState } from "react";
import carrotTop from "../media/carrot-top.png";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import {
  toggleEnemyDisplay,
  toggleBattleDisplay,
  toggleCreateCharacter,
} from "../actions";
import { useSelector, useDispatch } from "react-redux";

const Landing = () => {

   const dispatch = useDispatch();
  const [startGame, setStartGame] = useState(false);

  const pressStartGame = () => {
    // dispatch(toggleEnemyDisplay(false));
    // dispatch(toggleBattleDisplay(false));
    // dispatch(toggleCreateCharacter(true));
    // setStartGame(true);
  };

  return (
    <Container className="landingWrapper">
      <h1 className="landingHeader">KILLING CARROT TOP</h1>
      <Link
        className="linkText"
        style={{
          textDecoration: "none",
        }}
        to="/Intro"
      >
        <h1 onClick={pressStartGame} className="startGameText">
          START GAME
        </h1>
      </Link>
    </Container>
  );
};

export default Landing;
