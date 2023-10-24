import { createSlice } from "@reduxjs/toolkit";
const initialState = {};
const authSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setError: (state) => {
      state.error = true;
    },
    clearError: (state) => {
      state.error = false;
    },
  },
});

export const { loginSuccess, logout, setError, clearError } = authSlice.actions;
export default authSlice.reducer;
