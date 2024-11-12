import ButtonNavbar from "./ButtonNavbar";
import CartWidget from "./CartWidget";

import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <ButtonNavbar texto="Electronica" href="/category/electronics" />
                </li>
                <li>
                    <ButtonNavbar texto="Joyas" href="/category/jewelery" />
                </li>
                <li>
                    <ButtonNavbar texto="Ropa Hombre" href="/category/men's clothing" />
                </li>
                <li>
                    <ButtonNavbar texto="Ropa Mujer" href="/category/women's clothing" />
                </li>
                <li>
                    <CartWidget />
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;