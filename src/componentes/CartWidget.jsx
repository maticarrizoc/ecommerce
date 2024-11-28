import './CartWidget.css'
import { Link } from 'react-router-dom';
import useCart from '../hooks/useCart'

const CartWidget = ({ href }) => {
    const { getTotalQuantity } = useCart();

    return (
        <Link to={href}>
            <div className="cartWidget">
                <span>{getTotalQuantity()}</span>
                <i className="bi bi-cart3"></i>
            </div>
        </Link>
    );
}

export default CartWidget;