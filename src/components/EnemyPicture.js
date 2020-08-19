import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useSelector, useDispatch } from "react-redux";
import { emoPhilips } from "../constants/Monsters";
import emoPhilipsPicture from "../media/emo.jpg";
import timPicture from "../media/tim.jpg";
import paulyPicture from "../media/pauly.jpeg";


const EnemyPicture = (enemy) => {
  const enemyHitpoints = useSelector((state) => state.enemyHitpoints);

  const chapterOne = useSelector((state) => state.chapterOne);
  const chapterTwo = useSelector((state) => state.chapterTwo);
  const chapterThree = useSelector((state) => state.chapterThree);


  return (
    <Container className="enemyPictureContainer">
      {chapterOne && <img className="enemyPicture" src={emoPhilipsPicture} />}
      {chapterTwo && <img className="enemyPicture" src={timPicture} />}
      {chapterThree && <img className="enemyPicture" src={paulyPicture} />}
    </Container>
  );
};

export default EnemyPicture;
