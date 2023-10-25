import { setError, clearError } from "../slices/blogSlice";
import { GetPublicBlogsAPI, GetMineBlogsAPI } from "../../api/blog";

export const GetPublicBlogsAction = () => async (dispatch) => {
  try {
    const result = await GetPublicBlogsAPI();
    if (result.statusCode === 200) {
      return result.data;
    }
  } catch (error) {
    dispatch(setError());
    setTimeout(() => {
      dispatch(clearError());
    }, 3000);
  }
};

export const GetMineBlogsAction = () => async (dispatch) => {
  try {
    const result = await GetMineBlogsAPI();
    if (result.statusCode === 200) {
      return result.data;
    }
  } catch (error) {
    dispatch(setError());
    setTimeout(() => {
      dispatch(clearError());
    }, 3000);
  }
};
