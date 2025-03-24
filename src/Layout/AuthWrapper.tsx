import React from "react";
import { Navigate, Outlet } from "react-router";
import cookie from "js-cookie";

const AuthWrapper: React.FC = () => {
  const token = cookie.get("token");

  return token ? <Outlet /> : <Navigate to="/account/login" />;
};
export default AuthWrapper;
