import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import profile from "./Assets/profile.jpeg";
import { NavLink } from "react-router-dom";

function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-border">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <NavLink to="/" className="nav-link">
            <img className="img-profile" src={profile} alt="profile" /> Moanisha
            Velayuthem
          </NavLink>
        </Nav>
        <Nav>
          <NavLink to="about" className="nav-link">
            About
          </NavLink>
          <NavLink to="projects" className="nav-link">
            Projects
          </NavLink>
          <NavLink to="contact" className="nav-link">
            Contact Me
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
