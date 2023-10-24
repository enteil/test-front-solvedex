import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../helpers/localStorageHelper";

const CheckAuth = ({ children }) => {
  const navigate = useNavigate();
  const token = getToken();
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);
  if (!token) return null;
  return children;
};
export default CheckAuth;
