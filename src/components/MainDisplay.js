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
  changeMainDisplay,
} from "../actions";

const MainDisplay = () => {

  const dispatch = useDispatch();

  const [localDisplay, setLocalDisplay] = useState("");


    const mainDisplay = useSelector((state) => state.mainDisplay);

    console.log(mainDisplay);


  return (
    <React.Fragment>
      <input
        className="submitNameInput"
        onChange={(event) => setLocalDisplay(event.target.value)}
        value={localDisplay}
        placeholder="Change Display"
      />
      <h6 onClick={() => dispatch(changeMainDisplay(localDisplay))}>
        Add Stuff to display
      </h6>
      <Container>
        <h3>{mainDisplay}</h3>
      </Container>
    </React.Fragment>
  );
};

export default MainDisplay;
