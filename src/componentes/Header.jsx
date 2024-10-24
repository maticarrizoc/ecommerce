import Navbar from "./Navbar";
import CartWidget from "./CartWidget";
import logoEcommerce from "../assets/ecommerce3.svg";

import './Header.css';

const Header = () => {
    return (
        <header>
            <a href="/index.html"><img src={logoEcommerce} alt="Logo Ecommerce" /></a>
            <Navbar />
            <CartWidget />
        </header>
    );
}

export default Header;