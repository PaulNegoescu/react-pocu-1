import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Counter</h1>
      <p>
        <output htmlFor="decrement increment">{count}</output>
      </p>
      <p>
        <button id="decrement" onClick={() => setCount(count - 1)}>
          -
        </button>
        <button id="increment" onClick={() => setCount(count + 1)}>
          +
        </button>
      </p>
    </>
  );
}

let state;
function useMyState(initialValue) {
  state = state || initialValue;

  // closure
  function setState(newValue) {
    state = newValue;
    Counter();
  }

  return [state, setState];
}
