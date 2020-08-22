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
      <h6 className="comedianText">The Comedian Slayer</h6>
      <h6 className="statText">Name:{name}</h6>

      <h6 className="statText">Hit Points: {playerHitpoints}</h6>

      <h6 className="statText">Weapon: {weapon}</h6>

      <h6 className="statText">Damage: {playerDamage} </h6>
      
      <h6 className="statText">Armor: {armor}</h6>

      <h6 className="statText">Defence: {playerDefence} </h6>

    </React.Fragment>
  );
}

export default Stats