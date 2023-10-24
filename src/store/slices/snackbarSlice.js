import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isOpen: false,
  message: "",
};
export const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    showSnackbar: (state, action) => {
      state.isOpen = true;
      state.message = action.payload;
    },
    hideSnackbar: (state) => {
      state.isOpen = false;
      state.message = "";
    },
  },
});

export const { showSnackbar, hideSnackbar } = snackbarSlice.actions;

export default snackbarSlice.reducer;
