import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Live from "./routes/Live";
import pyncherLogo from "./content/images/pyncherlogo.jpeg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="logoImage" src={pyncherLogo} alt="Pyncher" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/live" element={<Live />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Navbar />
      </header>
    </div>
  );
}

export default App;
