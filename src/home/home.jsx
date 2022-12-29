import React, { useState } from "react";
import { ModalBox } from "../components/Modal/Modal";
import Profile from "../Profile/Profile";
import Search from "../Search/Search";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import "./Home.css";

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div>
      <h1>Welcome to X</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum dolorem
        vel odio quasi iure culpa repellendus molestias ratione possimus
        placeat!
      </p>

      <button onClick={() => setShowLogin(true)}>Login</button>
      <button onClick={() => setShowSignup(true)}>Signup</button>

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
