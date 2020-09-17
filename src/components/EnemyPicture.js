import React from "react";
import Container from "react-bootstrap/Container";
import { useSelector } from "react-redux";
import emoPhilipsPicture from "../media/emo_8F.png";
import timPicture from "../media/tim_8F.png";
import paulyPicture from "../media/pauly2_8F.png";
import judyTenudaPicture from "../media/judy_8F.png";
import andrewDiceClayPicture from "../media/dice_8F.png";
import samKinisonPicture from "../media/kninson_8F.png";
import bobcatGoldthwaitPicture from "../media/bobcat_8F.png";
import victoriaJacksonPicture from '../media/victoria_8F.png';
import rodneyDangerfieldPicture from "../media/rodney_8F.png";
import yakovSmirnoffPicture from "../media/yakov_8F.png";
import gallagherPicture from "../media/gallagher_8F.png";
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
      {chapterOne && <img className="enemyPicture" alt='Emo' src={emoPhilipsPicture} />}
      {chapterTwo && <img className="enemyPicture" alt='Tim' src={timPicture} />}
      {chapterThree && <img className="enemyPicture" alt='Pauly' src={paulyPicture} />}
      {chapterFive && <img className="enemyPicture" alt='Judy' src={judyTenudaPicture} />}
      {chapterSix && (
        <img className="enemyPicture" alt='Dice' src={andrewDiceClayPicture} />
      )}
      {chapterSeven && <img className="enemyPicture" alt='Sam' src={samKinisonPicture} />}
      {chapterEight && (
        <img className="enemyPicture" alt='Bobcat' src={bobcatGoldthwaitPicture} />
      )}
      {chapterTen && (
        <img className="enemyPicture" alt='Victoria' src={victoriaJacksonPicture} />
      )}
      {chapterEleven && (
        <img className="enemyPicture" alt='Rodney' src={rodneyDangerfieldPicture} />
      )}
      {chapterTwelve && (
        <img className="enemyPicture" alt='Yakov' src={yakovSmirnoffPicture} />
      )}
      {chapterThirteen && (
        <img className="enemyPicture" alt='Gallagher' src={gallagherPicture} />
      )}
      {chapterFourteen && (
        <img className="enemyPicture" alt='Carrot Top' src={carrotTopPicture} />
      )}
    </Container>
  );
};

export default EnemyPicture;
