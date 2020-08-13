import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, changeArmor } from "../actions";

const MainDisplay = () => {

  const dispatch = useDispatch();
  const [localArmor, setLocalArmor] = useState("")
console.log(localArmor);

  return (
    <React.Fragment>
      <h5>You have encountered a Foe</h5>
      <h6 onClick={() => dispatch(decrement(5))}>Hurt Player</h6>

      <input
        ref={(input) => input && input.focus()}
        className="submitNameInput"
        // onChange={(event) => dispatch(changeArmor(event.target.value))}
        onChange={(event) => setLocalArmor(event.target.value)}
        value={localArmor}
        placeholder="Change Armor"
      />
      <h6 onClick={() => dispatch(changeArmor(localArmor))}>Change Armor</h6>
    </React.Fragment>
  );
};

export default MainDisplay;
