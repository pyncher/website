import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const routes = ["/", "/live", "/contact"];
  const routesToRender = routes.filter((route) => route !== location.pathname);
  return (
    <div className="navBarContainer">
      {routesToRender.map((route) => (
        <Link className="navBarLink" to={route}>
          {route === "/"
            ? "Home"
            : route.substring(1).charAt(0).toUpperCase() + route.slice(2)}
        </Link>
      ))}
      <a
        className="navBarLink"
        href="https://pyncher.bigcartel.com"
        target="_blank"
        rel="noreferrer"
      >
        Merch
      </a>
    </div>
  );
};

export default Navbar;
