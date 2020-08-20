import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useSelector, useDispatch } from "react-redux";
import { emoPhilips, judyTenuda, bobcatGoldthwait } from "../constants/Monsters";
import emoPhilipsPicture from "../media/emo.jpg";
import timPicture from "../media/tim.jpg";
import paulyPicture from "../media/pauly.jpeg";
import judyTenudaPicture from "../media/judy.jpg";
import andrewDiceClayPicture from "../media/dice.jpg";
import samKinisonPicture from "../media/kinison.jpg";
import bobcatGoldthwaitPicture from "../media/bobcat.jpg";
import victoriaJacksonPicture from '../media/victoria.jpg';
import rodneyDangerfieldPicture from "../media/rodney.jpg";
import yakovSmirnoffPicture from "../media/yakov.jpg";
import gallagherPicture from "../media/gallagher.jpg";
import carrotTopPicture from "../media/carrot-top.png";


const EnemyPicture = (enemy) => {
  const enemyHitpoints = useSelector((state) => state.enemyHitpoints);

  const chapterOne = useSelector((state) => state.chapterOne);
  const chapterTwo = useSelector((state) => state.chapterTwo);
  const chapterThree = useSelector((state) => state.chapterThree);
  const chapterFive = useSelector((state) => state.chapterFive);
  const chapterSix = useSelector((state) => state.chapterSix);
  const chapterSeven = useSelector((state) => state.chapterSeven);
  const chapterEight = useSelector((state) => state.chapterEight);
  const chapterTen = useSelector((state) => state.chapterTen);
  const chapterEleven = useSelector((state) => state.chapterEleven);
  const chapterTwelve = useSelector((state) => state.chapterTwelve);
  const chapterThirteen = useSelector((state) => state.chapterThirteen);
  const chapterFourteen = useSelector((state) => state.chapterFourteen);


  return (
    <Container className="enemyPictureContainer">
      {chapterOne && <img className="enemyPicture" src={emoPhilipsPicture} />}
      {chapterTwo && <img className="enemyPicture" src={timPicture} />}
      {chapterThree && <img className="enemyPicture" src={paulyPicture} />}
      {chapterFive && <img className="enemyPicture" src={judyTenudaPicture} />}
      {chapterSix && (
        <img className="enemyPicture" src={andrewDiceClayPicture} />
      )}
      {chapterSeven && <img className="enemyPicture" src={samKinisonPicture} />}
      {chapterEight && (
        <img className="enemyPicture" src={bobcatGoldthwaitPicture} />
      )}
      {chapterTen && (
        <img className="enemyPicture" src={victoriaJacksonPicture} />
      )}
      {chapterEleven && (
        <img className="enemyPicture" src={rodneyDangerfieldPicture} />
      )}
      {chapterTwelve && (
        <img className="enemyPicture" src={yakovSmirnoffPicture} />
      )}
      {chapterThirteen && (
        <img className="enemyPicture" src={gallagherPicture} />
      )}
      {chapterFourteen && (
        <img className="enemyPicture" src={carrotTopPicture} />
      )}
    </Container>
  );
};

export default EnemyPicture;
