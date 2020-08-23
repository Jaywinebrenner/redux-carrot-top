import React, { useState, useEffect } from "react";
import Container  from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stats from './Stats'
import EnemyDisplay from "./EnemyDisplay";
import EnemyPicture from "./EnemyPicture";
import MainDisplay from "./MainDisplay";
import carrotTop from "../media/carrot-top.png";
import { useSelector, useDispatch } from "react-redux";
import CreateCharacter from "./CreateCharacter";
import ChapterOne from './ChapterOne';
import ChapterTwo from "./ChapterTwo";
import ChapterThree from "./ChapterThree";
import ChapterFour from "./ChapterFour";
import ChapterFive from "./ChapterFive";
import ChapterSix from "./ChapterSix";
import ChapterSeven from "./ChapterSeven";
import ChapterEight from "./ChapterEight";
import ChapterNine from "./ChapterNine";
import ChapterTen from "./ChapterTen";
import ChapterEleven from "./ChapterEleven";
import ChapterTwelve from "./ChapterTwelve";
import ChapterThirteen from "./ChapterThirteen";
import ChapterFourteen from "./ChapterFourteen";
import ReactHowler from "react-howler";
import gamePlay from "../media/gameplay.mp3";
import { emoPhilips } from "../constants/Monsters";


const Game = () => {

  const dispatch = useDispatch(); 

   const createCharacter = useSelector((state) => state.createCharacter);
   const chapterOne = useSelector((state) => state.chapterOne);
   const chapterTwo = useSelector((state) => state.chapterTwo);
  const chapterThree = useSelector((state) => state.chapterThree);
  const chapterFour = useSelector((state) => state.chapterFour);
  const chapterFive = useSelector((state) => state.chapterFive);
  const chapterSix = useSelector((state) => state.chapterSix);
  const chapterSeven = useSelector((state) => state.chapterSeven);
  const chapterEight = useSelector((state) => state.chapterEight);
  const chapterNine = useSelector((state) => state.chapterNine);
  const chapterTen = useSelector((state) => state.chapterTen);
  const chapterEleven = useSelector((state) => state.chapterEleven);
  const chapterTwelve = useSelector((state) => state.chapterTwelve);
  const chapterThirteen = useSelector((state) => state.chapterThirteen);
  const chapterFourteen = useSelector((state) => state.chapterFourteen);

   const battleVisible = useSelector(
     (state) => state.battleVisible,
   );


    const enemyDisplayVisible = useSelector(
      (state) => state.enemyDisplayVisible,
    );

    console.log("GAME createCharacter", createCharacter);
    console.log("GAME chapterOne", chapterOne);
    console.log("GAME chapterTwo", chapterTwo);
    console.log("GAME chapterThree", chapterThree);
    console.log("GAME chapterFour", chapterFour);
    console.log("GAME chapterFive", chapterFive);
    console.log("GAME chapterSix", chapterSix);
    console.log("GAME chapterSeven", chapterSeven);
    console.log("GAME chapterEight", chapterEight);
    console.log("GAME chapterNine", chapterNine);
    console.log("GAME chapterTen", chapterTen);
    console.log("GAME chapterEleven", chapterEleven);
    console.log("GAME chapterTwelve", chapterTwelve);
    console.log("GAME chapterThirteen", chapterThirteen);
    console.log("GAME chapterFourteen", chapterFourteen);

    console.log("GAME createCharacter", createCharacter);
    console.log("GAME battleVisible", battleVisible);

  //  console.log("EMO ON GAME", enemy.enemy.name);
  console.log("ENEMY DISPLAY VISIBLE?", enemyDisplayVisible);

const isGameMusicPlaying = useSelector((state) => state.isGameMusicPlaying);


  const renderEnemyDisplay = () => {
    return (
      <EnemyDisplay enemy={emoPhilips} />
    )
  }

    const renderEnemyPicture = () => {
    return (
      <EnemyPicture enemy={emoPhilips} />
    )
  }


  const renderGameWindow = () => {
    return (
      <Container className="gameWrapper">
        <Row>
          <Col className="carrotTopLogo" xs={1.5}>
            <img className="carrotTopThumbNail" src={carrotTop} />
          </Col>
          <Col className="gameTitle">
            <h1 className="gameTitleText">KILLING CARROT TOP</h1>
          </Col>
        </Row>
        <Row>
          <Col className="stats">
            <Stats />
          </Col>
          <Col className="enemyDisplay">
            {" "}
            {enemyDisplayVisible && renderEnemyDisplay()}
          </Col>
          <Col className="enemyPictureDisplay">
            {enemyDisplayVisible && renderEnemyPicture()}
          </Col>
        </Row>
        <Row>
          <Col className="mainDisplayOne">
            <MainDisplay />
            {createCharacter && <CreateCharacter />}
            {chapterOne && <ChapterOne />}
            {chapterTwo && <ChapterTwo />}
            {chapterThree && <ChapterThree />}
            {chapterFour && <ChapterFour />}
            {chapterFive && <ChapterFive />}
            {chapterSix && <ChapterSix />}
            {chapterSeven && <ChapterSeven />}
            {chapterEight && <ChapterEight />}
            {chapterNine && <ChapterNine />}
            {chapterTen && <ChapterTen />}
            {chapterEleven && <ChapterEleven />}
            {chapterTwelve && <ChapterTwelve />}
            {chapterThirteen && <ChapterThirteen />}
            {chapterFourteen && <ChapterFourteen />}
          </Col>
        </Row>
        <ReactHowler
          src={gamePlay}
          volume={0.4}
          loop={true}
          playing={isGameMusicPlaying}
        />
      </Container>
    );
  }

  return (
    <React.Fragment>
      {renderGameWindow()}
    </React.Fragment>
  );
}

export default Game