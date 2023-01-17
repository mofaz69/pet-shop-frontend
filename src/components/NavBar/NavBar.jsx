import React, { useContext } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import { ModalBox } from "../Modal/Modal";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SignIn from "../../SignIn/SignIn";
import SignUp from "../../SignUp/SignUp";
import { AuthContext } from "../../context/authContext";

export default function NavBar() {
  const { isLoggedIn, logout, user } = useContext(AuthContext);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const location = useLocation();

  return (
    <div className="navBar-container">
      <Navbar>
        <Container>
          <Link className="nav-link" to="/">
            Home
          </Link>

          <Nav className="me-auto">
            {isLoggedIn ? (
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            ) : null}
            <div className="search-button">
              {location.pathname === "/" ? null : (
                <Link className="nav-link" to="/search">
                  Search
                </Link>
              )}
            </div>
            {/* <Link className="nav-link" to="/my-pets">
              My Pets
            </Link> */}
          </Nav>
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
              <>
                {user.isAdmin ? (
                  <>
                    <Link className="nav-link" to="add-pet">
                      Add Pet
                    </Link>
                    <Link className="nav-link" to="dashboard">
                      Dashboard
                    </Link>
                  </>
                ) : null}
                <Link className="nav-link" onClick={() => logout()}>
                  Logout
                </Link>
              </>
            )}
          </div>
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
