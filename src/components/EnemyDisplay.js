import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useSelector, useDispatch } from "react-redux";
import {
  emoPhilips,
  paulyShore,
  judyTenuda,
  timAllen,
} from "../constants/Monsters";



const EnemyDisplay = (enemy) => {
 const enemyHitpoints = useSelector((state) => state.enemyHitpoints)

  const chapterOne = useSelector((state) => state.chapterOne);
  const chapterTwo = useSelector((state) => state.chapterTwo);
  const chapterThree = useSelector((state) => state.chapterThree);
  const chapterFive = useSelector((state) => state.chapterFive);




  return (
    <Container>
      <h5>{chapterOne && emoPhilips.intro}</h5>
      <h5>{chapterTwo && timAllen.intro}</h5>
      <h5>{chapterThree && paulyShore.intro}</h5>

      <h3>{chapterOne && emoPhilips.name}</h3>
      <h3>{chapterTwo && timAllen.name}</h3>
      <h3>{chapterThree && paulyShore.name}</h3>
      <h3>{chapterFive && judyTenuda.name}</h3>

      <h6>Hit Points: {enemyHitpoints}</h6>
    </Container>
  );
};

export default EnemyDisplay;
