import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "./Store/Slices/AuthSlice";

export const AuthHandler = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuthState = () => {
      const userData = localStorage.getItem("user");
      if (userData) {
        dispatch(loginSuccess(JSON.parse(userData)));
      }
    };
    checkAuthState();
  }, [dispatch]);

  return null;
};
