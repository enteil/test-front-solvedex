import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import snackbarSlice from "./slices/snackbarSlice";
import thunk from "redux-thunk";
import blogSlice from "./slices/blogSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    snackbar: snackbarSlice,
    blog: blogSlice,
  },
  middleware: [thunk],
});
