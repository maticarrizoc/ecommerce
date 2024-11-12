import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import './ItemListContainer.css';

const ItemListContainer = ({ texto }) => {
    const { categoryId } = useParams();

    return (
        <div className='itemListContainer'>
            <h1>{texto}</h1>
            <ItemList categoryId={categoryId} />
        </div>
    );
}

export default ItemListContainer;