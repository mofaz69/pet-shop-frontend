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
    // TODO: logout also from the server
    //axios
  };

  const login = async (email, password) => {
    const response = await fetch("http://localhost:3001/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (response.status !== 200) {
      throw new Error(data.message);
    }

    setUser(data);
    setIsLoggedIn(true);
  };

  const value = { isLoggedIn, user, logout, login };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
