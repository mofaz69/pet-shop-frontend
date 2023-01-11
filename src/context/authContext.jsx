import React, { useState } from "react";

// default state - not logged in
export const AuthContext = React.createContext({
  isLoggedIn: false,
  user: undefined,
});

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logout = () => {
    setIsLoggedIn(false);
    setUser();
  };

  const login = async (email, password) => {
    const response = await fetch("http://localhost:3001/user/login", {
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
    const response = await fetch("http://localhost:3001/user/signup", {
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

  const value = { isLoggedIn, user, logout, login, signup, setUser };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
