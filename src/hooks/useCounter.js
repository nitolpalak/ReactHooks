import { useState } from "react";

function useCounter(initialCount = 0, value) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(prevCount => prevCount + value);  //How does it know what the prevCount is? WTF!!!
  };

  const decrement = () => {
    setCount(prevCount => prevCount - value);
  };

  const reset = () => {
    setCount(initialCount);
  };

  return [count, increment, decrement, reset];
}

export default useCounter;
