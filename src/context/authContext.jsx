import React, { useState } from "react";
import { domain } from "../constants";

const defaultState = {
  isLoggedIn: false,
  user: undefined,
};
export const AuthContext = React.createContext(defaultState);

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logout = () => {
    setIsLoggedIn(false);
    setUser();
  };

  const login = async (email, password) => {
    const response = await fetch(`${domain}/user/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (response.status !== 200) {
      throw new Error(data.message);
    }

    setUser(data);
    setIsLoggedIn(true);
  };

  const signup = async ({
    email,
    password,
    passwordRepeat,
    firstName,
    lastName,
    phoneNumber,
  }) => {
    const response = await fetch(`${domain}/user/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
        passwordRepeat,
        firstName,
        lastName,
        phoneNumber,
      }),
    });
    const data = await response.json();
    console.log(response.status);
    if (response.status !== 200) {
      throw new Error(data.message);
    }

    setUser(data);
    setIsLoggedIn(true);
  };

  const updateUser = async (updatedUserData) => {
    const response = await fetch(`${domain}/user/${user._id}`, {
      method: "PUT",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedUserData),
    });

    const data = await response.json();
    console.log(response.status);
    if (response.status !== 200) {
      throw new Error(data.message);
    }

    setUser(data);
  };

  const value = {
    isLoggedIn,
    user,
    logout,
    login,
    signup,
    setUser,
    updateUser,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
