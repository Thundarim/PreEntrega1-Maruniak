import React, { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebaseconfig";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";
import "./checkout.css";
import Swal from "sweetalert2";

const Checkout = () => {
  const [userData, setUserData] = useState({
    nombre: "",
    celular: "",
    email: "",
  });

  const [orderId, setOrderId] = useState(null);

  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const total = getTotalPrice();

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    let order = {
      comprador: userData,
      items: cart,
      total,
      fecha: serverTimestamp(),
    };
  
    if (!order.comprador.nombre) {
      order.comprador.nombre = userData.name;
    }
  
    if (!order.comprador.nombre) {
      order.comprador.nombre = userData.name;
    }
  
    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order)
      .then((res) => {
        setOrderId(res.id);
  

const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
cartItems.forEach((item) => {
  const stock = parseFloat(item.stock);
  const quantity = parseFloat(item.quantity);

  if (!isNaN(stock) && !isNaN(quantity)) {
    const updatedStock = stock - quantity;
    if (updatedStock >= 0) {
      updateDoc(doc(db, "products", item.id), {
        stock: updatedStock,
      });
    } else {
      console.error("No hay stock del producto:", item);
    }
  } else {
    console.error("Stock invalido, o cantidad erronea:", item);
  }
});
  
        clearCart();
        Swal.fire({
          icon: "success",
          title: "Gracias por tu compra",
          text: `Tu ID de orden es ${res.id}`,
        });
      })
      .catch((error) => {
        console.error("Error al crear orden: ", error);
  
        Swal.fire({
          icon: "error",
          title: "Error al crear orden",
          text: "Hubo un error al procesar tu orden. Por favor, inténtalo de nuevo más tarde.",
        });
      });
  };
  
  return (
    <div className="checkout-container">
      {orderId ? (
        <div className="order-confirmation">
          <h2>Gracias por tu compra, tu ID de orden es {orderId}</h2>
          <Link to="/">Continuar comprando</Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="checkout-input"
            placeholder="Ingresa tu nombre"
            name="name"
            value={userData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            className="checkout-input"
            placeholder="Ingresa tu numero de celular"
            name="celular"
            value={userData.celular}
            onChange={handleChange}
          />
          <input
            type="text"
            className="checkout-input"
            placeholder="Ingresa tu email"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
          <button type="submit" className="checkout-button">
            Comprar
          </button>
        </form>
      )}
    </div>
  );
};


export default Checkout;
