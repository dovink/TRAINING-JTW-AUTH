import React, { createContext } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { jwtDecode } from "jwt-decode";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const [token, setToken] = useLocalStorage("token", null);

  const login = (loginResponse) => {
    setUser(loginResponse.user);
    setToken(loginResponse.token);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
  };

  const isTokenExpired = () => {
    if (!token) return true;
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return decodedToken.exp < currentTime;
  };

  return (
    <UserContext.Provider
      value={{ user, token, login, logout, isTokenExpired }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
