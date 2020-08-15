import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useSelector, useDispatch } from "react-redux";
import { emoPhilips } from "../constants/Monsters";


const EnemyDisplay = (enemy) => {
 const enemyHitpoints = useSelector((state) => state.enemyHitpoints)

  return (
    <Container>
      <h5>{enemy.enemy.intro}</h5>
      <h3>{enemy.enemy.name}</h3>
      <h6>Hit Points: {enemyHitpoints}</h6>


    </Container>
  );
};

export default EnemyDisplay;
