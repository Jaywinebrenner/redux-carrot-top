import React, { useState, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stats from "./Stats";
import { useSelector, useDispatch } from "react-redux";
import {
  decrementPlayerHp,
  incrementPlayerHp,
  toggleChapterOne,
  toggleBattleDisplay,
  toggleEnemyDisplay,
  toggleChapterTwo,
  toggleChapterThree,
  toggleChapterFour,
  toggleChapterFive,
  toggleChapterSix,
  toggleChapterSeven,
  toggleChapterEight,
  toggleChapterNine,
  toggleChapterTen,
  toggleChapterEleven,
  toggleChapterTwelve,
  toggleChapterThirteen,
  toggleChapterFourteen,
  incrementPlayerDefence,
  decrementPlayerDefence,
  changeDamage,
  toggleIsGameMusicPlaying

} from "../actions";
import carrotTopThumbnail from "../media/carrot-top.png";
import MainDisplay from "./MainDisplay";
import {
  emoPhilips,
  paulyShore,
  andrewDiceClay,
  bobcatGoldthwait,
  timAllen,
  judyTenuda,
  samKinison,
  victoriaJackson,
  rodneyDangerfield,
  yakovSmirnoff,
  gallagher,
  carrotTop,
} from "../constants/Monsters";
import ReactHowler from "react-howler";
import victoryTheme from "../media/themeAbridged.mp3";


const Victory = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleIsGameMusicPlaying(true))
  }, []);


  const playerHitpoints = useSelector((state) => state.playerHitpoints);
  const [victoryMessage, setVictoryMessage] = useState(true);
  const [lootOptionsVisible, setLootOptionsVisible] = useState(false);
  const [lootResultYes, setLootResultYes] = useState(false);
  const [lootResultNo, setLootResultNo] = useState(false);

   const playerDefence = useSelector((state) => state.playerDefence);

  const chapterOne = useSelector((state) => state.chapterOne);
  const chapterTwo = useSelector((state) => state.chapterTwo);
  const chapterThree = useSelector((state) => state.chapterThree);
  const chapterFive = useSelector((state) => state.chapterFive);
  const chapterSix = useSelector((state) => state.chapterSix);
  const chapterSeven = useSelector((state) => state.chapterSeven);
  const chapterEight = useSelector((state) => state.chapterEight);
  const chapterNine = useSelector((state) => state.chapterNine);
  const chapterTen = useSelector((state) => state.chapterTen);
  const chapterEleven = useSelector((state) => state.chapterEleven);
  const chapterTwelve = useSelector((state) => state.chapterTwelve);
  const chapterThirteen = useSelector((state) => state.chapterThirteen);
  const chapterFourteen = useSelector((state) => state.chapterFourteen);


   console.log("Chapter 1 ", chapterOne);
  console.log("Chapter 2 ", chapterTwo);
    console.log("Chapter 3 ", chapterThree);
     console.log("Chapter 7 ", chapterSeven);
     console.log("Chapter 8 ", chapterEight);
     console.log("Chapter 9 ", chapterNine);
     console.log("Chapter 10 ", chapterTen);
     console.log("Chapter 11", chapterEleven);
     console.log("Chapter 12 ", chapterTwelve);
     console.log("Chapter 13 ", chapterThirteen);
     console.log("Chapter 14 ", chapterFourteen);

console.log("Player defence", playerDefence);

  const renderVictoryMessage = () => {
    return (
      <Container>
        <h6 className="deadText">
          {chapterOne && emoPhilips.died}
          {chapterTwo && timAllen.died}
          {chapterThree && paulyShore.died}

          {chapterFive && judyTenuda.died}
          {chapterSix && andrewDiceClay.died}
          {chapterSeven && samKinison.died}
          {chapterEight && bobcatGoldthwait.died}
     
          {chapterTen && victoriaJackson.died}
          {chapterEleven && rodneyDangerfield.died}
          {chapterTwelve && yakovSmirnoff.died} 
          {chapterThirteen && gallagher.died}
          {chapterFourteen && carrotTop.died}
        </h6>
        <h1 className="areDeadText">VICTORIOUS</h1>
        <h1
          className="buttonText"
          onClick={() => {
            setVictoryMessage(false);
            setLootOptionsVisible(true);
          }}
        >
          CONTINUE
        </h1>
      </Container>
    );
  };


  const [twentySidedDie, setTwentySidedDie] = useState(
    Math.floor(Math.random() * 20) + 1,
  );
  const renderLootOptions = () => {
    return (
      <Container>
        <h6 className="lootTextSubheader">
          {chapterOne && emoPhilips.lootOne}
          {chapterTwo && timAllen.lootOne}
          {chapterThree && paulyShore.lootOne}
          {chapterFive && judyTenuda.lootOne}
          {chapterSix && andrewDiceClay.lootOne}
          {chapterSeven && samKinison.lootOne}
          {chapterEight && bobcatGoldthwait.lootOne}
          {chapterTen && victoriaJackson.lootOne}
          {chapterEleven && rodneyDangerfield.lootOne}
          {chapterTwelve && yakovSmirnoff.lootOne}
          {chapterThirteen && gallagher.lootOne}
          {chapterFourteen && carrotTop.lootOne}
        </h6>
        <h6 className="lootText">
          {" "}
          {chapterOne && emoPhilips.lootTwo}
          {chapterTwo && timAllen.lootTwo}
          {chapterThree && paulyShore.lootTwo}
          {chapterFive && judyTenuda.lootTwo}
          {chapterSix && andrewDiceClay.lootTwo}
          {chapterSeven && samKinison.lootTwo}
          {chapterEight && bobcatGoldthwait.lootTwo}
          {chapterTen && victoriaJackson.lootTwo}
          {chapterEleven && rodneyDangerfield.lootTwo}
          {chapterTwelve && yakovSmirnoff.lootTwo}
          {chapterThirteen && gallagher.lootTwo}
          {chapterFourteen && carrotTop.lootTwo}
        </h6>
        <Row>
          <Col>
            <h1 className="buttonText" onClick={lootResults}>
              Yes
            </h1>
          </Col>
          <Col>
            <h1
              className="buttonText"
              onClick={() => {
                setLootResultNo(true);
                setLootOptionsVisible(false);
              }}
            >
              No
            </h1>
          </Col>
        </Row>
      </Container>
    );
  };


    const lootResults = () => {
      setLootResultYes(true);
      setLootOptionsVisible(false);
      if (chapterSix == true || chapterTen == true) {
        dispatch(decrementPlayerHp(twentySidedDie));
        isPlayerDeadCheck()
      }
      if (chapterSeven === true) {
        dispatch(incrementPlayerDefence(3));
      }
      if (chapterOne === true || chapterTwo === true || chapterFive === true || chapterTwelve === true || chapterEleven == true) {
        dispatch(incrementPlayerHp(twentySidedDie));
      }
      if (chapterThree === true) {
        dispatch(decrementPlayerDefence(2))
      }
      if (chapterThirteen === true) {
        dispatch(changeDamage(50));
      }
    };

    const isPlayerDeadCheck = () => {
      if (playerHitpoints < 1) {
        return (
          <Redirect
            to={{
              pathname: "/Dead",
            }}
          />
        );
      }
    };

  const renderLootResultYes = () => {
    if (lootResultYes)
      return (
        <Container>
          <h6>
            {chapterOne && emoPhilips.lootThree}
            {chapterTwo && timAllen.lootThree}
            {chapterThree && paulyShore.lootThree}
            {chapterFive && judyTenuda.lootThree}
            {chapterSix && andrewDiceClay.lootThree}
            {chapterSeven && samKinison.lootThree}
            {chapterEight && bobcatGoldthwait.lootThree}
            {chapterTen && victoriaJackson.lootThree}
            {chapterEleven && rodneyDangerfield.lootThree}
            {chapterTwelve && yakovSmirnoff.lootThree}
            {chapterThirteen && gallagher.lootThree}
            {chapterFourteen && carrotTop.lootThree}
          </h6>

          {(chapterOne ||
            chapterTwo ||
            chapterFive ||
            chapterEight) && <h6>You receive {twentySidedDie} hit points.</h6>}
          {chapterSix && (
            <h6>You suffer {twentySidedDie} hit points of damage.</h6>
          )}
          {chapterSeven && <h6>You gain 3 Defense points.</h6>}
          {chapterThree && <h6>You lose 2 Defense points.</h6>}
          {chapterTen && <h6>You recieve {twentySidedDie} hit points.</h6>}
          {chapterThirteen && (
            <h6>You can now inflict up to 50 hit points of damage.</h6>
          )}
          {chapterEleven && <h6>You gain {twentySidedDie} hit points.</h6>}

          <Link
            onClick={() => {
              goBackToGame();
            }}
            style={{ textDecoration: "none", color: "white" }}
            to="/Game"
          >
            <h1 className="startGameText">CONTINUE</h1>
          </Link>
        </Container>
      );
  };

  // const history = useHistory();

  const goBackToGame = () => {
    dispatch(toggleChapterOne(false));
    dispatch(toggleChapterTwo(false));
    dispatch(toggleChapterThree(false));
    dispatch(toggleChapterFour(false));
    dispatch(toggleChapterFive(false));
    dispatch(toggleChapterSix(false));
    dispatch(toggleChapterSeven(false));
    dispatch(toggleChapterEight(false));
    dispatch(toggleChapterNine(false));
    dispatch(toggleChapterTen(false));
    dispatch(toggleChapterEleven(false));
    dispatch(toggleChapterTwelve(false));
    dispatch(toggleChapterThirteen(false));
    dispatch(toggleChapterFourteen(false));

    dispatch(toggleBattleDisplay(false));
    dispatch(toggleEnemyDisplay(false))

    chapterOne && dispatch(toggleChapterTwo(true));
    chapterTwo && dispatch(toggleChapterThree(true));
    chapterThree && dispatch(toggleChapterFour(true));
    chapterFive && dispatch(toggleChapterEight(true));
    chapterSix && dispatch(toggleChapterEight(true));
    chapterSeven && dispatch(toggleChapterEight(true));
    chapterEight && dispatch(toggleChapterNine(true));
    chapterTen && dispatch(toggleChapterThirteen(true));
    chapterEleven && dispatch(toggleChapterThirteen(true));
    chapterTwelve && dispatch(toggleChapterThirteen(true));
    chapterThirteen && dispatch(toggleChapterFourteen(true));

  };

  const renderLootResultNo = () => {
    if (lootResultNo) {
      return (
        <Container>
          <h6>
            {chapterOne && emoPhilips.lootFour}
            {chapterTwo && timAllen.lootFour}
            {chapterThree && paulyShore.lootFour}
            {chapterFive && judyTenuda.lootFour}
            {chapterSix && andrewDiceClay.lootFour}
            {chapterSeven && samKinison.lootFour}
            {chapterEight && bobcatGoldthwait.lootFour}
            {chapterTen && victoriaJackson.lootFour}
            {chapterEleven && rodneyDangerfield.lootFour}
            {chapterTwelve && yakovSmirnoff.lootFour}
            {chapterThirteen && gallagher.lootFour}
            {chapterFourteen && carrotTop.lootFour}
          </h6>
          <Link
            onClick={() => {
              goBackToGame();
            }}
            style={{ textDecoration: "none", fontFamily: "Red Rose" }}
            to="/Game"
          >
            <h1 className="buttonText">CONTINUE</h1>
          </Link>
        </Container>
      );
    }
  };

  return (
    <div className="gameWrapper">
      <Row>
        <Col className="carrotTopLogo" xs={1.5}>
          <img className="carrotTopThumbNail" src={carrotTopThumbnail} />
        </Col>
        <Col className="gameTitle">
          <h1 className="gameTitleText">KILLING CARROT TOP</h1>
        </Col>
      </Row>
      <Row>
        <Col className="stats">
          <Stats />
        </Col>
        <Col className="enemyDisplay"></Col>
        <Col className="enemyPictureDisplay"></Col>
      </Row>
      <Row>
        <Col className="mainDisplayOne">
          <MainDisplay />
          {victoryMessage && renderVictoryMessage()}
          {lootResultYes && renderLootResultYes()}
          {lootResultNo && renderLootResultNo()}
          {lootOptionsVisible && renderLootOptions()}
        </Col>
      </Row>
      <ReactHowler
        src={victoryTheme}
        volume={0.7}
        loop={true}
        // playing={isGameMusicPlaying}
      />
    </div>
  );
};

export default Victory;







