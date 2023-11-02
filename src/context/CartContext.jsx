import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  // Inicializa el estado del carrito desde localStorage
  const [cart, setCart] = useState(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    return storedCart;
  });

  // Actualiza localStorage cada vez que cambia el carrito
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  // Agregar un producto al carrito
  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  // Comprobar si un producto con un ID dado está en el carrito
  const isInCart = (id) => cart.some((item) => item.id === id);

  // Obtener la quantity de un producto por su ID en el carrito
  const getQuantityById = (id) => {
    const product = cart.find((item) => item.id === id);
    return product ? product.quantity : 0;
  };

  // Vaciar el carrito y eliminarlo de localStorage
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  // Eliminar un producto por su ID del carrito
  const deleteProductById = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Calcular el precio total de los elementos en el carrito
  const getTotalPrice = () =>
    cart.reduce((total, item) => total + item.precio * item.quantity, 0);

  // Calcular la quantity total de elementos en el carrito
  const getTotalQuantity = () =>
    cart.reduce((total, item) => total + item.quantity, 0);

  // Crea el valor del contexto con todas las funciones y datos del carrito
  const contextValue = {
    cart,
    addToCart,
    isInCart,
    getQuantityById,
    clearCart,
    deleteProductById,
    getTotalPrice,
    getTotalQuantity,
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
