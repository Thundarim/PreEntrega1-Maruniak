import React from 'react';

const Counter = ({ quantity, incrementar, reducir }) => {
  return (
    <div>
      <div>Cantidad: {quantity}</div>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={reducir}>Reducir</button>
    </div>
  );
};

export default Counter;
