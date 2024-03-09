import pyncherImage from "../content/images/pyncher.jpg";
import "./Home.css";

const Home = () => {
  return (
    <img
      className="homeImage"
      src={pyncherImage}
      alt="Pyncher the band sitting on the floor of a corridor"
    />
  );
};

export default Home;
