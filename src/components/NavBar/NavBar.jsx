import React, { useContext } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import { ModalBox } from "../Modal/Modal";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SignIn from "../../pages/SignIn/SignIn";
import SignUp from "../../pages/SignUp/SignUp";
import { AuthContext } from "../../context/authContext";

export default function NavBar() {
  const { isLoggedIn, logout, user } = useContext(AuthContext);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const location = useLocation();

  return (
    <div className="navBar-container">
      <Navbar>
        <Link className="nav-link" to="/">
          Home
        </Link>

        <Nav className="me-auto">
          {isLoggedIn ? (
            <Link className="nav-link nav-text-color" to="/profile">
              Profile
            </Link>
          ) : null}
          {location.pathname === "/" ? null : (
            <div className="search-button">
              <Link className="nav-link nav-text-color" to="/search">
                Search
              </Link>
            </div>
          )}
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
