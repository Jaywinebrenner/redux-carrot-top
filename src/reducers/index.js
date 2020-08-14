import counterReducer from './counter';
import { combineReducers} from 'redux';
import  loggedReducer from "./isLogged";
import playerHitpoints from './playerHitpoints';
import armor from './armor'
import name from "./name";
import weapon from "./weapon";
import playerDefence from "./playerDefence";
import playerDamage from "./playerDamage";
import mainDisplayOne from "./mainDisplayOne";
import mainDisplayTwo from "./mainDisplayTwo";
import mainDisplayButtons from "./mainDisplayButtons";
import createCharacter from "./createCharacter";
import chapterOne from "./chapterOne";
import chapterTwo from "./chapterTwo";
import enemyHitpoints from './enemyHitpoints';
import enemyDisplayVisible from "./enemyDisplayVisible";
import battleVisible from "./battleVisible";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  playerHitpoints: playerHitpoints,
  armor: armor,
  playerDefence: playerDefence,
  name: name,
  playerDamage: playerDamage,
  weapon: weapon,
  mainDisplayOne: mainDisplayOne,
  mainDisplayTwo: mainDisplayTwo,
  createCharacter: createCharacter,
  chapterOne: chapterOne,
  chapterTwo: chapterTwo,
  mainDisplayButtons: mainDisplayButtons,
  enemyHitpoints: enemyHitpoints,
  enemyDisplayVisible: enemyDisplayVisible,
  battleVisible: battleVisible,
});

export default allReducers