import "./App.css";
import NavbarComponent from "./NavbarComponent";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Timeline from "./Timeline/Timeline";
import Contact from "./Contact/Contact";
import Projects from "./Projects/Projects";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="about" element={<About />} />
        <Route path="timeline" element={<Timeline />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
