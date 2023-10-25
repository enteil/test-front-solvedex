import { setError, clearError } from "../slices/blogSlice";
import {
  GetCommentsAPI,
  CreateCommentsAPI,
  UpdateCommentsAPI,
  DeleteCommentsAPI,
} from "../../api/comment";

export const GetCommentsAction = (data) => async (dispatch) => {
  try {
    const result = await GetCommentsAPI(data);
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
export const CreateCommentAction = (data) => async (dispatch) => {
  try {
    const result = await CreateCommentsAPI(data);
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
export const UpdateCommentAction = (data) => async (dispatch) => {
  try {
    const result = await UpdateCommentsAPI(data);
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
export const DeleteCommentAction = (data) => async (dispatch) => {
  try {
    const result = await DeleteCommentsAPI(data);
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
