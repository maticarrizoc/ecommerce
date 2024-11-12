import { useEffect, useState } from 'react';
// import { promesa } from '../asyncMock.js';
import { useParams } from 'react-router-dom';
import ItemDetail from "./ItemDetail";

// import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
    const { id } = useParams();

    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((response) => response.json())
            .then((data) => setItem(data))
            .catch((error) => console.log(error));
    }, [id]);

    return (
        <>
            {item ? <ItemDetail item={item} /> : <p>Cargando...</p>}
        </>
    );
}

export default ItemDetailContainer;
