import React, { useState } from "react";
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
    dispatch(toggleEnemyDisplay(false));
    dispatch(toggleBattleDisplay(false));
    dispatch(toggleCreateCharacter(true));
    setStartGame(true);
  }; 

  const pressAbout = () => {

  }

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
      <Link
        style={{
          textDecoration: "none",
        }}
        to="/About"
      >
        <h6 onClick={pressStartGame} className="aboutTextOnLanding">
          ABOUT
        </h6>
      </Link>
    </Container>
  );
};

export default Landing;
