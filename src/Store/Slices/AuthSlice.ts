import { createSlice } from "@reduxjs/toolkit";
import cookie from "js-cookie";

interface AuthData {
  token: string | null;
  name: string;
}

const initialState: AuthData = {
  token: cookie.get("token") || null,
  name: "",
};
const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload.token;
      state.name = action.payload.name;
      cookie.set(
        "token",
        JSON.stringify({
          token: action.payload.token,
          name: action.payload.name,
        })
      );
    },
    logOut: (state) => {
      state.token = null;
      state.name = "";
      cookie.remove("token");
    },
  },
});

export const { loginSuccess, logOut } = AuthSlice.actions;
export default AuthSlice.reducer;
