import axios from "../utils/axiosConfig";

export const GetPublicBlogsAPI = async () => {
  const response = await axios.get("/blog/list/public", {});
  return response.data;
};
