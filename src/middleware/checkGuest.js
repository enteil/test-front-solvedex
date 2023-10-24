import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../helpers/localStorageHelper";
const CheckGuest = ({ children }) => {
  const navigate = useNavigate();
  const token = getToken();
  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, [token, navigate]);
  if (token) return null;
  return children;
};
export default CheckGuest;
