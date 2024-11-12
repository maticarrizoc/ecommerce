import ItemCount from './ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ item }) => {
    return (
        <div className='item-detail'>
            <h2>{item.title}</h2>
            <div className='item-content' >
                <img src={item.image} alt={item.title} />
                <div className='item-info' >
                    <p>Categoría: {item.category}</p>
                    <p>Precio: ${item.price}</p>
                    <ItemCount item={item} />
                    <p>Descripción: {item.description}</p>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
