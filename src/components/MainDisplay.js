import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, changeName, decrementPlayerHp, incrementPlayerHp, changeArmor } from "../actions";

const MainDisplay = () => {

  const dispatch = useDispatch();
  const [localName, setLocalName] = useState("")
  const [localArmor, setLocalArmor] = useState("");


  return (
    <React.Fragment>

      <h6 onClick={() => dispatch(decrementPlayerHp(5))}>Hurt Player</h6>
      <h6 onClick={() => dispatch(incrementPlayerHp(5))}>Heal Player</h6>

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
        onChange={(event) => setLocalArmor(event.target.value)}
        value={localArmor}
        placeholder="Change Armor"
      />
      <h6 onClick={() => dispatch(changeArmor(localArmor))}>Change Armor</h6>
    </React.Fragment>
  );
};

export default MainDisplay;
