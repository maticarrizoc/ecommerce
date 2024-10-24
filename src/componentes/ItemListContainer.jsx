import './ItemListContainer.css';
const ItemListContainer = (props) => {
    return (
        <div className='itemListContainer'>
            <h1>{props.texto}</h1>
        </div>
    );
}

export default ItemListContainer;