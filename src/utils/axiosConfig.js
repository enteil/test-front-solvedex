import axios from "axios";
import { showSnackbar } from "../store/slices/snackbarSlice";
import { getToken } from "../helpers/localStorageHelper";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_URL}/api/v1`,
});

instance.interceptors.request.use((config) => {
  const store = require("../store").store;
  const state = store.getState();
  let token = state?.auth?.token ? state?.auth?.token : getToken();

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
    config.headers["lang"] = "es";
  }

  return config;
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    const store = require("../store").store;
    if (error.response && error.response.status !== 200) {
      const errorMessage = error.response.data.message || "An error occurred.";
      store.dispatch(showSnackbar(errorMessage));
    }
    return Promise.reject(error);
  }
);

export default instance;
