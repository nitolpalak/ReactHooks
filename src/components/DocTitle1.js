import React, { useState } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

function DocTitle1() {
  const [count, setCount] = useState(0);
  useDocumentTitle(count)
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count- {count}</button>
      <button onClick={()=>setCount(count)}>Count OK</button>
    </div>
  );
}

export default DocTitle1;
