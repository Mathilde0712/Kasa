import { NavLink } from "react-router-dom"; 
const Navigation = () => {
    return (
        <div className="navigation">
            <img src="./src/Assets/images/LOGO_mobile.svg" alt="logo"/>
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")} >
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>A propos</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;