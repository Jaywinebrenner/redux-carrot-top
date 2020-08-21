import React, { useState } from "react";
import carrotTop from "../media/carrot-top.png";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Typewriter from "typewriter-effect";
import ReactHowler from "react-howler";

const Won = () => {
  const [startGame, setStartGame] = useState(false);

  const [isStartButtonVisible, setIsStartButtonVisible] = useState(false);

  setTimeout(function () {
    setIsStartButtonVisible(true);
  }, 36000);


  const renderStartAgainButton = () => {
    return (
      <React.Fragment>
        <h1 className="wonHeader">KILLED CARROT TOP</h1>
        <Link
          className="linkText"
          style={{
            textDecoration: "none",
          }}
          to="/Intro"
        >
          <h1 onClick={pressStartGame} className="startGameText">
            PLAY AGAIN
          </h1>
        </Link>
      </React.Fragment>
    );
  }

  const pressStartGame = () => {
    setStartGame(true);
  };

  return (
    <Container className="wonWrapper">
      <h3>
        {" "}
        <Typewriter
          wrappe
          onInit={(typewriter) => {
            typewriter
              .changeDelay(80)
              .typeString(
                'One last blow across Carrot Tops Skull fractures reality into one million prismatic pieces. "What is this?" you think to yourself as this vile muscular Destroyer of Worlds sprials into unknowable colors from beyond comprehensible places.',
              )
              .callFunction(() => {
                console.log("String typed out!");
              })
              .start();
          }}
        />
      </h3>

      <h3>
        {" "}
        <Typewriter
          options={{
            strings: ["Hello", "World"],
            autoStart: false,
          }}
          wrappe
          onInit={(typewriter) => {
            typewriter
              .pauseFor(20000)
              .changeDelay(80)
              .typeString(
                "Your molecules separate and reunite once again. Time is extinguished and starts once again.",
              )
              .callFunction(() => {
                console.log("String typed out!");
              })
              .callFunction(() => {
                console.log("All strings were deleted");
              })
              .start();
          }}
        />
      </h3>

      <h3>
        {" "}
        <Typewriter
          options={{
            strings: ["Hello", "World"],
            autoStart: false,
          }}
          wrappe
          onInit={(typewriter) => {
            typewriter
              .pauseFor(28000)
              .changeDelay(80)
              .typeString(
                "Humanity has been saved. You have completed your mission. You have...",
              )
              .callFunction(() => {
                console.log("String typed out!");
              })
              .callFunction(() => {
                console.log("All strings were deleted");
              })
              .start();
          }}
        />
      </h3>

      {/* <h1 className="landingHeader">KILLING CARROT TOP</h1> */}
      {/* <h3>
        One last blow across Carrot Top's Skull fractures reality into one
        million prismatic pieces. "What is this?" you think to yourself as this
        vile muscular Destroyer of Worlds sprials into unknowable colors from
        beyond comprehensible places.
      </h3>
      <h3>
        Your molecules separate and reunite once again. Time is extinguished and
        starts once again. Your life is extinguished and begins once again.
      </h3>
      <h3>
        Humanity has been saved. You have completed your mission. You have...
      </h3>
      <h1 className="wonHeader">KILLED CARROT TOP</h1> */}
      {/* <Link
        className="linkText"
        style={{
          textDecoration: "none",
        }}
        to="/Intro"
      >
        <h1 onClick={pressStartGame} className="startGameText">
          PLAY AGAIN
        </h1>
      </Link> */}
      {isStartButtonVisible && renderStartAgainButton()}
    </Container>
  );
};

export default Won;