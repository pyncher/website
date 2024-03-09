import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./routes/Home";
import About from "./routes/About";
import Live from "./routes/Live";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Heading">PYNCHER</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/live" element={<Live />} />
          <Route
            path="/merch"
            Component={() =>
              window.location.replace("https://pyncher.bigcartel.com")
            }
          />
        </Routes>
        <Navbar />
      </header>
    </div>
  );
}

export default App;
