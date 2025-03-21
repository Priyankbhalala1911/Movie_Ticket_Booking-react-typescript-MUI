import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthData {
  isAuthenticated: boolean;
  user: { email: string; password: string } | null;
}

const storesAuth = localStorage.getItem("authState");

const initialState: AuthData = storesAuth
  ? JSON.parse(storesAuth)
  : {
      isAuthenticated: false,
      user: null,
    };
const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ email: string; password: string }>
    ) => {
      const { email, password } = action.payload;
      if (email === "admin@gmail.com" && password === "Password") {
        state.isAuthenticated = true;
        state.user = { email, password };

        localStorage.setItem("authState", JSON.stringify(state));
      } else {
        state.isAuthenticated = false;
      }
    },
  },
});

export const { login } = AuthSlice.actions;
export default AuthSlice.reducer;
