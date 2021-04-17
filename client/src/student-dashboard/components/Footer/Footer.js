import { Link } from "react-router-dom";

//Style
import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="copyright">
        Copyright © {new Date().getFullYear() + " "}
        <a
          href={`${window.location.protocol}//${process.env.REACT_APP_PLATFORM_DOMAIN}:${window.location.port}`}
        >
          Droos Academy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
