import React from "react";
import { useState } from "react";

export const LoggedIn = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const handleLogin = () => {
    setisLoggedIn(true)
  }
  const handleLogout = () => {
    setisLoggedIn(0)
  }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div> User is {isLoggedIn.length ? 'logged in' : 'logged out'}</div>
    </div>
  );
}
