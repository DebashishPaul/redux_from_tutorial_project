import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./action";

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement(5))}>-</button>
      {isLogged ? (
        <h3>vauable info i should be see i am not login</h3>
      ) : (
        "yes log in"
      )}
    </div>
  );
}

export default App;
