import React, { useContext, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import Topbar from "./Topbar";
import { UserContext } from "../../context/UserContext";

const AuthLayout = () => {
  const { user, isTokenExpired } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user || !isTokenExpired()) {
      navigate("/", { replace: true });
    }
  }, [user, isTokenExpired, navigate]);

  return (
    <>
      <Outlet />
    </>
  );
};

export default AuthLayout;
