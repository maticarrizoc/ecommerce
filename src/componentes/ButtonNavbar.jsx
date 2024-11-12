import { Link } from 'react-router-dom';
import './ButtonNavbar.css';

const ButtonNavbar = ({ texto, href }) => {
    return (
        <>
            <Link to={href}>{texto}</Link>
        </>
    );
};
export default ButtonNavbar;