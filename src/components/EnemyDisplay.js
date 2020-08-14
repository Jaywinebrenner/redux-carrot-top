import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useSelector, useDispatch } from "react-redux";


const EnemyDisplay = () => {
 const enemyHitpoints = useSelector((state) => state.enemyHitpoints)

  return (
    <React.Fragment>
      <h5>You have encountered a Foe</h5>
      <h6>{enemyHitpoints}</h6>
    </React.Fragment>
  );
};

export default EnemyDisplay;
