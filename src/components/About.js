import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import {
  toggleEnemyDisplay,
  toggleBattleDisplay,
  toggleCreateCharacter,
} from "../actions";
import { useDispatch } from "react-redux";
import ReactHowler from "react-howler";
import aboutMusic from "../media/victory.mp3";

const About = () => {
  const dispatch = useDispatch();
  const [startGame, setStartGame] = useState(false);

  const pressStartGame = () => {
    dispatch(toggleEnemyDisplay(false));
    dispatch(toggleBattleDisplay(false));
    dispatch(toggleCreateCharacter(true));
    setStartGame(true);
  };

  return (
    <div className="landingWrapper">
      <h1 className="aboutHeader">KILLING CARROT TOP</h1>
      <h6>
        Killing Carrot Top is an old school RPG-inspired game set in a collapsed
        dystopian world ruled by 80s Character Comedians hellbent on
        exterminating what little remains of the human race. You are the
        Comedian Slayer, the world's last bastion of hope of stopping this vile
        scourge. It is your singular journey to traverse the nightmarish
        post-apocalyptic landscape and confront the Lord of Laughter himself,
        Carrot Top.
      </h6>
      <h6>
        Hi, my name is Jay and I wrote and coded Killing Carrot Top using
        React.js. Ultimately I want to expand the concept with a fully realized
        RPG world with map, loot and XP systems along with custom art work. I'll
        get there one of these days.
      </h6>
      <h6>
        Also, I'm currently looking for work. Here's all the relevelant links.
        Get in touch!
      </h6>
      <h5>jaywinebrenner@gmail.com</h5>
      <p>
        <a
          target="_blank" style={{ textDecoration: "none", fontFamily: "Red Rose" }}
          href="https://www.linkedin.com/in/jaywinebrenner/"
        >
          LinkedIn
        </a>
      </p>
      <p>
        <a
          target="_blank"
          style={{ textDecoration: "none", fontFamily: "Red Rose" }}
          href="https://github.com/Jaywinebrenner"
        >
          Github
        </a>
      </p>
      <p>
        <a
          target="_blank"
          style={{ textDecoration: "none", fontFamily: "Red Rose" }}
          href="https://jaywinebrenner.github.io/resume2020/"
        >
          Development Website
        </a>
      </p>
      <p>
        <a
          target="_blank"
          style={{ textDecoration: "none", fontFamily: "Red Rose" }}
          href="https://jaywinebrenner.github.io/director-reel/#/"
        >
          Filmmaking Website
        </a>
      </p>

      <h6>And wildly enough, the game has gotten some press.</h6>
      <p>
        <a
          target="_blank"
          style={{ textDecoration: "none", fontFamily: "Red Rose" }}
          href="https://news.avclub.com/new-rpg-tasks-players-with-defeating-carrot-top-and-th-1844853866"
        >
          AV Club
        </a>
      </p>

      <p>
        <a
          target="_blank"
          style={{ textDecoration: "none", fontFamily: "Red Rose" }}
          href="https://vitalvegas.com/carrot-top-featured-in-unfortunately-named-videogame-killing-carrot-top/"
        >
          Vital Vegas
        </a>
      </p>
      <Link
        className="linkText"
        style={{
          textDecoration: "none",
        }}
        to="/"
      >
        <h1 onClick={pressStartGame} className="startGameText">
          BACK TO GAME
        </h1>
      </Link>

      <ReactHowler src={aboutMusic} volume={0.4} loop={true} />
    </div>
  );
};

export default About;
