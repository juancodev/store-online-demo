import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAPI } from "hooks/useAPI";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [userAuth, setUserAuth] = useState([]);

  const logout = () => {
    console.log('logout');
  };

  const authObject = { userAuth, setUserAuth, logout };

  return (
    <AuthContext.Provider value={authObject}>
      {children}
    </AuthContext.Provider>
  )

}

export { AuthProvider, AuthContext };