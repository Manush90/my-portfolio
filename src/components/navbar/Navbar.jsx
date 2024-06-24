import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar-custom ">
      <Container fluid className="justify-content-center d-flex ">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto centrato">
            <div className="justify-content-center">
              <Nav.Link className="colornavlink" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="colornavlink" href="#projects">
                Projects
              </Nav.Link>
              <Navbar.Brand className="mx-2" href="#home">
                Manuel Dell'Oste
              </Navbar.Brand>
              <Nav.Link className="colornavlink" href="#about">
                About Me
              </Nav.Link>
              <Nav.Link className="colornavlink" href="#contact">
                Contact
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
