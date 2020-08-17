import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useSelector, useDispatch } from "react-redux";
import { emoPhilips } from "../constants/Monsters";
import emoPhilipsPicture from "../media/emo.jpg";
import timPicture from "../media/tim.jpg";


const EnemyPicture = (enemy) => {
  const enemyHitpoints = useSelector((state) => state.enemyHitpoints);

  const chapterOne = useSelector((state) => state.chapterOne);
  const chapterTwo = useSelector((state) => state.chapterTwo);


  return (
    <Container className="enemyPictureContainer">
      {chapterOne && <img className="enemyPicture" src={emoPhilipsPicture} />}
      {chapterTwo && <img className="enemyPicture" src={timPicture} />}
    </Container>
  );
};

export default EnemyPicture;
