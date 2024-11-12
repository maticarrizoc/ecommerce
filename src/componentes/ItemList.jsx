import { useEffect, useState } from 'react';
import { useFilter } from '../hooks/useFilter';
// import { promesa } from '../asyncMock.js';
import Item from "./Item";

import './ItemList.css';

const ItemList = ({ categoryId }) => {

    // const [items, setItems] = useState([]);

    // useEffect(() => {
    //     promesa.then((respuesta) => {
    //         setItems(respuesta);
    //       });
    //     }, []);

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(
            'https://fakestoreapi.com/products'
        )
            .then((respuesta) => respuesta.json())
            .then((datos) => setItems(datos))
            .catch((error) => console.log(error));
    }, []);

    const filteredItems = useFilter(items, 'category', categoryId);

    return (
        <>
            {filteredItems.map((item) => (
                <Item key={item.id} item={item} />
            ))}
        </>
    );
}

export default ItemList;