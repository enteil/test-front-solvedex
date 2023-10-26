const TOKEN_KEY = "token";
const USER_KEY = "user";

export const setToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const setUser = (user) => {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem(USER_KEY));
};

export const deleteToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const deleteUser = () => {
  localStorage.removeItem(USER_KEY);
};
