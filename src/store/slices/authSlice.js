import { createSlice } from "@reduxjs/toolkit";
import {
  deleteToken,
  deleteUser,
  setToken,
  setUser,
  getToken,
  getUser,
} from "../../helpers/localStorageHelper";
const initialState = {
  token: getToken() || null,
  user: getUser() || null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      setToken(action.payload.token);
      setUser(action.payload.user);
    },
    logoutSuccess: (state) => {
      state.token = null;
      deleteToken();
      deleteUser();
    },
    setError: (state) => {
      state.error = true;
    },
    clearError: (state) => {
      state.error = false;
    },
  },
});

export const { loginSuccess, logoutSuccess, setError, clearError } =
  authSlice.actions;
export default authSlice.reducer;
