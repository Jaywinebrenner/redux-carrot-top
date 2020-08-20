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


const EnemyPicture = (enemy) => {
  const enemyHitpoints = useSelector((state) => state.enemyHitpoints);

  const chapterOne = useSelector((state) => state.chapterOne);
  const chapterTwo = useSelector((state) => state.chapterTwo);
  const chapterThree = useSelector((state) => state.chapterThree);
  const chapterFive = useSelector((state) => state.chapterFive);
  const chapterSix = useSelector((state) => state.chapterSix);
  const chapterSeven = useSelector((state) => state.chapterSeven);
  const chapterEight = useSelector((state) => state.chapterEight);


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
      {chapterEight && <img className="enemyPicture" src={bobcatGoldthwaitPicture} />}
    </Container>
  );
};

export default EnemyPicture;
