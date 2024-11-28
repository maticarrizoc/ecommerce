import { useState } from 'react';
import useCart from '../hooks/useCart';
import './AddToCartButton.css';


const AddToCartButton = ({ item, selectedQuantity }) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        if (selectedQuantity > item.stock) {
            alert('No puedes agregar más productos que el stock disponible.');
            return;
        }
    
        addToCart({
            id: item.id,
            title: item.title,
            price: item.price,
            quantity: selectedQuantity,
            stock: item.stock,
            image: item.image,
        });
    };
    
    return (
        <button className='AddToCartButton' onClick={handleAddToCart}>Agregar al carrito</button>
    );
};

export default AddToCartButton;
