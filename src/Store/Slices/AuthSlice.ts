import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  profilePicture: string | null;
}

const initialState: AuthState = {
  isAuthenticated: !!localStorage.getItem("user"),
  profilePicture: localStorage.getItem("user"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state) => {
      state.isAuthenticated = true;
      const user = localStorage.getItem("user");
      state.profilePicture = user ? JSON.parse(user).image : null;
    },
    logoutUser: (state) => {
      state.isAuthenticated = false;
      state.profilePicture = null;
      localStorage.removeItem("user");
    },
  },
});

export const { loginSuccess, logoutUser } = authSlice.actions;
export default authSlice.reducer;
