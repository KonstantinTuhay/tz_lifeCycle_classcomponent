import React, { useState } from "react";
import LifeCycleComponent from "./LifecycleComponent ";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>increase</button>
      <br />
      {count % 2 === 0 ? <LifeCycleComponent /> : <p>{count}</p>}
    </>
  );
};

export default App;
