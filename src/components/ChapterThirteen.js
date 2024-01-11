import React, { useState } from "react";
import {
  gallagher
} from "../constants/Monsters";
import { useSelector, useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Battle from "./Battle";
import {
  incrementPlayerHp,
  incrementPlayerDefence,
  toggleEnemyDisplay,
  toggleBattleDisplay,
  setEnemyHp,
} from "../actions";

const ChapterThirteen = () => {
  const [one, setOne] = useState(true);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false);
  const [six, setSix] = useState(false);
  const [seven, setSeven] = useState(false);
  const [eight, setEight] = useState(false);
  const [nine, setNine] = useState(false);
  const [battleGallagher, setBattleGallagher] = useState(false);

  const dispatch = useDispatch();

  const armor = useSelector((state) => state.armor);
  const name = useSelector((state) => state.name);

  // console.log("one", one);
  //  console.log("two", two);
  //   console.log("three", three);
  //   console.log("four", four);

  const renderOne = () => {
    return (
      <div>
        <h1>Chapter Nine</h1>
        <h6>The Reprieve and Thy Archfiend of Magnanimous Wreckage</h6>
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
          You move forward into a colossal archway revealing an endless lake
          of blood as far as the eye can see. Nothing will surprise you with
          what lies inside this repugnant tower's walls.
        </h6>
        <h6>
          A small skiff with a cloaked figure is seen paddling your way using
          languid strokes of a long pole. The figure docks and slowly removes
          his hood revealing a skeleton head. "I am here to help you, " says a
          familiar voice.
        </h6>

        <h6>
          "This new world is no world at all. The laughs are not real laughs. The
          pain is real pain. The suffering is real suffering. And this new world
          must come to an end. And you {name} are one chosen to do so." There is a genuine
          kindess in his voice.
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
          "You have but two more obstacles before freeing humanity of this vile
          scourge - Gallagher, Thy Archfiend of Magnanimous Wreckage and The Supreme
          Lord of Laughter himself... Carrot Top. If you eliminate these two
          foul Comedic Overlords, you will have freed humanity."
        </h6>
        <h6>"I offer you gifts to aid you in your quest."</h6>
        <h6>"For your health... please choose one."</h6>
        <Row>
          <Col>
            <h6 className="choice-btn" onClick={() => eatFood()}>
              Mediteranean Couscous Salad with a Hummus charcuterie plate and
              lemon mint tea.
            </h6>
          </Col>
          <Col>
            <h6 className="choice-btn" onClick={() => eatFood()}>
              Lamb Shank braised in an heirloom tomato and Barolo wine reduction
              with a side of sauteed snow pea tips.
            </h6>
          </Col>
          <Col>
            <h6 className="choice-btn" onClick={() => eatFood()}>
              Garlic butter baked Salmon with grilled asparagus and fingerling
              potatos.
            </h6>
          </Col>
          <Col>
            <h6 className="choice-btn" onClick={() => noFood()}>Do not accept the a gift.</h6>
          </Col>
        </Row>
      </Container>
    );
  };

let fiftyToOneHundred =  Math.floor(Math.random() * 50) + 51;

const eatFood = () => {
  setThree(false)
  setFour(true)
  dispatch(incrementPlayerHp(fiftyToOneHundred));
}


const noFood = () => {
  setThree(false);
  setNoFoodVisible(true)
}

const [noFoodVisible, setNoFoodVisible] = useState(false)

const renderNoFood = () => {
  return (
    <Container>
      <h6>You deem it wise not to indulge in such decadent sustenance. </h6>
      <div
        onClick={() => {
          setNoFoodVisible(false);
          setFive(true);
        }}
      >
        <h6 className="buttonText">CONTINUE</h6>
      </div>
    </Container>
  );
}

const renderFour = () => {
  return (
    <Container>
      <h6>
        You graciously accept the food and eat it hungrily. It warms your
        belly. You feel invigorating strength.
      </h6>
      <h6>You receive {fiftyToOneHundred} hit points. </h6>
      <div
        onClick={() => {
          setFour(false);
          setFive(true);
        }}
      >
        <h6 className="buttonText">CONTINUE</h6>
      </div>
    </Container>
  );
}

  const renderFive = () => {
    return (
      <Container>

        <h6>"For your defense..."</h6>
        <Row>
          <Col>
            <h6 className="choice-btn" onClick={() => wearArmor()}>
              Miami Dolphins Football Helmet
            </h6>
          </Col>
          <Col>
            <h6 className="choice-btn" onClick={() => wearArmor()}>
              Sky Blue Sheepskin Suede Jacket
            </h6>
          </Col>
          <Col>
            <h6 className="choice-btn" onClick={() => wearArmor()}>
              Lavander colored Doc Martin Combat Boots
            </h6>
          </Col>
          <Col>
            <h6 className="choice-btn" onClick={() => noArmor()}>Do not accept the a gift.</h6>
          </Col>
        </Row>
      </Container>
    );
  };


  const wearArmor = () => {
    setFive(false);
    setSix(true);
    dispatch(incrementPlayerDefence(3));
  };

  const noArmor = () => {
    setFive(false);
    setNoArmorVisible(true);
  };

  const [noArmorVisible, setNoArmorVisible] = useState(false);

  const renderNoArmor = () => {
    return (
      <Container>
        <h6>You deem it wise not to accept any armor. </h6>
        <div
          onClick={() => {
            setNoArmorVisible(false);
            setSix(true);
          }}
        >
          <h6 className="buttonText">CONTINUE</h6>
        </div>
      </Container>
    );
  };

  const renderSix = () => {
    return (
      <Container>
        <h6>
          You graciously accept the armor and afix it to your person. It fits well. It feels good.
        </h6>
        <h6>You receive 3 defense points. </h6>
        <div
          onClick={() => {
            setSix(false);
            setSeven(true);
          }}
        >
          <h6 className="buttonText">CONTINUE</h6>
        </div>
      </Container>
    );
  }

  const renderSeven = () => {
    return (
      <Container>
        <h6>
          "Now {name} slayer of all false Comedians, let us venture forth to
          fulfill your destiny."
        </h6>
        <h6>
          You board the skiff floating in this foul lake of blood. The hooded
          skeletal figure begins to paddle in silence.You look up into the
          eternal blackness above and contemplate what awaits you. You travel
          for days. Weeks even. Time is distorted. Time is irrelevant.
        </h6>
        <h6>
          In finality, the skeletal hooded figure says, "We are here. Shit
          island. Domain of Thy Archfiend of Magnanimous Wreckage. I wish you
          luck Comedian Slayer. Fare thee well."
        </h6>
        <h6>
          And with that, you exit the skiff. You step foot on this foul landmass
          and turn your head back to the figure one last time. "Thank you George
          Carlin. Thank you for everything."
        </h6>
        <div
          onClick={() => {
            setSeven(false);
            setEight(true);
          }}
        >
          <h6 className="buttonText">CONTINUE</h6>
        </div>
      </Container>
    );
  }

  const renderEight = () => {
    return (
      <Container>
        <h6>
          You trek through the feces for several miles and you feel his
          presence. Just like that. He is inside you. He is here.
        </h6>
        <h6>
          Gallagher descends from the sky, hammer in hand. A table with
          John Tesh strapped prone to it at his side. "LADIES AND GENTLEMEN! I
          did not come here tonight to make you laugh! I came here to terminate life itself! And I want you to pay particular attention, because The
          Amazing Death Bringer Corporation, a subsidiary of Murder Your Family
          Industries, has entrusted who? -- me! -- to show you! -- the handiest
          and the dandiest assassination tool you've ever seen, and don't you
          wanna know how it works?!" 
        </h6>
        <h6>A chorus of unseen voices scream out "YES!"</h6>
        <div
          onClick={() => {
            setEight(false);
            setNine(true);
          }}
        >
          <h6 className="buttonText">CONTINUE</h6>
        </div>
      </Container>
    );
  }

  const renderNine = () => {
    return (
      <Container>
        <h6>
          "First you take a milque-toast musician! You place the head of the
          milque-toast musician in between the patented pans! Then you reach for
          the tool that is not a slicer, not a dicer, not a chopper in a hopper!
          What in the hell can it possibly be? SLEDGE-O-MATIC!"
        </h6>
        <h6>
          Gallagher unleashes a might blow upon John Tesh's head and it explodes
          into red mist.
        </h6>
        <h6>"Your turn," he winks.</h6>
        <div onClick={() => beginBattle()}>
          <h6 className="buttonText">CONTINUE</h6>
        </div>
      </Container>
    );
  }




  const beginBattle = () => {
    setBattleGallagher(true);
    setNine(false);
    dispatch(setEnemyHp(gallagher.hitPoints));
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
      {noFoodVisible && renderNoFood()}
      {noArmorVisible && renderNoArmor() }
      {six && renderSix()}
      {seven && renderSeven()}
      {eight && renderEight()}
      {nine && renderNine()}
      {battleGallagher && <Battle enemy={gallagher} />}
    </div>
  );
};

export default ChapterThirteen;
