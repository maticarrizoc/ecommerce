import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import logoEcommerce from "../assets/ecommerce3.svg";

import './Header.css';

const Header = () => {
    return (
        <header>
            <Link to="/"><img src={logoEcommerce} alt="Logo Ecommerce" /></Link>
            <Navbar />
            
        </header>
    );
}

export default Header;