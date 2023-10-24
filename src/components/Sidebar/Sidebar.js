import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname.split("/")[2]);

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
    { path: "", title: "Blogs" },
    { path: "mine-blogs", title: "My Blogs" },
  ];

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
      </div>
    </div>
  );
};

export default Sidebar;
