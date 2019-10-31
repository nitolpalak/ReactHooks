import React, { useContext } from "react";
import { UserContext, CountContext } from "../App";

function ReducerCompF() {
  const countContext = useContext(CountContext);
  return (
    <div>
      Component F
      <button onClick={() => countContext.countDispatch("increment")}>Increment</button>
      <button onClick={() => countContext.countDispatch("decrement")}>Decrement</button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
    </div>
  );
}

export default ReducerCompF;
