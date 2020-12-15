import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class OWNavbar extends Component {
  render() {
    return (
      <header>
        <Navbar variant="dark" bg="dark" expand="lg" sticky="top">
          <Navbar.Brand as={Link} to="/">
            Open Wallet
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/accounts">
                Accounts
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}
