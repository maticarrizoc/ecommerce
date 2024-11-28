import { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [counter, setCounter] = useState(initial);

    const handleInc = () => {
        if (counter < stock) {
            setCounter(counter + 1);
            onAdd(counter + 1);
        }
    };

    const handleDec = () => {
        if (counter > 1) {
            setCounter(counter - 1);
            onAdd(counter - 1);
        }
    };

    return (
        <section className="itemCountSection">
            <button className="itemCountButton" onClick={handleDec}>
                <i className="bi bi-dash"></i>
            </button>
            <span className="itemCount">{counter}</span>
            <button className="itemCountButton" onClick={handleInc}>
                <i className="bi bi-plus"></i>
            </button>
        </section>
    );
};

export default ItemCount;
