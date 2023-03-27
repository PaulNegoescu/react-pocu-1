import clsx from 'clsx';
import { useReducer, useState } from 'react';
import styles from './Counter.module.css';

function countReducer(oldCount, action) {
  let newCount = oldCount;

  switch (action.type) {
    case 'increment':
      newCount = oldCount + action.payload;
      break;
    case 'decrement':
      newCount = oldCount - action.payload;
      break;
    case 'reset':
      newCount = action.payload;
      break;
    default:
      console.warn(`The action "${action}" is not implemented!`);
      newCount = oldCount;
  }

  return newCount;
}

export function Counter({ initialCount = 0, initialStep = 1 }) {
  const [count, dispatch] = useReducer(countReducer, initialCount);
  const [step, setStep] = useState(initialStep);

  function handleInputChange(e) {
    setStep(e.target.valueAsNumber);
  }

  return (
    <>
      <h1>Counter</h1>
      <p>
        <output
          className={clsx({
            [styles.positive]: count > 0,
            [styles.negative]: count < 0,
          })}
          htmlFor="decrement increment reset"
        >
          {count}
        </output>
      </p>
      <p>
        <label htmlFor="step">Step</label>
        <input
          id="step"
          type="number"
          value={step}
          onChange={handleInputChange}
        />
      </p>
      <p>
        <button
          id="decrement"
          onClick={() => dispatch({ type: 'decrement', payload: step })}
        >
          -
        </button>
        <button
          id="reset"
          onClick={() => dispatch({ type: 'reset', payload: initialCount })}
        >
          Reset
        </button>
        <button
          id="increment"
          onClick={() => dispatch({ type: 'increment', payload: step })}
        >
          +
        </button>
      </p>
    </>
  );
}

let state;
function useMyState(initialValue) {
  // Nullish coalescing opertaor ??
  // null ?? ceva => ceva; undefined ?? ceva => ceva; 0 ?? ceva => 0; false ?? ceva => false
  state = state ?? initialValue;

  // closure
  function setState(newValue) {
    state = newValue;
    Counter();
  }

  return [state, setState];
}
