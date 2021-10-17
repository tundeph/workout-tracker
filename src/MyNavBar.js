import React from "react";
import "./MyNavBar.css";
// import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import * as auth from "./auth";

function MyNavBar({ LoggedIn }) {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" className="MyNavbar">
      <Container>
        <Navbar.Brand href="/list"> TrackFit </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <Nav.Link href="/list"> Dashboard </Nav.Link>
            <Nav.Link href="/create">Record Exercise </Nav.Link>
            <Nav.Link href="/user">Create User </Nav.Link>
            {LoggedIn ? (
              <Nav.Link href="/" onClick={auth.logout}>
                Log Out{" "}
              </Nav.Link>
            ) : (
              <Nav.Link href="/">Log In </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;
