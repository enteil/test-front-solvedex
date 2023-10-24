import { setError, clearError } from "../slices/blogSlice";
import { GetPublicBlogsAPI } from "../../api/blog";

export const GetPublicBlogsAction =
  ({ email }) =>
  async (dispatch) => {
    try {
      const result = await GetPublicBlogsAPI({ email });
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
