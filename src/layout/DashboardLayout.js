import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Sidebar from "../components/Sidebar/Sidebar";
import { Title } from "../components/Title/Title";
const DashboardLayout = () => {
  const userState = useSelector((state) => state.auth);
  return (
    <div className="dashboard-layout">
      <div className="dashboard-navbar">
        <Title
          name={`Wellcome ${userState.user.names} ${
            userState.user.lastNames ? userState.user.lastNames : ""
          }`}
        />
      </div>
      <div className="dashboard-content">
        <div className="slider-box">
          <Sidebar />
        </div>
        <div className="content-box">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default DashboardLayout;
