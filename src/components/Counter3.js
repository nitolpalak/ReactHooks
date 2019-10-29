import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + action.value;
    case "decrement":
      return state - action.value;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function Counter3() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [count2, dispatch2] = useReducer(reducer, initialState);

  return (
    <div>
      <h4>Count1 - {count}</h4>
      <button onClick={() => dispatch({type: "increment", value: 1})}>Increment</button>
      <button onClick={() => dispatch({type: "decrement", value: 1})}>Decrement</button>
      <button onClick={() => dispatch({type: "reset"})}>Reset</button>
      <div>
        <h4>Count2 - {count2}</h4>
        <button onClick={() => dispatch2({type: "increment", value: 5})}>Increment</button>
        <button onClick={() => dispatch2({type: "decrement", value:5})}>Decrement</button>
        <button onClick={() => dispatch2({type: "reset"})}>Reset</button>
      </div>
    </div>
  );
}

export default Counter3;
