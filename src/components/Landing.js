import React, { useState } from "react";
import carrotTop from "../media/carrot-top.png";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

const Landing = () => {
  const [startGame, setStartGame] = useState(false);

  const pressStartGame = () => {
    setStartGame(true);
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
