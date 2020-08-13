import React from "react";
import { useSelector, useDispatch } from "react-redux";


const Stats = () => {

  const playerHitpoints = useSelector((state) => state.playerHitpoints);
  const armor = useSelector((state) => state.armor);
  const name = useSelector((state) => state.name);
    const weapon = useSelector((state) => state.weapon);
  const playerDefence = useSelector((state) => state.playerDefence);
  const playerDamage = useSelector((state) => state.playerDamage);

  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <h5>The Comedian Slayer</h5>
      <p>Name:{name}</p>

      <p>Hit Points: {playerHitpoints}</p>

      <p>Armor: {armor}</p>

      <p>Defence: {playerDefence} </p>

      <p>Weapon: {weapon}</p>

      <p>Damage: {playerDamage} </p>
    </React.Fragment>
  );
}

export default Stats