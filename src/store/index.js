import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import snackbarSlice from "./slices/snackbarSlice";
import blogSlice from "./slices/blogSlice";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    snackbar: snackbarSlice,
    blog: blogSlice,
  },
  middleware: [thunk],
});
