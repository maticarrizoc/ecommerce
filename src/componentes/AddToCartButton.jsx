import { useState } from 'react';
import useCart from '../hooks/useCart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AddToCartButton.css';


const AddToCartButton = ({ item, selectedQuantity }) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {

        addToCart({
            id: item.id,
            title: item.title,
            price: item.price,
            quantity: selectedQuantity,
            stock: item.stock,
            image: item.image,
        });

        toast.success('Producto agregado al carrito', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: toast.POSITION.TOP_RIGHT,
        });
    };

    return (
        <>
            <button className='AddToCartButton' onClick={handleAddToCart}>Agregar al carrito</button>
        </>
    );
};

export default AddToCartButton;
