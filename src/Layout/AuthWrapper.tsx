import React from "react";
import { Navigate, Outlet } from "react-router";

const AuthWrapper: React.FC = () => {
  const token = localStorage.getItem("token");

  return token ? <Outlet /> : <Navigate to="/account/login" />;
};
export default AuthWrapper;
