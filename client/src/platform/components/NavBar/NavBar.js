import { Link } from "react-router-dom";

//Styles
import "./style.scss";

//Assets
import Logo from "../../../assets/img/logo.png";

const NavBar = () => {
  return (
    <div className="nav-bar-container">
      <div className="logo-container">
        <img src={Logo} alt="Droos Academy Logo" />
      </div>
      <div className="navs-container">
        <Link to="">المعلمين</Link>
        <Link to="">الموزعين</Link>
        <Link to="">المميزات</Link>
        <Link to="">عن الموقع</Link>
      </div>
      <div className="humburger-menu">
        <span></span>
        <span className="mid-burger"></span>
        <span></span>
      </div>
    </div>
  );
};

export default NavBar;
