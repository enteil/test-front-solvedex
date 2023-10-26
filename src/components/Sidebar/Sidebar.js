import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Modal } from "../../components/Modal/Modal";
import { Button } from "../../components/Button/Button";
import { SendLogoutAction } from "../../store/thunks/authThunks";
const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname.split("/")[2]);
  const [openCloseSessionModal, setOpenCloseSessionModal] = useState(false);
  const handleClick = (path) => {
    setActivePath(path);
    navigate(`/dashboard/${path}`);
  };
  useEffect(() => {
    setActivePath(getActiveSegment(location.pathname));
  }, [location.pathname]);

  function getActiveSegment(path) {
    const segments = path.split("/");
    return segments.length > 2 ? segments[2] : "";
  }

  const routes = [
    { path: "", title: "Public Blogs" },
    { path: "mine-blogs", title: "My Blogs" },
  ];

  async function sendLogout() {
    await dispatch(SendLogoutAction());
    navigate("/login");
  }
  return (
    <div className="sidebar-component">
      <div className="sidebar-menu">
        {routes.map((route) => {
          return (
            <div
              className={`sidebar-menu-item ${
                activePath === route.path ? "active" : ""
              }`}
              key={route.path}
              onClick={() => handleClick(route.path)}
            >
              {route.title}
            </div>
          );
        })}
        <div
          className={"sidebar-menu-item"}
          onClick={() => setOpenCloseSessionModal(true)}
        >
          Log out
        </div>
      </div>
      <Modal
        open={openCloseSessionModal}
        handleClose={() => setOpenCloseSessionModal(false)}
      >
        <div className="modal-reply-content">
          <h2>Are you sure you want to log out?</h2>
          <div className="">
            <Button
              label="Yes"
              variant="primary"
              onClick={() => sendLogout()}
            />
            <Button
              label="No"
              variant="primary"
              onClick={() => setOpenCloseSessionModal(false)}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Sidebar;
