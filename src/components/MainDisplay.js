import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../actions";

const MainDisplay = () => {

    const dispatch = useDispatch();
  return (
    <React.Fragment>
      <h5>You have encountered a Foe</h5>
      <h1 onClick={() => dispatch(decrement(5))}>Hurt Player</h1>
    </React.Fragment>
  );
};

export default MainDisplay;
