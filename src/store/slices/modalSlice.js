// modalSlice.js
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isOpen: false,
  message: "",
};
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state, action) => {
      state.isOpen = true;
      state.message = action.payload;
    },
    hideModal: (state) => {
      state.isOpen = false;
      state.message = "";
    },
  },
});

export const { showModal, hideModal } = modalSlice.actions;
export default modalSlice.reducer;
