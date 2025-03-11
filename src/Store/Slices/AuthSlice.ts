import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthData {
  isAuthenticated: boolean;
  user: { phone: string; password: string } | null;
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
      action: PayloadAction<{ phone: string; password: string }>
    ) => {
      const { phone, password } = action.payload;
      if (phone === "123456789" && password === "Password") {
        state.isAuthenticated = true;
        state.user = { phone, password };

        localStorage.setItem("authState", JSON.stringify(state));
      } else {
        state.isAuthenticated = false;
      }
    },
  },
});

export const { login } = AuthSlice.actions;
export default AuthSlice.reducer;
