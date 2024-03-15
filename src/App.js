import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Live from "./routes/Live";
import pyncherLogo from "./content/images/pyncherlogo.jpeg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <img className="logoImage" src={pyncherLogo} alt="Pyncher" />
      </header>
      <main className="mainContent">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/live" element={<Live />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <nav>
        <Navbar />
      </nav>
    </div>
  );
}

export default App;
