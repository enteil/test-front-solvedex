import { useSelector } from "react-redux";
export const UseHasPermission = (permission) => {
  const permissions = useSelector((state) => state.auth?.user?.permissions);
  return permissions ? permissions.some((perm) => perm === permission) : false;
};
