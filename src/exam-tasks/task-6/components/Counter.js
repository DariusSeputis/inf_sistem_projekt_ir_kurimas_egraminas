import React, { useContext } from 'react';
import { CounterContext } from '../Task6';

const Counter = () => {
  const { count, setCount } = useContext(CounterContext);
  return (
    <div>
      <button
        onClick={() => {
          if (count <= 90) {
            setCount(count + 10);
          }
          if (count === 100) {
            alert('Didinti nebegalima');
          }
        }}
      >
        +
      </button>

      <button
        onClick={() => {
          if (count >= 10) setCount(count - 10);
        }}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
