import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { ModalBox } from "../components/Modal/Modal";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import MyPet from "../MyPet/MyPet";

export default function NavBar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/profile">Profile</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/search">Search</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/signIn">Login</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/signUp">Sign-Up</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="MyPet">Go To My Pets!</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
