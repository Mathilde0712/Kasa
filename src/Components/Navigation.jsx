import { NavLink } from "react-router-dom";
import logo from "../Assets/images/LOGO_mobile.svg";
const Navigation = () => {
  return (
    <div className="navigation">
      <img src={logo} alt="logo" />
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/a-propos"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>A propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
