import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useSelector, useDispatch } from "react-redux";
import {
  emoPhilips,
  paulyShore,
  judyTenuda,
  timAllen,
  andrewDiceClay,
  samKinison,
  gallagher,
  bobcatGoldthwait
} from "../constants/Monsters";



const EnemyDisplay = (enemy) => {
 const enemyHitpoints = useSelector((state) => state.enemyHitpoints)

  const chapterOne = useSelector((state) => state.chapterOne);
  const chapterTwo = useSelector((state) => state.chapterTwo);
  const chapterThree = useSelector((state) => state.chapterThree);
  const chapterFive = useSelector((state) => state.chapterFive);
  const chapterSix = useSelector((state) => state.chapterSix);
  const chapterSeven = useSelector((state) => state.chapterSeven);
  const chapterEight = useSelector((state) => state.chapterEight);




  return (
    <Container>
      <h5>{chapterOne && emoPhilips.intro}</h5>
      <h5>{chapterTwo && timAllen.intro}</h5>
      <h5>{chapterThree && paulyShore.intro}</h5>
      <h5>{chapterFive && judyTenuda.intro}</h5>
      <h5>{chapterSix && andrewDiceClay.intro}</h5>
      <h5>{chapterSeven && samKinison.intro}</h5>
      <h5>{chapterEight && bobcatGoldthwait.intro}</h5>

      <h3>{chapterOne && emoPhilips.name}</h3>
      <h3>{chapterTwo && timAllen.name}</h3>
      <h3>{chapterThree && paulyShore.name}</h3>
      <h3>{chapterFive && judyTenuda.name}</h3>
      <h3>{chapterSix && andrewDiceClay.name}</h3>
      <h3>{chapterSeven && samKinison.name}</h3>
      <h5>{chapterEight && bobcatGoldthwait.name}</h5>

      <h6>Hit Points: {enemyHitpoints}</h6>
    </Container>
  );
};

export default EnemyDisplay;
