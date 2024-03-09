import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navBarContainer">
      <Link className="navBarLink" to="/">
        Home
      </Link>
      <Link className="navBarLink" to="/about">
        About
      </Link>
      <Link className="navBarLink" to="/live">
        Live
      </Link>
      <Link className="navBarLink" to="/merch">
        Merch
      </Link>
    </div>
  );
};

export default Navbar;
