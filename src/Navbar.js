import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navBarContainer">
      <Link className="navBarLink" to="/">
        Home
      </Link>
      <Link className="navBarLink" to="/live">
        Live
      </Link>
      <a
        className="navBarLink"
        href="https://pyncher.bigcartel.com"
        target="_blank"
        rel="noreferrer"
      >
        Merch
      </a>
      <Link className="navBarLink" to="/contact">
        Contact
      </Link>
    </div>
  );
};

export default Navbar;
