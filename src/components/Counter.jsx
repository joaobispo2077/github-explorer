import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrementCounter = () => {
    setCount(previousCounter => previousCounter + 1);
  }
  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>

      <button
        onClick={handleIncrementCounter}
      >
        Increment
      </button>
    </div>
  )
}