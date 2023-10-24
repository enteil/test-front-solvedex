import axios from "../utils/axiosConfig";

export const LoginAPI = async (credentials) => {
  const response = await axios.post("/auth/login", { data: credentials });
  return response.data;
};

export const CheckEmailAPI = async ({ email }) => {
  const response = await axios.post("/auth/check/username", {
    data: { email },
  });
  return response.data;
};
