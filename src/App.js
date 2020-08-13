import React from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import { increment } from "./actions";
import { decrement } from "./actions";


function App() {

  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(5))}>-</button>

      {/* INCREMENT BY 5 */}

      {isLogged ? (
        <h1>You are logged in Bro</h1>
      ) : (
        <h1>You are not logged in bro</h1>
      )}
    </div>
  );
}

export default App;
