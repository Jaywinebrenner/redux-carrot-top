import React from "react";
import { useSelector, useDispatch } from "react-redux";


const Stats = () => {

  const playerHitpoints = useSelector((state) => state.playerHitpoints);
  
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <h5>The Comedian Slayer</h5>
      <p>Name:</p>

      <p>Hit Points: {playerHitpoints}</p>

      <p>Armor:</p>

      <p>Defence:</p>

      <p>Weapon:</p>

      <p>Damage:</p>
    </React.Fragment>
  );
}

export default Stats