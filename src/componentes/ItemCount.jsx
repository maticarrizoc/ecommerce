import { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ item }) => {

    const [counter, setCounter] = useState(0);

    const handleInc = () => {
        // if(counter<item.available_quantity) { //Cambie de API y en la nueva no hay cantidad disponible
            setCounter(counter + 1);
        // }
    };
    const handleDec = () => {
        if(counter > 0) {
            setCounter(counter - 1);
        }
    };

    return (
        <section className="itemCountSection">
            <button className="itemCountButton" onClick={handleDec}><i class="bi bi-dash"></i></button>
            <span className="itemCount">{counter}</span>
            <button className="itemCountButton" onClick={handleInc}><i class="bi bi-plus"></i></button>
        </section>
    );
}

export default ItemCount;