import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const add = () => setCount(count + 1);
  const min = () => setCount(count - 1);
  return (
    <>
      <p>The Number is {count}</p>
      <button onClick={add}>+</button>
      <button onClick={min}>-</button>
    </>
  );
}

export default App;
