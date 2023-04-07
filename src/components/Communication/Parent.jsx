import { useState } from 'react';
import { Child1 } from './Child1';
import { Child2 } from './Child2';

export function Parent() {
  const [value, setValue] = useState('');

  return (
    <>
      <h1>Parent</h1>
      Value is: {value}
      <button onClick={() => setValue('value from parent')}>
        Set value from parent
      </button>
      <Child1 value={value} onValueChange={setValue} />
      <Child2 value={value} />
    </>
  );
}
