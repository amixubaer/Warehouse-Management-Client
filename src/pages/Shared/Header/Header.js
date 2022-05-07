import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/" className="me-5">
            <h1>Cars Den</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="#">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="#">
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to="#">
                Add Items
              </Nav.Link>
              <Nav.Link as={Link} to="#">
                Manage Items
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="login">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="register">
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
