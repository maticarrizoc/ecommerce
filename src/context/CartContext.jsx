import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    
    const addToCart = (item) => {
        setCart((prev) => {
            const itemInCart = prev.find(cartItem => cartItem.id === item.id && cartItem.title === item.title);
            if (itemInCart) {
                return prev.map(cartItem =>
                    cartItem.id === item.id && cartItem.title === item.title
                        ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
                        : cartItem
                );
            } else {
                return [...prev, item];
            }
        });
    };

    const clearCart = () => {
        setCart([]);
    };

    const getTotalQuantity = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    const getTotal = () => {
        return cart.reduce((acc, producto) => acc + producto.quantity * producto.price, 0);
    };

    const updateItemQuantity = (id, newQuantity) => {
        setCart((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, Math.min(newQuantity, item.stock)) }
                    : item
            )
        );
    };
    
    const removeItem = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                setCart,
                addToCart,
                clearCart,
                getTotalQuantity,
                getTotal,
                updateItemQuantity,
                removeItem,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
