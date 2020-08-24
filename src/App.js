import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Game from "./components/Game";
import Landing from './components/Landing'
import Intro from "./components/Intro";
import Dead from "./components/Dead";
import Victory from "./components/Victory";
import Won from "./components/Won";
import Run from "./components/Run";
import About from "./components/About";


function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" exact={true} component={Landing} />
        <Route path="/Intro" exact={true} component={Intro} />
        <Route path="/Game" exact={true} component={Game} />
        <Route path="/Dead" exact={true} component={Dead} />
        <Route path="/Victory" exact={true} component={Victory} />
        <Route path="/Won" exact={true} component={Won} />
        <Route path="/Run" exact={true} component={Run} />
        <Route path="/About" exact={true} component={About} />

        <Game />
      </Switch>
    </Router>
  );
}

export default App;