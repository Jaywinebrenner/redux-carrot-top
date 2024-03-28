import { DEAD } from "../constants/Story";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  changeName,
  changeWeapon,
  changeDamage,
  changeArmor,
  changeDefence,
  setPlayerHp,
  toggleChapterOne,
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
  toggleEnemyDisplay,
  toggleBattleDisplay,
  toggleCreateCharacter
} from "../actions";

const Dead = () => {

  const dispatch = useDispatch();


  const [pushedTryAgain, setPushTryAgain] = useState(false);



  const renderTryAgain = () => {
      dispatch(changeName(""));
      dispatch(changeWeapon(""));
      dispatch(changeDamage(null));
      dispatch(changeArmor(""));
      dispatch(changeDefence(null));
      dispatch(setPlayerHp(""));
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
      dispatch(toggleEnemyDisplay(false));
      dispatch(toggleBattleDisplay(false));
      dispatch(toggleCreateCharacter(true))
    return (
      <Redirect
        to={{
          pathname: "/",
        }}
      />
    );
  }

  return (
    <React.Fragment>
      <div className="landingWrapper">
        <h2 className="deadText">
          {DEAD[Math.floor(Math.random() * DEAD.length)]}
        </h2>
        <h1 className="areDeadText">ARE DEAD!</h1>
        <h1
          className="buttonText"
          onClick={() => setPushTryAgain(true)}
        >
          Try Again
        </h1>
        {pushedTryAgain && renderTryAgain()}
        {/* {pushedTryAgain && (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        )} */}
      </div>
    </React.Fragment>
  );
};

export default Dead;
