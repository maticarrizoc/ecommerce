import ButtonNavbar from "./ButtonNavbar";

import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <ButtonNavbar texto="Inicio" href="/index.html" />
                </li>
                <li>
                    <ButtonNavbar texto="Sobre Nosotros" href="/sobrenosotros.html" />
                </li>
                <li>
                    <ButtonNavbar texto="Tienda" href="/tienda.html" />
                </li>
                <li>
                    <ButtonNavbar texto="Contacto" href="/contacto.html" />
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;