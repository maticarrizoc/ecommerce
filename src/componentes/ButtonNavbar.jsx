import './ButtonNavbar.css';

const ButtonNavbar = ({texto, href}) => {
    return (
        <>
            <a href={href}>{texto}</a>
        </>
    );
};
export default ButtonNavbar;