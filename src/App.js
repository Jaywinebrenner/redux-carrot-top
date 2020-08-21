import React from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';


import { increment } from "./actions";
import { decrement } from "./actions";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Game from "./components/Game";
import Landing from './components/Landing'
import Intro from "./components/Intro";
import Dead from "./components/Dead";
import Victory from "./components/Victory";
import Won from "./components/Won";


function App() {
  // const playerHitpoints = useSelector(state => state.playerHitpoints)
  // const counter = useSelector(state => state.counter)
  // const isLogged = useSelector(state => state.isLogged)
  // const dispatch = useDispatch();

  return (
    <Router>
      <Switch>
        <Route path="/" exact={true} component={Landing} />
        <Route path="/Intro" exact={true} component={Intro} />
        <Route path="/Game" exact={true} component={Game} />
        <Route path="/Dead" exact={true} component={Dead} />
        <Route path="/Victory" exact={true} component={Victory} />
        <Route path="/Won" exact={true} component={Won} />

        <Game />
      </Switch>
    </Router>
  );
}

export default App;


    // <div className="App">
    //   <h1>Counter: {counter}</h1>
    //   <button onClick={() => dispatch(increment(5))}>+</button>
    //   <button onClick={() => dispatch(decrement(5))}>-</button>

    //   {/* INCREMENT BY 5 */}

    //   {isLogged ? (
    //     <h1>You are logged in Bro</h1>
    //   ) : (
    //     <h1>You are not logged in bro</h1>
    //   )}
    // </div>;