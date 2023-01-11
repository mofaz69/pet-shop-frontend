import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { ModalBox } from "../Modal/Modal";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SignIn from "../../SignIn/SignIn";
import SignUp from "../../SignUp/SignUp";
import { AuthContext } from "../../context/authContext";

export default function NavBar() {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Nav className="me-auto">
            <Link className="nav-link" to="/profile">
              Profile
            </Link>

            <Link className="nav-link" to="/search">
              Search
            </Link>
            <Link className="nav-link" to="/my-pets">
              My Pets
            </Link>
            <div className="right-NavBar">
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
              ) : (
                <Link className="nav-link" onClick={() => logout()}>
                  Logout
                </Link>
              )}
            </div>
          </Nav>
        </Container>
      </Navbar>
      <ModalBox show={showLogin} setShow={setShowLogin} showConfirm={false}>
        <SignIn setShowLogin={setShowLogin} />
      </ModalBox>
      <ModalBox show={showSignup} setShow={setShowSignup} showConfirm={false}>
        <SignUp setShowSignup={setShowSignup} />
      </ModalBox>
    </div>
  );
}
