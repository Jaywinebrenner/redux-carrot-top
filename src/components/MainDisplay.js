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
} from "../actions";

const MainDisplay = () => {

  const dispatch = useDispatch();

  const [localDisplayOne, setLocalDisplayOne] = useState("");

  const mainDisplayOne = useSelector((state) => state.mainDisplayOne);
  const mainDisplayTwo = useSelector(
    (state) => state.changeMainDisplayTwo,
  );

    console.log(mainDisplayTwo);


  return (
    <React.Fragment>
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
      </Container>
    </React.Fragment>
  );
};

export default MainDisplay;
