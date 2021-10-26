import React from "react";
import "./MyNavBar.css";
// import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useLocation, useHistory } from "react-router-dom";
import * as auth from "./auth";

function MyNavBar() {
  const history = useHistory();
  const redirect = () => {
    history.push("/");
  };
  const decideClassName = (urlID) => {
    let url = useLocation().pathname;
    if (urlID === url) {
      return "gray__color";
    } else {
      return "red__color";
    }
  };

  const logOut = () => {
    auth.logout();
    redirect();
  };

  return (
    <Navbar bg="light" expand="lg" className="MyNavbar">
      <Container>
        <Navbar.Brand href="/list">
          <img
            className="menu__logo"
            src="trackfit-logo.png"
            alt="TrackFit logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <Nav.Link href="/list" className={decideClassName("/list")}>
              {" "}
              Dashboard{" "}
            </Nav.Link>

            <Nav.Link href="/create" className={decideClassName("/create")}>
              Record Exercise
            </Nav.Link>

            {/* <Nav.Link href="/user">Create User </Nav.Link> */}

            <Nav.Link className={decideClassName("/")} onClick={logOut}>
              Log Out
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;
