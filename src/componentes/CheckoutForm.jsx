import React, { useState } from 'react';
import { sendOrder } from '../firebase/firebase';
import useCart from '../hooks/useCart';
import { Link } from 'react-router-dom';
import './CheckoutForm.css'

const CheckoutForm = () => {
  const { cart, getTotal, clearCart } = useCart();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [orderId, setOrderId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Productos en el carrito:', cart);

    const items = cart.map(product => ({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: product.quantity,
    }));

    console.log('Items enviados:', items);

    const order = {
      buyer: formData,
      items: items,
      total: getTotal(),
      date: new Date().toISOString(),
    };

    try {
      const id = await sendOrder(order);
      setOrderId(id);
      clearCart(); 
    } catch (error) {
      console.error('Error al enviar la orden:', error);
    }
  };

  if (orderId) {
    return (
      <div className="order-success">
        <h2>¡Compra confirmada!</h2>
        <p>Tu ID de orden es: <strong>{orderId}</strong></p>
        <Link to="/" className="cartItemButton">Volver al Inicio</Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <h2>Datos del Comprador</h2>
      <label>
        Nombre:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <label>
        Teléfono:
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
      </label>
      <button type="submit" className="cartItemButton">Confirmar Compra</button>
    </form>
  );
};

export default CheckoutForm;
