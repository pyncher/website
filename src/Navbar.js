import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faSpotify,
  faYoutube,
  faApple,
  faTiktok,
  faBandcamp,
} from "@fortawesome/free-brands-svg-icons";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const routes = ["/", "/live", "/contact"];
  const routesToRender = routes.filter((route) => route !== location.pathname);
  return (
    <div className="navBarContainer">
      <div className="routesContainer">
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
          Shop
        </a>
      </div>
      <div className="iconsContainer">
        <a
          className="svgLink"
          href="https://www.instagram.com/pyncher"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          className="svgLink"
          href="https://www.facebook.com/pyncherband"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          className="svgLink"
          href="https://open.spotify.com/artist/66NBYDmR4OTIL8AuMvKTK7?si=xwTFcid5SjGf8CFIzZNw9w"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faSpotify} />
        </a>
        <a
          className="svgLink"
          href="https://www.youtube.com/@pyncher."
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a
          className="svgLink"
          href="https://music.apple.com/gb/artist/pyncher/1596948873"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faApple} />
        </a>
        <a
          className="svgLink"
          href="https://www.tiktok.com/@pyncheruk"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faTiktok} />
        </a>
        <a
          className="svgLink"
          href="https://pyncher.bandcamp.com"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faBandcamp} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
