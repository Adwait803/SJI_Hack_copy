import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Manager View</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/">
                <Nav.Link>
                  <i class="fa-sharp fa-solid fa-people-group"></i>Teams
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/users">
                <Nav.Link>
                  <i class="fa-solid fa-users"></i> Users
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/AddUser">
                <Nav.Link>
                  <i class="fa-solid fa-user-plus"></i> Add User
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/AddTeam">
                <Nav.Link>
                  <i class="fa-solid fa-people-group"></i> Add Team
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/profile">
                <Nav.Link>
                  <i className="fas fa-user"></i> Profile
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
