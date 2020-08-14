import React, { useState, useEffect } from "react";
import emo from "../media/emo.png";
import gamePlay from "../media/gameplay.mp3";
import ReactHowler from "react-howler";
import { useSelector, useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import {
  increment,
  decrement,
  changeName,
  decrementPlayerHp,
  incrementPlayerHp,
  changeArmor,
  changeMainDisplayOne,
  changeMainDisplayTwo,
  toggleCreateCharacter,
  toggleChapterOne,
  toggleChapterTwo,
} from "../actions";

const CreateCharacter = () => {

  const dispatch = useDispatch();

  //STATE
  const mainDisplayOne = useSelector((state) => state.mainDisplayOne);
  const mainDisplayTwo = useSelector((state) => state.mainDisplayTwo);

  const [localName, setLocalName] = useState(" ");
  const [isOneVisible, setIsOneVisible] = useState(true);


  const renderOne = () => {
    {dispatch(changeMainDisplayOne("What is thy name, Comedian Slayer?"))}
  }
  {isOneVisible && renderOne()}

  const renderNameInput = () => {
    return (
      <Container>
        <input
          ref={(input) => input && input.focus()}
          className="submitNameInput"
          onChange={(event) => setLocalName(event.target.value)}
          value={localName}
        />
        <h6 className="buttonText" onClick={() => submitOne()}>
          SUBMIT
        </h6>
      </Container>
    );
  }
  



  const submitOne = () => {
    if (!localName || localName === ' ') {
      dispatch(changeMainDisplayTwo("YOU MUST ENTER THY, COMEDIAN SLAYER!"));
    } else {
    dispatch(changeName(localName));
    setIsOneVisible(false);
    dispatch(changeMainDisplayOne(" "));
    dispatch(changeMainDisplayTwo(" "));
    }
  };



  return (
    <React.Fragment>
      <h4>{mainDisplayOne}</h4>
      <h4>{isOneVisible && renderNameInput()}</h4>
      <h4>{mainDisplayTwo}</h4>
    </React.Fragment>
  );
}

export default CreateCharacter