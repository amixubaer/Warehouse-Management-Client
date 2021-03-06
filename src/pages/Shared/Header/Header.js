import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { Link } from "react-router-dom";

const Header = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
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
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="blog">
                Blog
              </Nav.Link>
              {user && (
                <>
                  <Nav.Link as={Link} to="add-item">
                    Add Items
                  </Nav.Link>
                  <Nav.Link as={Link} to="my-items">
                    My Items
                  </Nav.Link>
                  <Nav.Link as={Link} to="manageInventories">
                    Manage Items
                  </Nav.Link>
                  <Nav.Link as={Link} to="contact">
                Contact
              </Nav.Link>
                </>
              )}
            </Nav>
            
            <Nav>
            {user ? (
                <>
                  <button onClick={logout} className="btn btn-warning">
                    Sign out
                  </button>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="login">
                    Login
                  </Nav.Link>
                  <Nav.Link as={Link} to="register">
                    Register
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
