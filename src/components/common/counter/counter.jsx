import React from 'react';

const Counter = ({ cantidad, incrementar, reducir }) => {
  return (
    <div>
      <div>Cantidad: {cantidad}</div>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={reducir}>Reducir</button>
    </div>
  );
};

export default Counter;
