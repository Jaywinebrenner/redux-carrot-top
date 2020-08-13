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
  const mainDisplayOne = useSelector((state) => state.mainDisplayOne);

  const [localName, setLocalName] = useState(" ");
  const [localDisplayOne, setLocalDisplayOne] = useState("");

  console.log(mainDisplayOne);





  const renderOne = () => {
    {dispatch(changeMainDisplayOne("What is thy name, Comedian Slayer?"))}

  }
  const renderNameInput = () => {
    return (
      <Container>
        <input
          ref={(input) => input && input.focus()}
          className="submitNameInput"
          onChange={(event) => setLocalName(event.target.value)}
          value={localName}
        />
        <h6 className="buttonText" onClick={() => dispatch(changeName(localName))}>SUBMIT</h6>
      </Container>
    );

  }


  return (
    <React.Fragment>
      <h1>{renderOne()}</h1>
      <h4>{renderNameInput()}</h4>
    </React.Fragment>
  );
}

export default CreateCharacter