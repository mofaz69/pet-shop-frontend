import React, { useContext, useState } from "react";
import { ModalBox } from "../components/Modal/Modal";
import { AuthContext } from "../context/authContext";
import Profile from "../Profile/Profile";
import Search from "../Search/Search";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import "./Home.css";

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const { isLoggedIn, user } = useContext(AuthContext);
  return (
    <div>
      {isLoggedIn ? (
        <h1> Welcome {user.firstName + " " + user.lastName}</h1>
      ) : null}
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum dolorem
        vel odio quasi iure culpa repellendus molestias ratione possimus
        placeat!
      </p>

      <ModalBox
        header="Login"
        setShow={setShowLogin}
        show={showLogin}
        showConfirm={false}
      >
        <SignIn />
      </ModalBox>
      <ModalBox
        header="Signup"
        setShow={setShowSignup}
        show={showSignup}
        showConfirm={false}
      >
        <SignUp />
      </ModalBox>
    </div>
  );
}
