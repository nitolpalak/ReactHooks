import React, { useState } from "react";

function HookCounter2() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      //   setCount(count + 1)  //doesn't work... because this works on a different thread.. so the {count} is not previous State value
      setCount(prevCount => prevCount + 1); //this works... beacause we pass the previous state value as function(arrow function in this case) to count new state value
    }
  };
  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>
        Decrement
      </button>
      <button onClick={incrementFive}>Increment 5</button>
    </div>
  );
}

export default HookCounter2;
