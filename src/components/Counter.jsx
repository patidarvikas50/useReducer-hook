import React, { useReducer } from "react";
const initialState = 0;

const reducer = (state, action) => {
  if (action.type === "INC") {
    return state + 1;
  } else if (action.type === "DEC") {
    return state > 0 ? state - 1 : state;
  } else if (action.type === "RESET") {
    return initialState;
  }
  else{
    return state
  }
};

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch({ type: "INC" })}>+</button>
      <button onClick={() => dispatch({ type: "DEC" })}>-</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
};

export default Counter;
