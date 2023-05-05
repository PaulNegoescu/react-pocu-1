export function Child1({ value, onValueChange }) {
  return (
    <>
      <h2>Child 1</h2>
      Value is: {value}
      <button onClick={() => onValueChange('value from child 1')}>
        Set value from child1
      </button>
    </>
  );
}
