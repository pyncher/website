import pyncherImage from "../content/images/pyncher.jpeg";
import "./Home.css";

const Home = () => {
  return (
    <img
      className="homeImage"
      src={pyncherImage}
      alt="Pyncher the band outside of a bricked building"
    />
  );
};

export default Home;
