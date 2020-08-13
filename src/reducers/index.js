import counterReducer from './counter';
import { combineReducers} from 'redux';
import  loggedReducer from "./isLogged";
import playerHitpoints from './playerHitpoints';
import armor from './armor'

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  playerHitpoints: playerHitpoints,
  armor: armor,
});

export default allReducers