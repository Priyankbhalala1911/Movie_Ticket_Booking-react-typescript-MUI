import { createSlice } from "@reduxjs/toolkit";

interface AuthData {
  token: string | null;
  name: string;
}

const initialState: AuthData = {
  token: localStorage.getItem("token") || null,
  name: "",
};
const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload.token;
      state.name = action.payload.name;
      localStorage.setItem("token", action.payload.token);
    },
    logOut: (state) => {
      state.token = null;
      state.name = "";
      localStorage.removeItem("token");
    },
  },
});

export const { loginSuccess, logOut } = AuthSlice.actions;
export default AuthSlice.reducer;
