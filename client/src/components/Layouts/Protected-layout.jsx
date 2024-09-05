import React, { useContext, useEffect } from "react";
import Topbar from "./Topbar";
import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { ROUTES } from "../../Navigation/conts";

const ProtectedLayout = () => {
  const { user, isTokenExpired, logout } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || isTokenExpired()) {
      logout();
      navigate(ROUTES.LOGIN, { replace: true });
    }
  }, [user, isTokenExpired, logout, navigate]);

  if (!user || isTokenExpired()) {
    return <></>;
  }

  return (
    <>
      <Topbar />
      <Outlet />
    </>
  );
};

export default ProtectedLayout;
