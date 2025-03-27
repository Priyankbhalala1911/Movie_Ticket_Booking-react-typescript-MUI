import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess, logoutUser } from "./Store/Slices/AuthSlice";
import axios from "axios";

export const AuthHandler = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuthState = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_API_BASE_URL}/me`,
          { withCredentials: true }
        );

        dispatch(loginSuccess({ name: response.data }));
      } catch (err) {
        dispatch(logoutUser());
        console.log(err);
      }
    };

    checkAuthState();
  }, [dispatch]);

  return null;
};
