import React, { useState } from 'react';

const CounterAsync = () => {
  const [count, setCount] = useState(0);

  return (
    <p
      onClick={() => {
        setTimeout(() => {
          setCount(count + 1);
        }, 1000);
      }}
    >
      ### {count} ###
    </p>
  );
};

export default CounterAsync;
