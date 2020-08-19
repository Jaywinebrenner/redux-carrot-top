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
import Battle from "./Battle";
// import { emoPhilips } from "../constants/Monsters";
import ReactHowler from "react-howler";
import gamePlay from "../media/gameplay.mp3";
import { emoPhilips } from "../constants/Monsters";
import {
  toggleCreateCharacter,
  toggleBattleDisplay
} from "../actions";

const Game = () => {

  const dispatch = useDispatch(); 

   const createCharacter = useSelector((state) => state.createCharacter);
   const chapterOne = useSelector((state) => state.chapterOne);
   const chapterTwo = useSelector((state) => state.chapterTwo);
  const chapterThree = useSelector((state) => state.chapterThree);

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
    console.log("GAME createCharacter", createCharacter);
    console.log("GAME battleVisible", battleVisible);

  //  console.log("EMO ON GAME", enemy.enemy.name);
  console.log("ENEMY DISPLAY VISIBLE?", enemyDisplayVisible);


  const [isGameMusicPlaying, setIsGameMusicPlaying] = useState(true);

  const turnOffGamePlayMusic = () => {
    setIsGameMusicPlaying(false);
  };

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
            {/* {createCharacter && <CreateCharacter />}
            {chapterOne && <ChapterOne />}
            {chapterTwo && <ChapterTwo />} */}
            {chapterThree && <ChapterThree />}
            {/* {battleVisible && <Battle/>} */}
          </Col>
        </Row>
        <ReactHowler
          src={gamePlay}
          volume={0.4}
          loop={true}
          playing={isGameMusicPlaying}
        />
        {/* <ReactHowler
          src={battle}
          volume={0.3}
          loop={true}
          playing={isBattleMusicPlaying}
        /> */}
        {/* <ReactHowler
        src={victory}
        volume={0.3}
        loop={true}
        playing={isVictoryMusicPlaying}
      />
      <ReactHowler
        src={death}
        volume={0.3}
        loop={true}
        playing={isDeathMusicPlaying}
      /> */}
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