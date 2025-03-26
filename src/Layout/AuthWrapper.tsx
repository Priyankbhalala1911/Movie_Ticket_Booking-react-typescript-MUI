import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import { RootState } from "../Store";

const AuthWrapper: React.FC = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/account/login" replace />
  );
};
export default AuthWrapper;
