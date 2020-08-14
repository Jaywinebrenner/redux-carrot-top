import React, { useState, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
// import { RUN } from "../../constants/Story";
import Typewriter from "typewriter-effect";
import Game from "./Game";
import { useSelector, useDispatch } from "react-redux";
import playerDefence from "../reducers/playerDefence";
import {
  decrementPlayerHp,
  incrementPlayerHp,
  changeArmor,
} from "../actions";


let initiativeRoll = null;
let playerAttackRoll = null;
let enemyAttackRoll = null;
let doubleDamageVsEnemyAmount = null;
let doubleDamageVsPlayerAmount = null;
let playerAttackRange = null;
let enemyAttackRange = null;

const Battle = (enemy) => {

  console.log("IS EMO HEREEEEERRRE", enemy);

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

  const [enemyHitpoints, setEnemyHitpoints] = useState();
  const playerHitpoints = useSelector((state) => state.playerHitpoints);
  const playerDamage = useSelector((state) => state.playerDamage);

  useEffect(() => {
    const loadEmo = () => {
      setEnemyHitpoints(enemy.hitPoints);
    };

    loadEmo();
  }, []);

  //RENDER TO DOM
  const renderPlayerWonInitiative = (initiativeRoll) => {
    console.log("INITAITVE ROLLLLLL", initiativeRoll);
    return (
      <React.Fragment>
        {/* <Typewriter
          className="initiativeRoll"
          onInit={(typewriter) => {
            typewriter.changeDelay(80).typeString("INITIATIVE ROLL - ").start();
          }}
        />
        <Typewriter
          className="initiativeText"
          onInit={(typewriter) => {
            typewriter
              .changeDelay(80)
              .typeString(
                "You have won intiiative and attack the foul creature",
              )
              .start();
          }}
        /> */}
        <h5 className="initiativeRoll">INITIATIVE ROLL - {initiativeRoll}</h5>
        <h5 className="initiativeText">
          You have won intiiative and attack the foul creature
        </h5>
      </React.Fragment>
    );
  };

  const renderEnemyWonInitiative = (initiativeRoll) => {
    return (
      <React.Fragment>
        <h5 className="initiativeRoll">INITIATIVE ROLL - {initiativeRoll}</h5>
        <h5 className="initiativeText">
          Your foe has won initiative and attacks!
        </h5>
      </React.Fragment>
    );
  };

  const renderPlayerAttack = (playerAttackRoll, playerAttackRange) => {
    return (
      <React.Fragment>
        <h5 className="attackRoll"> You have rolled a {playerAttackRoll}</h5>
        <h5 className="attackText">
          You have thrashed your foe for {playerAttackRange} damage!
        </h5>
      </React.Fragment>
    );
  };

  const renderEnemyAttack = (enemyAttackRoll) => {
    return (
      <React.Fragment>
        <h5 className="attackRoll">Your foe has rolled a {enemyAttackRoll}</h5>
        <h5 className="attackText">
          A virulent blow across your face sprays a fine mist of blood into the
          air for {enemyAttackRange} damage.
        </h5>
      </React.Fragment>
    );
  };

  const renderEnemyMissed = (enemyAttackRoll) => {
    return (
      <React.Fragment>
        <h5 className="attackRoll">Your foe has rolled a {enemyAttackRoll}</h5>
        <h5 className="attackText">
          Your foe stumbles and clumsily misses you!
        </h5>
      </React.Fragment>
    );
  };
  const renderPlayerMissed = (playerAttackRoll) => {
    return (
      <React.Fragment>
        <h5 className="attackRoll">You have rolled {playerAttackRoll}</h5>
        <h5 className="attackText">You swing wildly and miss!</h5>
      </React.Fragment>
    );
  };

  const renderDoubleDamageVsPlayer = (
    enemyAttackRoll,
    doubleDamageVsPlayerAmount,
  ) => {
    console.log("DOULBE DAMAGE vs PLAYER", doubleDamageVsPlayerAmount);

    return (
      <React.Fragment>
        <h5 className="attackRoll">Your foe has rolled a {enemyAttackRoll}</h5>
        <h5 className="attackText">
          YOUR FOE ROLLED A 20 AND RIPS A WET GAPING WOUND IN YOUR CHEST FOR
          DOUBLE DAMAGE! Blood paints the wall in a Pollock-esque splatter as
          you suffer {doubleDamageVsPlayerAmount} damage.
        </h5>
      </React.Fragment>
    );
  };

  const renderDoubleDamageVsEnemy = (
    playerAttackRoll,
    doubleDamageVsEnemyAmount,
  ) => {
    console.log("DOULBE DAMAGE vs ENEMY", doubleDamageVsEnemyAmount);

    return (
      <React.Fragment>
        <h5 className="attackRoll">You have rolled a {playerAttackRoll}</h5>
        <h5 className="attackText">
          You unleash a victorious howl as you thrash your foe for DOULBLE
          DAMAGE, suffering a loss of {doubleDamageVsEnemyAmount} hit points.
        </h5>
      </React.Fragment>
    );
  };

  console.log("Emo Philips has this many Hit Points", enemyHitpoints);
  console.log("You have this many Hit Points", playerHitpoints);
  console.log("isPlayerWonInitiativeVisible", isPlayerWonInitiativeVisible);
  console.log("__________________________________________________");
  // console.log("game play music", isGameMusicPlaying);

  // INITIATIVE

  const beginAttack = () => {
    // turnOnBattleMusic();
    // turnOffGamePlayMusic();
    initiativeRoll = Math.floor(Math.random() * 20) + 1;

    playerAttackRange = Math.floor(Math.random() * enemy.damage) + 1;
    enemyAttackRange = Math.floor(Math.random() * enemy.damage) + 1;
    setPlayerMissed(false);
    setEnemyMissed(false);
    setIsPlayerWonInitiativeVisible(false);
    setIsEnemyWonInitiativeVisible(false);
    if (initiativeRoll >= 5) {
      console.log("INITIATIVE ROLL= ", initiativeRoll);
      console.log("You have won intiiative and attack the foul createure");
      playerAttack();
      enemyAttack();
      setIsPlayerWonInitiativeVisible(true);
      return (
        <div>
          <h5>The initiative roll is {initiativeRoll}</h5>
          <h5>You have won intiiative and attack the foul createure</h5>
        </div>
      );
    } else {
      console.log("INITIATIVE ROLL= ", initiativeRoll);
      console.log("Your Foe has won intiiative and attacks you");
      enemyAttack();
      playerAttack();
      setIsEnemyWonInitiativeVisible(true);
    }
    return playerAttackRange;
    // return initiativeRoll, playerAttackRange;
  };

  // PLAYER ATTACK

  const playerAttack = () => {
    playerAttackRoll = Math.floor(Math.random() * 20) + 1;
    playerAttackRange = Math.floor(Math.random() * playerDefence) + 1;

    setIsDoubleDamageVsEnemy(false);
    setIsPlayerAttackVisible(false);
    setPlayerMissed(false);
    console.log("PLAYER ATTACK ROLL ________", playerAttackRoll);
    if (playerAttackRoll > 10) {
      setIsDoubleDamageVsEnemy(true);
      doubleDamageVsEnemy(playerAttackRange);
      return;
    } else if (playerAttackRoll > enemy.defence) {
      console.log("EMOS HP BEFORE ATTACK", enemyHitpoints);
      setEnemyHitpoints(enemyHitpoints - playerAttackRange);
      console.log(
        "YOU HIT YOUR FOE AND INFLICT THIS MUCH DAMAGE",
        playerAttackRange,
      );
      setIsPlayerAttackVisible(true);
    } else {
      setPlayerMissed(true);
      console.log("YOU SWING AT YOUR FOE AND MISS HORRIBLY");
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
    if (enemyAttackRoll > 10) {
      doubleDamageVsPlayer(enemyAttackRange);
      return;
    } else if (enemyAttackRoll >= playerDefence) {
             console.log(
               "your foe attacks you with a roll of",
               enemyAttackRoll,
             );
             dispatch(decrementPlayerHp((enemyAttackRange)));
             console.log("and hits you for: ", enemyAttackRange);
             // console.log("You have THIS MANY HIT POINTS LEFT", hitPoints);
             setIsEnemyAttackVisible(true);
             isPlayerDeadCheck();
           } else {
             setEnemyMissed(true);
             console.log("YOUR FOE HAS SWUNG AND MISSED YOU");
           }
    return enemyAttackRoll;
  };

  const isPlayerDeadCheck = () => {
    if (playerHitpoints <= 0) {
      return (
        <Redirect
          to={{
            pathname: "/Dead",
          }}
        />
      );
    }
  };

  const isEnemyDeadCheck = () => {
    if (enemyHitpoints < 1) {
      return (
        <Redirect
          to={{
            pathname: "/BattleVictory",
            // setCreateCharacterVisible: setCreateCharacterVisible,
          }}
        />
      );
    }
  };

  //DOUBLE DAMAGE

  const doubleDamageVsEnemy = (playerAttackRange) => {
    console.log("2222222- player attack range in", doubleDamageVsEnemyAmount);
    console.log("22222- DoubleDamageAmount in DD", doubleDamageVsEnemyAmount);
    console.log("222222PLayer ATTACK RANGE in DD", playerAttackRange);
    doubleDamageVsEnemyAmount = playerAttackRange * 2;

    // if (playerAttackRange === 1) {
    //   doubleDamageVsEnemyAmount = 2;
    // } else {
    //   doubleDamageVsEnemyAmount = playerAttackRange * 2;
    // }
    console.log(
      "YOU ROLLED A 20 AND UNLEASH A DEEP BELLOWING HOWL AS YOU TRASH YOUR FOE FOR DOUBLE DAMAGE",
    );

    setEnemyHitpoints(enemyHitpoints - doubleDamageVsEnemyAmount);
    console.log(
      "YOU HIT YOUR FOE AND INFLICT THIS MUCH DAMAGE",
      doubleDamageVsEnemyAmount,
    );
    console.log(
      "22222222- doubleDamageVsEnemyAmount",
      doubleDamageVsEnemyAmount,
    );
    return doubleDamageVsEnemyAmount;
  };

  const doubleDamageVsPlayer = (enemyAttackRange) => {
    setIsDoubleDamageVsPlayer(true);
    console.log(
      "YOUR FOE ROLLED A 20 AND SINKS HIS WEAPON DEEP INTO YOUR CHEST FOR DOUBLE DAMAGE",
    );
    if (enemyAttackRange === 1) {
      doubleDamageVsPlayerAmount = 2;
    } else {
      doubleDamageVsPlayerAmount = enemyAttackRange * 2;
    }
    dispatch(decrementPlayerHp(doubleDamageVsPlayerAmount));
    console.log(
      "YOUR FOE INFLICTS THIS MUCH DAMAGE:",
      doubleDamageVsPlayerAmount,
    );
    return doubleDamageVsPlayerAmount;
  };

  console.log("DOUBLE DAMAGE vs Player in body", doubleDamageVsPlayerAmount);
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
        <React.Fragment>
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
        </React.Fragment>
      );
    }
  };

  const renderBattleIfEnemyWonInitiative = () => {
    {
      isRunVisible && renderRun();
    }
    if (isEnemyWonInitiativeVisible) {
      return (
        <React.Fragment>
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
        </React.Fragment>
      );
    }
  };

  const renderBattleButtons = () => {
    return (
      <div>
        <div className="battleButtonsWrapper">
          <div className="attackButtonWrapper">
            <h5 onClick={() => beginAttack()} className="buttonText">
              Attack
            </h5>
          </div>
          <div className="runButtonWrapper">
            <h5 onClick={() => handleRunButton()} className="buttonText">
              Run
            </h5>
          </div>

          <div>
            {isRunVisible && renderRun()}
            {isPlayerDeadCheck()}

            {enemyHitpoints && isEnemyDeadCheck()}

            {isPlayerWonInitiativeVisible &&
              renderBattleIfPlayerWonInitiative()}
            {isEnemyWonInitiativeVisible && renderBattleIfEnemyWonInitiative()}
          </div>
        </div>
      </div>
    );
  };

  return (
    <React.Fragment>
      {battleButtonsVisible && renderBattleButtons()}
    </React.Fragment>
  );
};

export default Battle;
