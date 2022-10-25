import React, { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };
  const onDecrease = () => {
    setNumber((prevNumber) => {
      if (prevNumber === 0) {
        return 0;
      }
      return prevNumber - 1;
    });
  };
  return (
    <div>
      <h1>{number}</h1>
      <button type="button" onClick={onIncrease}> +1 </button>
      <button type="button" onClick={onDecrease}> -1 </button>
    </div>
  );
}
