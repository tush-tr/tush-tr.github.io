import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import pic from "../../assets/test.gif";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-wrapper">
      <Container>
        <Navbar.Brand href="/#/" className="navbar-brand">
          <img className="main-pic" src={pic} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav id="navitems" className="ms-auto">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "link-active navlink" : "link navlink"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "link-active navlink" : "link navlink"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "link-active navlink" : "link navlink"
              }
            >
              Work
            </NavLink>
            <NavLink
              to="/offer"
              className={({ isActive }) =>
                isActive ? "link-active navlink" : "link navlink"
              }
            >
              Offer
            </NavLink>
            <a
              href="https://blog.kubekode.org"
              class="navlink"
              target="_blank"
              rel="noreferrer noopener"
            >
              Blogs
            </a>
            <div className="resume-nav-bar-wrapper">
              <a
                href="https://tush-tr.github.io/Tushar-Rajpoot-CV.pdf"
                class="navlink resume-link-nav"
                target="_blank"
                rel="noreferrer noopener"
              >
                Resume
              </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
