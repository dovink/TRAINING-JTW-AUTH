import React from "react";
import { Routes } from "./Navigation/router";
import { UserProvider } from "./context/UserContext";

const App = () => {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
};

export default App;
