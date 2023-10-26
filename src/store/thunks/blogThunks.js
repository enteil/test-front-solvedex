import { setError, clearError } from "../slices/blogSlice";
import {
  GetPublicBlogsAPI,
  GetMineBlogsAPI,
  CreateBlogAPI,
  UpdateBlogAPI,
  DeleteBlogAPI,
} from "../../api/blog";

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

export const CreateBlogAction = (data) => async (dispatch) => {
  try {
    const result = await CreateBlogAPI(data);
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

export const UpdateBlogAction = (data) => async (dispatch) => {
  try {
    const result = await UpdateBlogAPI(data);
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

export const DeleteBlogAction = (data) => async (dispatch) => {
  try {
    const result = await DeleteBlogAPI(data);
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
