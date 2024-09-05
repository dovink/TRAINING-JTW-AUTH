import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { ROUTES } from "../../Navigation/conts";

const Topbar = () => {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logout();
    navigate(ROUTES.LOGIN);
  };
  return (
    <header>
      <button
        onClick={() => {
          handleLogOut();
        }}
      >
        Logout
      </button>
    </header>
  );
};

export default Topbar;
