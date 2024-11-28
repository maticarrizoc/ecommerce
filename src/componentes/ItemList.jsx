import { useEffect, useState } from 'react';
import { useFilter } from '../hooks/useFilter';

import {
    getProducts
} from '../firebase/firebase';
import Item from "./Item";

import './ItemList.css';

const ItemList = ({ categoryId }) => {

    const [myProds, setMyProds] = useState([]);

    useEffect(() => {
        getProducts().then((products) => setMyProds(products));
    }, []);

    const filteredItems = useFilter(myProds, 'category', categoryId);

    return (
        <>
            {filteredItems && filteredItems.map((item) => (
                <Item key={item.id} item={item} />
            ))}
        </>
    );
}

export default ItemList;