import React from "react";
import "./MyNavBar.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import * as auth from "./auth";

function MyNavBar() {
  const history = useHistory();
  const url = window.location.pathname;
  const redirect = () => {
    history.push("/");
  };
  const decideClassName = (urlID) => {
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
    <div className="nav__container">
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
            <Nav className="nav-link">
              <Link to="/list" className={decideClassName("/list")}>
                Dashboard
              </Link>
              <Link to="/create" className={decideClassName("/create")}>
                Record Exercise
              </Link>
              <Link to="" className={decideClassName("/")} onClick={logOut}>
                Log Out
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default MyNavBar;
