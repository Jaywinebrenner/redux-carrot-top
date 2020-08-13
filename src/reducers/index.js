import counterReducer from './counter';
import { combineReducers} from 'redux';
import  loggedReducer from "./isLogged";
import playerHitpoints from './playerHitpoints';
import armor from './armor'
import name from "./name";
import weapon from "./weapon";
import playerDefence from "./playerDefence";
import playerDamage from "./playerDamage";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  playerHitpoints: playerHitpoints,
  armor: armor,
  playerDefence: playerDefence,
  name: name,
  playerDamage: playerDamage,
  weapon: weapon
});

export default allReducers