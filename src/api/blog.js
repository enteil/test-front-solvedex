import axios from "../utils/axiosConfig";

export const GetPublicBlogsAPI = async () => {
  const response = await axios.get("/blog/list/public", {});
  return response.data;
};

export const GetMineBlogsAPI = async () => {
  const response = await axios.get("/blog/list/mine", {});
  return response.data;
};

export const CreateBlogAPI = async (data) => {
  const response = await axios.post("/blog/create", { data: { ...data } });
  return response.data;
};

export const UpdateBlogAPI = async (data) => {
  const response = await axios.put("/blog/update", { data: { ...data } });
  return response.data;
};

export const DeleteBlogAPI = async (data) => {
  const response = await axios.post("/blog/delete", { data: { ...data } });
  return response.data;
};
