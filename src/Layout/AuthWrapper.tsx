import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../Store";
import { Outlet, useLocation, useNavigate } from "react-router";

const AuthWrapper: React.FC = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/account/login", { state: { from: location.pathname } });
    }
  }, [isAuthenticated, navigate, location]);
  return isAuthenticated ? <Outlet /> : null;
};
export default AuthWrapper;
