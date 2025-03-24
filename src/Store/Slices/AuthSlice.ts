import { createSlice } from "@reduxjs/toolkit";

interface AuthData {
  token: string | null;
}

const initialState: AuthData = { token: localStorage.getItem("token") || null };
const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
    logOut: (state) => {
      state.token = null;
      localStorage.removeItem("token");
    },
  },
});

export const { loginSuccess, logOut } = AuthSlice.actions;
export default AuthSlice.reducer;
