import axios from "../utils/axiosConfig";

export const GetCommentsAPI = async (data) => {
  const response = await axios.post("/comment/getByBlogId", { data: data });
  return response.data;
};

export const CreateCommentsAPI = async (_data) => {
  const response = await axios.post("/comment/create", { data: _data });
  return response.data;
};

export const UpdateCommentsAPI = async (_data) => {
  const response = await axios.put("/comment/update", { data: _data });
  return response.data;
};

export const DeleteCommentsAPI = async (_data) => {
  const response = await axios.post("/comment/delete", {
    data: _data,
  });

  return response.data;
};
