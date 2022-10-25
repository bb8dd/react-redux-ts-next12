import React, { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber(number + 1);
    return number;
  };
  const onDecrease = () => {
    setNumber(number - 1);
    return number;
  };
  return (
    <div>
      <h1>{number}</h1>
      <button type="button" onClick={onIncrease}> +1 </button>
      <button type="button" onClick={onDecrease}> -1 </button>
    </div>
  );
}
