import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getSingleProduct } from '../firebase/firebase';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        if (id) {
            getSingleProduct(id).then((product) => setItem(product));
        }
    }, [id]);

    return (
        <>
            {item ? <ItemDetail item={item} /> : <p>Cargando...</p>}
        </>
    );
}

export default ItemDetailContainer;
