import React, { useState } from 'react';

function Counter() {
  // Declare a stateful variable 'count' with initial value 0
  const [count, setCount] = useState(0);

  // Function to handle increment
  const increment = () => {
    setCount(count + 1); // Update the state
  };

  // Function to handle decrement
  const decrement = () => {
    setCount(count - 1); // Update the state
  };

  return (
    <div>
      <p>Count: {count}</p> {/* Render the current state */}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
