import React, { useState, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
// import { RUN } from "../../constants/Story";
import Typewriter from "typewriter-effect";
import Game from "./Game";
import { useSelector, useDispatch } from "react-redux";
import playerDefence from "../reducers/playerDefence";
import {
  incrementEnemyHp,
  setEnemyHp,
  decrementEnemyHp,
  decrementPlayerHp,
  incrementPlayerHp,
  changeArmor,
  toggleChapterOne,
  toggleChapterTwo,
  toggleBattleDisplay,
} from "../actions";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { emoPhilips } from "../constants/Monsters";


let initiativeRoll = null;
let playerAttackRoll = null;
let enemyAttackRoll = null;
let doubleDamageVsEnemyAmount = null;
let doubleDamageVsPlayerAmount = null;
let playerAttackRange = null;
let enemyAttackRange = null;

const Battle = (enemy) => {

  const dispatch = useDispatch();

  const [
    isPlayerWonInitiativeVisible,
    setIsPlayerWonInitiativeVisible,
  ] = useState(false);
  const [
    isEnemyWonInitiativeVisible,
    setIsEnemyWonInitiativeVisible,
  ] = useState(false);
  const [isPlayerAttackVisible, setIsPlayerAttackVisible] = useState(false);
  const [isEnemyAttackVisible, setIsEnemyAttackVisible] = useState(false);
  const [playerMissed, setPlayerMissed] = useState(false);
  const [enemyMissed, setEnemyMissed] = useState(false);
  const [isDoubleDamageVsPlayer, setIsDoubleDamageVsPlayer] = useState(false);
  const [IsDoubleDamageVsEnemy, setIsDoubleDamageVsEnemy] = useState(false);
  const [isRunVisible, setIsRunVisible] = useState(false);
  const [battleButtonsVisible, setBattleButtonsVisible] = useState(true);
  const [isPlayerDead, setIsPlayerDead] = useState(true);
  const [isEnemyDead, setIsEnemyDead] = useState(true);

  const weapon = useSelector((state) => state.weapon);
  const playerHitpoints = useSelector((state) => state.playerHitpoints);
  const playerDamage = useSelector((state) => state.playerDamage);
  const playerDefence = useSelector((state) => state.playerDefence);
  const enemyHitpoints = useSelector((state) => state.enemyHitpoints);

  const createCharacter = useSelector((state) => state.createCharacter);
  const chapterOne = useSelector((state) => state.chapterOne);
  const chapterTwo = useSelector((state) => state.chapterTwo);
  const battleVisible = useSelector((state) => state.battleVisible);
  const chapterFourteen = useSelector((state) => state.chapterFourteen)
    const chapterTwelve = useSelector((state) => state.chapterTwelve);

console.log("Chapter 14 on BATTLE", chapterFourteen);

    

  useEffect(() => {
    const enemyHitpointsFromMonsters = () => {
      if (enemy.enemy.name === "Emo Philips") {
        dispatch(setEnemyHp(enemy.enemy.hitPoints));
      }
      if (enemy.enemy.name === "Tim Allen") {
        dispatch(setEnemyHp(enemy.enemy.hitPoints));
      }
      if (enemy.enemy.name === "Pauly Shore") {
        dispatch(setEnemyHp(enemy.enemy.hitPoints));
      }
      if (enemy.enemy.name === "Andrew Dice Clay") {
        dispatch(setEnemyHp(enemy.enemy.hitPoints));
      }
      if (enemy.enemy.name === "Judy Tenuta") {
        dispatch(setEnemyHp(enemy.enemy.hitPoints));
      }
      if (enemy.enemy.name === "Sam Kinison") {
        dispatch(setEnemyHp(enemy.enemy.hitPoints));
      }
      if (enemy.enemy.name === "Bobcat Goldthwait") {
        dispatch(setEnemyHp(enemy.enemy.hitPoints));
      }
      if (enemy.enemy.name === "Victoria Jackson") {
        dispatch(setEnemyHp(enemy.enemy.hitPoints));
      }
      if (enemy.enemy.name === "Rodney Dangerfield") {
        dispatch(setEnemyHp(enemy.enemy.hitPoints));
      }
      if (enemy.enemy.name === "Yakov Smirnoff") {
        dispatch(setEnemyHp(enemy.enemy.hitPoints));
      }
      if (enemy.enemy.name === "Gallagher") {
        dispatch(setEnemyHp(enemy.enemy.hitPoints));
      }
      if (enemy.enemy.name === "Carrot Top") {
        dispatch(setEnemyHp(enemy.enemy.hitPoints));
      }


    };
    enemyHitpointsFromMonsters();


  }, []);





  //RENDER TO DOM
  const renderPlayerWonInitiative = (initiativeRoll) => {
    return (
      <Container>
        <h6 className="initiativeText">
          You have won intiiative and swing your {weapon} at{" "}
          {
            enemy.enemy.nameInitiative[
              Math.floor(Math.random() * enemy.enemy.nameInitiative.length)
            ]
          }{" "}
        </h6>
      </Container>
    );
  };

  const renderEnemyWonInitiative = (initiativeRoll) => {
    return (
      <Container>
        <h6 className="initiativeText">
          Your foe has won initiative and attacks!
        </h6>
      </Container>
    );
  };

  const renderPlayerAttack = (playerAttackRoll, playerAttackRange) => {
    return (
      <Container>
        <h5 className="attackRoll"> You have rolled a {playerAttackRoll}</h5>
        <h6 className="attackText">
          You have thrashed {enemy.enemy.name} for {playerAttackRange} damage!
        </h6>
      </Container>
    );
  };

  const renderFoeAttackMessage = () => {

    const messageArray = [
      `A virulent blow across your face sprays a fine mist of blood into the air for ${enemyAttackRange} damage.`,
      `${enemy.enemy.name} lands a devestating blow across your torso for ${enemyAttackRange} hit points of damage.`,
      `Blood gushes from your nose as ${enemy.enemy.name} smashes you directly in the face for ${enemyAttackRange} damage. Blood vessels pop and gore spills from your mouth.`,
    ];
    return (
      <React.Fragment>
        {
          messageArray[
            Math.floor(Math.random() * messageArray.length)
          ]
        }
      </React.Fragment>
    );
  }

  const renderEnemyAttack = (enemyAttackRoll) => {
    return (
      <Container>
        <h5 className="attackRoll">
          {enemy.enemy.name} has rolled a {enemyAttackRoll}
        </h5>
        <h6 className="attackText">
          {renderFoeAttackMessage()}
        </h6>
      </Container>
    );
  };

  const renderEnemyMissed = (enemyAttackRoll) => {
    return (
      <Container>
        <h5 className="attackRoll">{enemy.enemy.name} has rolled a {enemyAttackRoll}</h5>
        <h6 className="attackText">
          {enemy.enemy.name} stumbles and clumsily misses you!
        </h6>
      </Container>
    );
  };
  const renderPlayerMissed = (playerAttackRoll) => {
    return (
      <Container>
        <h5 className="attackRoll">You have rolled {playerAttackRoll}</h5>
        <h6 className="attackText">You swing wildly and miss!</h6>
      </Container>
    );
  };

  const renderDoubleDamageVsPlayer = (
    enemyAttackRoll,
    doubleDamageVsPlayerAmount,
  ) => {
    // console.log("DOULBE DAMAGE vs PLAYER", doubleDamageVsPlayerAmount);

    return (
      <Container>
        <h5 className="attackRoll">
          {" "}
          {
            enemy.enemy.nameAttack[
              Math.floor(Math.random() * enemy.enemy.nameAttack.length)
            ]
          }{" "}
          has rolled a {enemyAttackRoll}
        </h5>
        <h6 className="attackText">
          {
            enemy.enemy.nameAttack[
              Math.floor(Math.random() * enemy.enemy.nameAttack.length)
            ]
          }{" "}
          rolled a 20 and rips a wet gaping hole in your chest for DOUBLE
          DAMAGE! Blood paints the wall in a Pollock-esque splatter as you
          suffer {doubleDamageVsPlayerAmount} damage.
        </h6>
      </Container>
    );
  };

  const renderDoubleDamageVsEnemy = (
    playerAttackRoll,
    doubleDamageVsEnemyAmount,
  ) => {
    // console.log("DOULBE DAMAGE vs ENEMY", doubleDamageVsEnemyAmount);

    return (
      <Container>
        <h5 className="attackRoll">You have rolled a {playerAttackRoll}</h5>
        <h6 className="attackText">
          You unleash a victorious howl as you thrash your foe for DOULBLE
          DAMAGE, suffering a loss of {doubleDamageVsEnemyAmount} hit points.
        </h6>
      </Container>
    );
  };

  // console.log("Emo Philips has this many Hit Points", enemyHitpoints);
  // console.log("You have this many Hit Points", playerHitpoints);
  // console.log("isPlayerWonInitiativeVisible", isPlayerWonInitiativeVisible);
  // console.log("__________________________________________________");

  // INITIATIVE

  const beginAttack = () => {
    // turnOnBattleMusic();
    // turnOffGamePlayMusic();
    initiativeRoll = Math.floor(Math.random() * 20) + 1;

    playerAttackRange = Math.floor(Math.random() * playerDamage) + 1;
    enemyAttackRange = Math.floor(Math.random() * enemy.enemy.damage) + 1;
    setPlayerMissed(false);
    setEnemyMissed(false);
    setIsPlayerWonInitiativeVisible(false);
    setIsEnemyWonInitiativeVisible(false);
    if (initiativeRoll >= 5) {
      // console.log("INITIATIVE ROLL= ", initiativeRoll);
      // console.log("You have won intiiative and attack the foul createure");
      playerAttack();
      enemyAttack();
      setIsPlayerWonInitiativeVisible(true);
      return (
        <Container>
          <h6>You have won intiiative and attack the foul createure</h6>
        </Container>
      );
    } else {
      // console.log("INITIATIVE ROLL= ", initiativeRoll);
      // console.log("Your Foe has won intiiative and attacks you");
      enemyAttack();
      playerAttack();
      setIsEnemyWonInitiativeVisible(true);
    }
    return playerAttackRange;
  };

  // PLAYER ATTACK

  const playerAttack = () => {
    playerAttackRoll = Math.floor(Math.random() * 20) + 1;
    playerAttackRange = Math.floor(Math.random() * playerDamage) + 1;

    setIsDoubleDamageVsEnemy(false);
    setIsPlayerAttackVisible(false);
    setPlayerMissed(false);
    if (playerAttackRoll === 20) {
      setIsDoubleDamageVsEnemy(true);
      doubleDamageVsEnemy(playerAttackRange);
      return;
    } else if (playerAttackRoll > enemy.enemy.defence) {

      dispatch(decrementEnemyHp(playerAttackRange));
      setIsPlayerAttackVisible(true);
    } else {
      setPlayerMissed(true);
    }
    isEnemyDeadCheck();
    // return playerAttackRoll;
    return playerAttackRange;
  };

  //ENEMY ATTACK

  const enemyAttack = () => {
    enemyAttackRoll = Math.floor(Math.random() * 20) + 1;
    setIsDoubleDamageVsPlayer(false);
    setIsEnemyAttackVisible(false);
    setEnemyMissed(false);
    if (enemyAttackRoll === 20) {
      doubleDamageVsPlayer(enemyAttackRange);
      return;
    } else if (enemyAttackRoll >= playerDefence) {
             dispatch(decrementPlayerHp((enemyAttackRange)));
             setIsEnemyAttackVisible(true);
             isPlayerDeadCheck();
           } else {
             setEnemyMissed(true);
           }
    return enemyAttackRoll;
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

  //   const isEnemyDeadCheck = () => {
  //     if (enemyHitpoints <= 0) {
  //       return (
  //         <Redirect
  //           to={{
  //             pathname: "/Victory",
  //           }}
  //         />
  //       );
  //   };
  // }


  const isEnemyDeadCheck = () => {
    if ((enemyHitpoints < 1) && (chapterFourteen === true)) {
      return (
        <Redirect
        to={{
          pathname: "/Won",
        }}
        />
        );
      }
    if (enemyHitpoints < 1) {
      return (
          <Redirect
            to={{
              pathname: "/Victory",
            }}
          />
        );
    }
  }

  //DOUBLE DAMAGE

  const doubleDamageVsEnemy = (playerAttackRange) => {
    doubleDamageVsEnemyAmount = playerAttackRange * 2;
    dispatch(decrementEnemyHp(doubleDamageVsEnemyAmount));
    return doubleDamageVsEnemyAmount;
  };

  const doubleDamageVsPlayer = (enemyAttackRange) => {
    setIsDoubleDamageVsPlayer(true);
    if (enemyAttackRange === 1) {
      doubleDamageVsPlayerAmount = 2;
    } else {
      doubleDamageVsPlayerAmount = enemyAttackRange * 2;
    }
    dispatch(decrementPlayerHp(doubleDamageVsPlayerAmount));
    return doubleDamageVsPlayerAmount;
  };

  //RUN

  const handleRunButton = () => {
    setIsRunVisible(true);
  };

  const renderRun = () => {
    return (
      <Redirect
        to={{
          pathname: "/Run",
        }}
      />
    );
  };

  const renderBattleIfPlayerWonInitiative = () => {
    {
      isRunVisible && renderRun();
    }
    if (isPlayerWonInitiativeVisible) {
      return (
        <Container>
          {renderPlayerWonInitiative(initiativeRoll)}
          {playerMissed && renderPlayerMissed(playerAttackRoll)}
          {isPlayerAttackVisible &&
            renderPlayerAttack(playerAttackRoll, playerAttackRange)}
          {IsDoubleDamageVsEnemy &&
            renderDoubleDamageVsEnemy(
              playerAttackRoll,
              doubleDamageVsEnemyAmount,
            )}

          {enemyMissed && renderEnemyMissed(enemyAttackRoll)}
          {isEnemyAttackVisible && renderEnemyAttack(enemyAttackRoll)}
          {isDoubleDamageVsPlayer &&
            renderDoubleDamageVsPlayer(
              enemyAttackRoll,
              doubleDamageVsPlayerAmount,
            )}
        </Container>
      );
    }
  };

  const renderBattleIfEnemyWonInitiative = () => {
    {
      isRunVisible && renderRun();
    }
    if (isEnemyWonInitiativeVisible) {
      return (
        <Container>
          {renderEnemyWonInitiative(initiativeRoll)}
          {enemyMissed && renderEnemyMissed(enemyAttackRoll)}
          {isEnemyAttackVisible && renderEnemyAttack(enemyAttackRoll)}
          {isDoubleDamageVsPlayer &&
            renderDoubleDamageVsPlayer(
              enemyAttackRoll,
              doubleDamageVsPlayerAmount,
            )}
          {/* {renderPlayerWonInitiative(initiativeRoll)} */}
          {playerMissed && renderPlayerMissed(playerAttackRoll)}
          {isPlayerAttackVisible &&
            renderPlayerAttack(playerAttackRoll, playerAttackRange)}
          {IsDoubleDamageVsEnemy &&
            renderDoubleDamageVsEnemy(
              playerAttackRoll,
              doubleDamageVsEnemyAmount,
            )}
        </Container>
      );
    }
  };

  const renderBattleButtons = () => {
    return (
      <Container>
        <Row className="battleButtonsWrapper">
          <Col className="attackButtonWrapper">
            <h5 onClick={() => beginAttack()} className="battleButtonText">
              Attack
            </h5>
          </Col>
          <Col className="runButtonWrapper">
            <h5 onClick={() => handleRunButton()} className="battleButtonText">
              Run
            </h5>
          </Col>
        </Row>
        <Row>
          {isRunVisible && renderRun()}
          {isPlayerDeadCheck()}

          {enemyHitpoints && isEnemyDeadCheck()}

          {isPlayerWonInitiativeVisible && renderBattleIfPlayerWonInitiative()}
          {isEnemyWonInitiativeVisible && renderBattleIfEnemyWonInitiative()}
        </Row>
      </Container>
    );
  };

  return (
    <Container>
      {battleButtonsVisible && renderBattleButtons()}
    </Container>
  );
};

export default Battle;
