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
import { toggleCreateCharacter } from "../actions";
import CreateCharacter from "./CreateCharacter";
import ChapterOne from './ChapterOne';
import Battle from "./Battle";
import { emoPhilips } from "../constants/Monsters";
import ReactHowler from "react-howler";
import gamePlay from "../media/gameplay.mp3";

const Game = () => {

  const dispatch = useDispatch();

   const createCharacter = useSelector((state) => state.createCharacter);
   const chapterOne = useSelector((state) => state.chapterOne);

   console.log(chapterOne)

  const [isGameMusicPlaying, setIsGameMusicPlaying] = useState(true);

  const turnOffGamePlayMusic = () => {
    setIsGameMusicPlaying(false);
  };



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
          <Col className="enemyDisplay" xs={6}>
            {" "}
            <EnemyDisplay />
          </Col>
          <Col className="enemyImage">
            <EnemyPicture />{" "}
          </Col>
        </Row>
        <Row>
          <Col className="mainDisplayOne">
            <MainDisplay />
            {createCharacter && <CreateCharacter />}
            {chapterOne && <ChapterOne />}
            {/* <Battle emoPhilips={emoPhilips} /> */}
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