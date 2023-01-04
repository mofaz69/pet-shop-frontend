import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { ModalBox } from "../components/Modal/Modal";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import { AuthContext } from "../context/authContext";

export default function NavBar() {
  const { isLoggedIn, user } = useContext(AuthContext);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-link" to="/profile">
              Profile
            </Link>

            <Link className="nav-link" to="/search">
              Search
            </Link>

            {!isLoggedIn ? (
              <>
                <Link
                  className="nav-link"
                  onClick={() => setShowLogin((prev) => !prev)}
                >
                  Login
                </Link>

                <Link
                  className="nav-link"
                  onClick={() => setShowSignup((prev) => !prev)}
                >
                  Sign-Up
                </Link>
              </>
            ) : null}
            <Link className="nav-link" to="pets">
              Go To My Pets!
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <ModalBox show={showLogin} setShow={setShowLogin} showConfirm={false}>
        <SignIn setShowLogin={setShowLogin} />
      </ModalBox>
      <ModalBox show={showSignup} setShow={setShowSignup} showConfirm={false}>
        <SignUp />
      </ModalBox>
    </div>
  );
}
