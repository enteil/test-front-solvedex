import {
  loginSuccess,
  logoutSuccess,
  setError,
  clearError,
} from "../slices/authSlice";
import {
  LoginAPI,
  CheckEmailAPI,
  LogoutAPI,
  RegisterAPI,
} from "../../api/auth";

export const LoginAction = (credentials, navigate) => async (dispatch) => {
  try {
    const result = await LoginAPI(credentials);
    if (result.statusCode === 200) {
      dispatch(loginSuccess(result.data));
      navigate("/dashboard");
    }
  } catch (error) {
    dispatch(setError());
    setTimeout(() => {
      dispatch(clearError());
    }, 3000);
  }
};
export const CheckEmailAction =
  ({ email }) =>
  async (dispatch) => {
    try {
      const result = await CheckEmailAPI({ email });
      if (result.statusCode === 200) {
        return result;
      }
    } catch (error) {
      dispatch(setError());
      setTimeout(() => {
        dispatch(clearError());
      }, 3000);
    }
  };

export const SendLogoutAction = (navigate) => async (dispatch) => {
  try {
    const result = await LogoutAPI();
    if (result.statusCode === 200) {
      dispatch(logoutSuccess());
      return;
    }
  } catch (error) {
    dispatch(setError());
    setTimeout(() => {
      dispatch(clearError());
    }, 3000);
  }
};

export const RegisterAction = (data, navigate) => async (dispatch) => {
  try {
    const result = await RegisterAPI(data);
    if (result.statusCode === 200) {
      dispatch(loginSuccess(result.data));
      navigate("/dashboard");
    }
  } catch (error) {
    dispatch(setError());
    setTimeout(() => {
      dispatch(clearError());
    }, 3000);
  }
};
