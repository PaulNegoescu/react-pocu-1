import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { Button } from '~/components';
import styles from './Autocomplete.module.css';
import { useRef, useState } from 'react';

export function Autocomplete({ options, name }) {
  const [selectedItems, setSelectedItems] = useState([]);
  const inputRef = useRef();

  function handleSelectItem() {
    const val = inputRef.current.value;
    const item = options.find((o) => o.label === val);
    if (item) {
      if (!selectedItems.find((i) => i === item)) {
        setSelectedItems([...selectedItems, item]);
      }
      inputRef.current.value = '';
      inputRef.current.focus();
    }
  }

  function handleUnselectItem(item) {
    setSelectedItems((oldItems) => oldItems.filter((old) => old !== item));
  }

  console.log(selectedItems);
  return (
    <>
      <div className={styles.autocomplete}>
        {selectedItems.map((i) => (
          <input type="hidden" name={name} value={i.value} />
        ))}

        <input
          type="text"
          id={name}
          list={`${name}_list`}
          ref={inputRef}
          onChange={handleSelectItem}
        />
        <datalist id={`${name}_list`}>
          {options?.map((option) => (
            <option key={option.value} value={option.label}></option>
          ))}
        </datalist>
        <Button type="button" onClick={handleSelectItem}>
          <PlusIcon width="10" />
        </Button>
        <ul className={styles.tags}>
          {selectedItems.map((i) => (
            <li key={i.value}>
              <button type="button" onClick={() => handleUnselectItem(i)}>
                {i.label} <TrashIcon width="15" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

function test() {
  console.log(a, sub()); // undefined 42
  var a = 15;

  function sub() {
    return 42;
  }
}

function test() {
  var a;
  function sub() {
    return 42;
  }
  console.log(a, sub()); // undefined 42
  a = 15;
}
