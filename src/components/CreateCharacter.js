import React, { useState, useEffect } from "react";

import gamePlay from "../media/gameplay.mp3";
import ReactHowler from "react-howler";
import { useSelector, useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { WEAPONS } from "../constants/Weapons";

import {
  incrementPlayerHp,
  changeName,
  changeWeapon,
  changeDamage,
  changeArmor,
  changeMainDisplayOne,
  changeMainDisplayTwo,
  toggleCreateCharacter,
  toggleChapterOne,
  toggleChapterTwo,
  changeDefence,
  incrementPlayerDamage,
} from "../actions";

const CreateCharacter = () => {
  const dispatch = useDispatch();
  

  //STATE
  const mainDisplayOne = useSelector((state) => state.mainDisplayOne);
  const mainDisplayTwo = useSelector((state) => state.mainDisplayTwo);
  const name = useSelector((state) => state.name);

  const weapon = useSelector((state) => state.weapon);
  const armor = useSelector((state) => state.armor);
  const playerDefence = useSelector((state) => state.playerDefence);


  const [localName, setLocalName] = useState(" ");
  const [isOneVisible, setIsOneVisible] = useState(true);

  // ONE
  const renderOne = () => {
    {
      dispatch(changeMainDisplayOne("What is thy name, Comedian Slayer?"));
    }
  };

  {
    isOneVisible && renderOne();
  }

  const renderNameInput = () => {
    return (
      <Container>
        <input
          ref={(input) => input && input.focus()}
          className="submitNameInput"
          onChange={(event) => setLocalName(event.target.value.toUpperCase())}
          value={localName}
        />
        <h6 className="buttonText" onClick={() => submitOne()}>
          SUBMIT
        </h6>
      </Container>
    );
  };

  const [healthVisible, setHealthVisible ] = useState(false)

  const submitOne = () => {
    if (!localName || localName === " ") {
      dispatch(changeMainDisplayTwo("YOU MUST ENTER THY, COMEDIAN SLAYER!"));
    } else {
      dispatch(changeName(localName));
      setIsOneVisible(false);
      setHealthVisible(true);
      dispatch(changeMainDisplayOne(" "));
      dispatch(changeMainDisplayTwo(" "));
    }
  };
  
  
let healhRoll = Math.floor(Math.random() * 100) + 100;
// let healhRoll = Math.floor(Math.random() * 10) + 1;

  const renderSetHealth = () => {
    return (
      <React.Fragment>
        <h6>{name}. Born in hopelessness. </h6>
        <div
          onClick={() => {
            dispatch(incrementPlayerHp(healhRoll));
            setHealthVisible(false);
            setStrength(true);
          }}
        >
          <h6 className="setHealthButton">SET THY HEALTH</h6>
        </div>
      </React.Fragment>
    );
  }

  const [strength, setStrength] = useState(false)
  const strengthRoll = Math.floor(Math.random() * 20) + 1;

  const renderSetStrength = () => {
    return (
      <React.Fragment>
        <h6>{name}. Forged in desperation. </h6>
        <div
          onClick={() => determineStrength()}
        >
          <h6 className="setStrengthButton">SET THY STRENGTH</h6>
        </div>
      </React.Fragment>
    );
  }

  const determineStrength = () => {
    setHealthVisible(false);
    setIsTwoVisible(true);
    setStrength(false)
    if (strengthRoll === 20) {
      dispatch(incrementPlayerDamage(4));
      dispatch(changeWeapon("Fists"));
    } 
   if (strengthRoll <= 7 ) {
     dispatch(incrementPlayerDamage(2));
     dispatch(changeWeapon("Fists"));
   } else {
    dispatch(incrementPlayerDamage(3));
    dispatch(changeWeapon("Fists"));
   }
  //  return (
  //    <React.Fragment>
  //      <h6>{name}. Born in desperation. Forged in pain. </h6>
  //      <div onClick={() => determineStrength()}>
  //        <h6 className="setHealthButton">SET THY HEALTH</h6>
  //      </div>
  //    </React.Fragment>
  //  );

  }



  // TWO

  const [isTwoVisible, setIsTwoVisible] = useState(false);

  const handleSetButterKnife = () => {
    dispatch(changeWeapon(WEAPONS[1].name));
    dispatch(incrementPlayerDamage(WEAPONS[1].damage));
    // setDamageString(WEAPONS[1].damageString);
    setIsTwoVisible(false);
    setIsWeaponChoiceTextVisible(true);
  };
  const handleSetTrashCanLid = () => {
    dispatch(changeWeapon(WEAPONS[2].name));
    dispatch(incrementPlayerDamage(WEAPONS[2].damage));
    // setDamageString(WEAPONS[2].damageString);
    setIsTwoVisible(false);
    setIsWeaponChoiceTextVisible(true);
  }
  const handleSetTwoByFour = () => {
    dispatch(changeWeapon(WEAPONS[3].name));
    dispatch(incrementPlayerDamage(WEAPONS[3].damage));
  //   setDamageString(WEAPONS[3].damageString);
    setIsTwoVisible(false);
    setIsWeaponChoiceTextVisible(true);
  }
  const handleTakeNothing = () => {
    dispatch(changeWeapon(WEAPONS[0].name));
    dispatch(incrementPlayerDamage(WEAPONS[0].damage));
    // setDamageString(WEAPONS[0].damageString);
    setIsTwoVisible(false);
    setIsWeaponChoiceTextVisible(true);
  };

  const renderTwo = () => {
    return (
      <Container>
        <h6>
          {/* {dispatch(changeMainDisplayOne("Before you empark on your perilous journey, you must pick one of three weaons at your disposal."))} */}
          Before you empark on your perilous journey, you must pick one of three
          weaons at your disposal.
        </h6>

        <Row>
          <Col className="answerGridOne" id="butterKnifeSelection">
            <h5 className="choice-btn" onClick={()=> handleSetButterKnife()}>A butter knife</h5>
          </Col>

         <Col className="answerGridTwo">
            <h5 className="choice-btn" onClick={()=> handleSetTrashCanLid()}>A trash can lid</h5>
          </Col>

          <Col className="answerGridThree">
            <h5 className="choice-btn" onClick={()=>handleSetTwoByFour()}>A broken 2x4</h5>
          </Col>

          <Col className="answerGridFour">
            <h5 className="choice-btn" onClick={()=>handleTakeNothing()}>Take nothing</h5>
          </Col>  
        </Row>
      </Container>
    );
  };

  // 3 - AFTER SETTING WEAPON
  const [
    isWeaponChoiceTextVisible,
    setIsWeaponChoiceTextVisible,
  ] = useState(false);

    const renderPostWeaponChoiceText = () => {
      if (weapon === "Fists") {
        return (
          <div>
            <h6>{WEAPONS[0].weaponPickUp}</h6>
            <div
              onClick={() => {
                setIsWeaponChoiceTextVisible(false);
                setIsSetArmorVisible(true);
              }}
            >
              <h6 className="buttonText">CONTINUE</h6>
            </div>
          </div>
        );
      }
      if (weapon === "Butter Knife") {
        return (
          <div>
            <h6>{WEAPONS[1].weaponPickUp}</h6>
            <div
              onClick={() => {
                setIsWeaponChoiceTextVisible(false);
                setIsSetArmorVisible(true);
              }}
            >
              <h6 className="buttonText">CONTINUE</h6>
            </div>
          </div>
        );
      }
      if (weapon === "Trash Can Lid") {
        return (
          <div>
            <h6>{WEAPONS[2].weaponPickUp}</h6>
            <div
              onClick={() => {
                setIsWeaponChoiceTextVisible(false);
                setIsSetArmorVisible(true);
              }}
            >
              <h6 className="buttonText">CONTINUE</h6>
            </div>
          </div>
        );
      }
      if (weapon === "Broken 2x4") {
        return (
          <div>
            <h6>{WEAPONS[3].weaponPickUp}</h6>
            <div
              onClick={() => {
                setIsWeaponChoiceTextVisible(false);
                setIsSetArmorVisible(true);
              }}
            >
              <h6 className="buttonText">CONTINUE</h6>
            </div>
          </div>
        );
      }
    };

    // 4 ARMOR   
    const [isSetArmorVisible, setIsSetArmorVisible] = useState(false);

    const renderSetArmor = () => {
      return (
        <Container>
          <h6>
            You deem it wise to scrounge up some assemblance of defence, though
            minimal it may be.
          </h6>

          <Row className="answerGridWrapper">
            <Col className="answerGridOne" id="butterKnifeSelection">
              <h5 className="choice-btn"  onClick={handleSetHelmet}>Garden Pail Bucket Helmet</h5>
            </Col>

            <Col className="answerGridTwo">
              <h5 className="choice-btn"  onClick={handleSetChestPlate}>Bubble Wrap Chest Plate</h5>
            </Col>

            <Col className="answerGridThree">
              <h5 className="choice-btn"  onClick={handleSetGloves}>Garbage Bag Gloves</h5>
            </Col>

            <Col className="answerGridFour">
              <h5 className="choice-btn" onClick={handleWearNothing}>You wear nothing</h5>
            </Col>
          </Row>
        </Container>
      );
    };

    const renderArmorChoice = () => {
      // Render Armor Choice

      if (armor === "Garden Pail Bucket Helmet") {
        return (
          <Container>
            <h6>
              You slowly place the pail on your head- it's eye sockets aligning
              perfectly with the symetry of your forlorn, weathered face.
            </h6>
            <Row
              onClick={() => {
                dispatch(toggleCreateCharacter(false));
                dispatch(toggleChapterOne(true));
              }}
            >
              <h6 className="beginThyAdventureButtonText">
                BEGIN THY ADVENTURE
              </h6>
            </Row>
          </Container>
        );
      }
      if (armor === "Bubble Wrap Chest Plate") {
        return (
          <Container>
            <h6>
              You stretch several shredded rolls of bubble wrap around your
              torso. You squeeze a solitary bubble pocket and imagine it's
              resulting snap being that of Carrot Top himself's neck.{" "}
            </h6>
            <Row
              onClick={() => {
                dispatch(toggleCreateCharacter(false));
                dispatch(toggleChapterOne(true));
              }}
            >
              <h6 className="beginThyAdventureButtonText">
                BEGIN THY ADVENTURE
              </h6>
            </Row>
          </Container>
        );
      }
      if (armor === "Garbage Bag Gloves") {
        return (
          <Container>
            <h6>
              You weave the filth strewn plastic around each and every digit.
              You raise your newly gloved hand up to the moonlight and slowly
              clench your fist with forlorn purpose.
            </h6>
            <Row
              onClick={() => {
                dispatch(toggleCreateCharacter(false));
                dispatch(toggleChapterOne(true));
              }}
            >
              <h6 className="beginThyAdventureButtonText">
                BEGIN THY ADVENTURE
              </h6>
            </Row>
          </Container>
        );
      }
      if (armor === "Naked") {
        return (
          <Container>
            <h6>
              You look down upon your gaunt, filth strewn body. "I need not such
              distractions as clothes to end this vile scrourge," you mutter
              under your breath with forlorn purpose.
            </h6>
            <Row
              onClick={() => {
               dispatch(
                 toggleCreateCharacter(false),
               );
                dispatch(toggleChapterOne(true));
              }}
            >
              <h6 className="beginThyAdventureButtonText">
                BEGIN THY ADVENTURE
              </h6>
            </Row>
          </Container>
        );
      }
    };

    const [isArmorChoiceVisible, setIsArmorChoiceVisible] = useState(
      false,
    );

    const handleSetHelmet = () => {
      // setArmor("Garden Pail Bucket Helmet");
      // setDefence(8);
      setIsSetArmorVisible(false);
      setIsArmorChoiceVisible(true);
      dispatch(changeDefence(8));
      dispatch(changeArmor("Garden Pail Bucket Helmet"));
    };
    const handleSetChestPlate = () => {
      // setArmor("Bubble Wrap Chest Plate");
      // setDefence(9);
      setIsSetArmorVisible(false);
      setIsArmorChoiceVisible(true);
      dispatch(changeDefence(9));
      dispatch(changeArmor("Bubble Wrap Chest Plate"));
    };
    const handleSetGloves = () => {
      // setArmor("Garbage Bag Gloves");
      // setDefence(6);
      setIsSetArmorVisible(false);
      setIsArmorChoiceVisible(true);
      dispatch(changeDefence(6));
      dispatch(changeArmor("Garbage Bag Gloves"));
    };
    const handleWearNothing = () => {
      // setArmor("Naked");
      // setDefence(5);
      setIsSetArmorVisible(false);
      setIsArmorChoiceVisible(true);
      dispatch(changeDefence(5));
      dispatch(changeArmor("Naked"));
    };


  return (
    <React.Fragment>
      <h6>{mainDisplayOne}</h6>
      <h6>{isOneVisible && renderNameInput()}</h6>
      {isTwoVisible && renderTwo()}
      {healthVisible && renderSetHealth()}
      {isWeaponChoiceTextVisible && renderPostWeaponChoiceText()}
      {isSetArmorVisible && renderSetArmor()}
      {isArmorChoiceVisible && renderArmorChoice()}
      {strength && renderSetStrength()}
      <h6>{mainDisplayTwo}</h6>
    </React.Fragment>
  );
};

export default CreateCharacter