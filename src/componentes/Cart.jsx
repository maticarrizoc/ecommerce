import React from 'react'
import useCart from '../hooks/useCart'
import { Link } from 'react-router-dom'
import './Cart.css'

const Cart = () => {
    const { cart, removeItem, updateItemQuantity, getTotal, clearCart } = useCart();

    return (
        <div className="cart-container">
            <h2>Carrito de Compras</h2>
            {cart.length > 0 ? (
                <>
                    <ul className="cart-list">
                        {cart.map((product) => (
                            <li key={product.id} className="cart-item">
                                <img src={product.image} alt={product.title} className="cart-item-img" />
                                <div className="cart-item-info">
                                    <h3>{product.title}</h3>
                                    <p>Precio: ${product.price}</p>
                                    <p>Subtotal: ${product.price * product.quantity}</p>
                                    <p>Stock: {product.stock}</p>
                                    <div className="cart-item-actions">
                                        Cantidad:
                                        <button
                                            onClick={() => updateItemQuantity(product.id, product.quantity - 1)}
                                            disabled={product.quantity <= 1}
                                            className="cartItemButton"
                                        >
                                            <i className="bi bi-dash"></i>
                                        </button>
                                        <span className='cartSpam'>{product.quantity}</span>
                                        <button
                                            onClick={() => updateItemQuantity(product.id, product.quantity + 1)}
                                            disabled={product.quantity >= product.stock}
                                            className="cartItemButton"
                                        >
                                            <i className="bi bi-plus"></i>
                                        </button>
                                        <button
                                            onClick={() => removeItem(product.id)}
                                            className="cartItemButton"
                                        >
                                            <i className="bi bi-trash"></i>
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-summary">
                        <span className='cartSpam'>Total del Carrito: ${getTotal()}</span>
                        <button onClick={clearCart} className="cartItemButton">Vaciar Carrito</button>
                        <Link to={`/checkout`} className="cartItemButton">Finalizar Compra</Link>
                    </div>
                </>
            ) : (
                <p>El carrito está vacío.</p>
            )}
        </div>
    );
};

export default Cart;
