import { useState } from 'react'
import useCart from '../hooks/useCart'
import ItemCount from './ItemCount'
import AddToCartButton from './AddToCartButton';

import './ItemDetail.css';

const ItemDetail = ({ item }) => {
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const { addToCart } = useCart();

    console.log(item); 

    return (
        <div className="item-detail">
            <h2>{item.title}</h2>
            <div className="item-content">
                <img src={item.image} alt={item.title} />
                <div className="item-info">
                    <p>Categoría: {item.category}</p>
                    <p>Precio: ${item.price}</p>
                    <p>Stock disponible: {item.stock}</p>
                    <p>{item.id}</p>

                    <ItemCount
                        stock={item.stock}
                        initial={1}
                        onAdd={(quantity) => setSelectedQuantity(quantity)}
                    />

                    <AddToCartButton
                        item={item}
                        selectedQuantity={selectedQuantity}
                    />

                    <p>Descripción: {item.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;