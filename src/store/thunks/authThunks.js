import { loginSuccess, setError, clearError } from "../slices/authSlice";
import { LoginAPI, CheckEmailAPI } from "../../api/auth";

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
