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
import chapterThree from './chapterThree';
import chapterFour from './chapterFour';
import chapterFive from "./chapterFive";
import chapterSix from "./chapterSix";
import chapterSeven from "./chapterSeven";
import chapterEight from "./chapterEight";
import chapterNine from './chapterNine';
import chapterTen from './chapterTen';
import chapterEleven from "./chapterEleven";
import chapterTwelve from './chapterTwelve';
import chapterThirteen from './chapterThirteen';
import chapterFourteen from './chapterFourteen';

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
  mainDisplayButtons: mainDisplayButtons,
  enemyHitpoints: enemyHitpoints,
  enemyDisplayVisible: enemyDisplayVisible,
  battleVisible: battleVisible,
  createCharacter: createCharacter,
  chapterOne: chapterOne,
  chapterTwo: chapterTwo,
  chapterThree: chapterThree,
  chapterFour: chapterFour,
  chapterFive: chapterFive,
  chapterSix: chapterSix,
  chapterSeven: chapterSeven,
  chapterEight: chapterEight,
  chapterNine: chapterNine,
  chapterTen: chapterTen,
  chapterEleven: chapterEleven,
  chapterTwelve: chapterTwelve,
  chapterThirteen: chapterThirteen,
  chapterFourteen: chapterFourteen,
});

export default allReducers