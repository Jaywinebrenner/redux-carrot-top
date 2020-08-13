import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useSelector, useDispatch } from "react-redux";
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
} from "../actions";


const MainDisplay = () => {

  const dispatch = useDispatch();

  const [localName, setLocalName] = useState("");
  const [localDisplayOne, setLocalDisplayOne] = useState("");
  const [localCharacter, setLocalCharacter] = useState();


  //STATE
  const mainDisplayOne = useSelector((state) => state.mainDisplayOne);
  const mainDisplayTwo = useSelector(
    (state) => state.changeMainDisplayTwo,
  );
   const createCharacter = useSelector((state) => state.createCharacter);

  console.log(mainDisplayOne);
  console.log(createCharacter);


  return (
    <React.Fragment>
      <input
        // ref={(input) => input && input.focus()}
        className="submitNameInput"
        onChange={(event) => setLocalName(event.target.value)}
        value={localName}
        placeholder="Change Name"
      />
      <h6 onClick={() => dispatch(changeName(localName))}>Change Name</h6>

      <input
        className="submitNameInput"
        onChange={(event) => setLocalDisplayOne(event.target.value)}
        value={localDisplayOne}
        placeholder="Change Display"
      />

      <h6 onClick={() => dispatch(changeMainDisplayOne(localDisplayOne))}>
        Add Stuff to display
      </h6>
      <Container>
        <p>{mainDisplayOne}</p>
        <p>{mainDisplayTwo}</p>
        <p onClick={() => dispatch(toggleCreateCharacter())}>CHAGE CHAR STATE</p>

      </Container>
    </React.Fragment>
  );
};

export default MainDisplay;
