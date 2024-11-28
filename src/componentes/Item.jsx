import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ item }) => {
    return (
        <>
            <article className='item'>
                <h4>{item.title}</h4>
                <img src={item.image} alt={item.title} />
                <p>Precio: ${item.price}</p>
                <p>{item.id}</p>
                <Link to={`/item/${item.id}`}>
                    <button className='detailButton'>Ver detalles</button>
                </Link>
            </article>

        </>
    );
}

export default Item;