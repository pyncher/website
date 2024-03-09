import pyncherImage from "./pyncher.jpeg";
import "./Home.css";

const Home = () => {
  return (
    <img
      className="homeImage"
      src={pyncherImage}
      alt="Pyncher the band sitting on a sofa"
    />
  );
};

export default Home;
