import React, { useState } from "react";
import {
  carrotTop,
} from "../constants/Monsters";
import { AREATHREE } from "../constants/Story";
import { useSelector, useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Battle from "./Battle";
import {
  decrementPlayerHp,
  toggleEnemyDisplay,
  toggleBattleDisplay,
  setEnemyHp,
} from "../actions";

const ChapterFourteen = () => {
  const [one, setOne] = useState(true);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false);
  const [battleCarrotTop, setBattleCarrotTop] = useState(false);

  const dispatch = useDispatch();

  const renderOne = () => {
    return (
      <div>
        <h1>The Final Chapter</h1>
        <h6>Thy Lord of Laughter</h6>
        <div
          onClick={() => {
            setOne(false);
            setTwo(true);
          }}
        >
          <h6 className="buttonText">CONTINUE</h6>
        </div>
      </div>
    );
  };

  const renderTwo = () => {
    return (
      <Container>
        <h6>
          As you stand over Gallagher's carcass, a cosmic whirling pulsates in
          the air. Malevolent energies and tortured spirits twist in orgiastic
          dark ecstasy as a deep and otherworldly tone blasts a chous of
          hellatious screams. A diabolical wormhole bathed in orange light
          splits open reality itself.
        </h6>
        <h6>
          You know what you must do. As if completely outside your own body, you
          step into the wormhole.
        </h6>
        <div
          onClick={() => {
            setTwo(false);
            setThree(true);
          }}
        >
          <h6 className="buttonText">CONTINUE</h6>
        </div>
      </Container>
    );
  };

  const renderThree = () => {
    return (
      <Container>
        <h6>
          Your mind goes blank. You become nothing. Months pass. Years pass. Lifetimes pass.
        </h6>
        <h6>
          And then you feel it. Just like that. You you are here. He is here.
          
        </h6>
        <div
          onClick={() => {
            setThree(false);
            setFour(true);
            dispatch(decrementPlayerHp(flexWoundOne));
          }}
        >
          <h6 className="buttonText">CONTINUE</h6>
        </div>
      </Container>
    );
  };


  const flexWoundOne = Math.floor(Math.random() * 10) + 1;

  const renderFour = () => {
    return (
      <Container>
        <h6>
          A voice containing the screams of one million howling demons bellows
          from the ether. "How dare you enter the Domain of Thy Lord of
          Laughter." You open your eyes and see Carrot Top himself, suspended in
          some extra-dimensional endlessness, wrapped in muscle, smeared in oil.
          "I am insulted by your prescence. Eternal suffering can not amend
          this error."
        </h6>
        <h6>
          The Lord of Laughter flexes a pectoral muscle. You feel an explosive
          pain in your side.{" "}
        </h6>
        <h6>You suffer {flexWoundOne} hit points. </h6>
        <div
          onClick={() => {
            setFour(false);
            setFive(true);
            dispatch(decrementPlayerHp(flexWoundTwo));
          }}
        >
          <h6 className="buttonText">CONTINUE</h6>
        </div>
      </Container>
    );
  };

  const flexWoundTwo = Math.floor(Math.random() * 12) + 1;
  const flexWoundThree = Math.floor(Math.random() * 10) + 1;
  const flexWoundFour= Math.floor(Math.random() * 10) + 1;
  const flexWoundFive = Math.floor(Math.random() * 10) + 1;

  const renderFive = () => {
    return (
      <Container>
        <h6>
          "NOW!" he bellows while flexing his other pectoral muscle. Your side
          explodes in pain for {flexWoundTwo} damage.
        </h6>
        <h6>
          "I WILL!" He raises an eyebrow. Your head explodes in pain for
          {flexWoundThree} damage.
        </h6>
        <h6>
          "EAT YOUR!" He raises the other eyebrow. Your head explodes in pain
          for {flexWoundFour} damage.
        </h6>
        <h6>
          "SOUL!" He flexes both biceps and your bones collapse for
          {flexWoundFive} damage.
        </h6>
        <div
          onClick={() => beginBattle()}
        >
          <h6 className="buttonText">CONTINUE</h6>
        </div>
      </Container>
    );
  };



  const beginBattle = () => {
    setBattleCarrotTop(true);
    setFive(false);
    dispatch(setEnemyHp(carrotTop.hitPoints));
    dispatch(toggleEnemyDisplay(true));
    dispatch(toggleBattleDisplay(true));
  };

  return (
    <div>
      {one && renderOne()}
      {two && renderTwo()}
      {three && renderThree()}
      {four && renderFour()}
      {five && renderFive()}
      {battleCarrotTop && <Battle enemy={carrotTop} />}
    </div>
  );
};

export default ChapterFourteen;
