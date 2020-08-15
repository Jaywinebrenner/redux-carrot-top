import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useSelector, useDispatch } from "react-redux";
import { emoPhilips } from "../constants/Monsters";
import emoPhilipsPicture from "../media/emo.jpg";


const EnemyPicture = (enemy) => {
  const enemyHitpoints = useSelector((state) => state.enemyHitpoints);

  return (
    <Container className="enemyPictureContainer">
      <img className="enemyPicture" src={emoPhilipsPicture} />
    </Container>
  );
};

export default EnemyPicture;
