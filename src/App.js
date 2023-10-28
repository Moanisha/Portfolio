import "./App.css";
import NavbarComponent from "./NavbarComponent";
import { Routes, Route } from "react-router-dom";
import About from "./About";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
