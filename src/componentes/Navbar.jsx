import ButtonNavbar from "./ButtonNavbar";
import CartWidget from "./CartWidget";

import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <ButtonNavbar texto="Lavarropas" href="/category/lavarropas" />
                </li>
                <li>
                    <ButtonNavbar texto="Heladeras" href="/category/heladeras" />
                </li>
                <li>
                    <ButtonNavbar texto="Microondas" href="/category/microondas" />
                </li>
                <li>
                    <ButtonNavbar texto="Pequeños Electrodomesticos" href="/category/pequeños electrodomesticos" />
                </li>
                <li>
                    <CartWidget href="/cart"/>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;