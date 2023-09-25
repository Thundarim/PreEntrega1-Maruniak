import React from 'react';


const ItemListContainer = ({ nombre, edad, verdad }) => {
  const estilo = {
    padding: '20px',
    border: '1px solid #FFB606',
    borderRadius: '5px',
    backgroundColor: '#1c1c1c',
    textAlign: 'center',
  };

  const estilomensaje = {
    fontSize: '24px', 
    fontWeight: 'bold',
    color: '#FFB606',
  };

  return (
    <div style={estilo}>
      <div style={estilomensaje}>
        <h4>Hola {nombre} Espero que tengas un buen dia </h4>
        <h5>Mi edad es {edad}</h5>
        <h3>Estas mirando esta pagina? :{verdad}</h3>
        </div>
    </div>
  );
};
export default ItemListContainer;