import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import "../layouts/Dashboard.css";
import Menu from "../pages/Dashboard/Menu";

const Dashboard = () => {
  //Dashboard Menu
  const menuComponent = <Menu />;

  return (
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row w-full">
      <Helmet>
        <title>Dashboard | bdEcommerce</title>
      </Helmet>

      {/* Dashboard Sidebar */}
      <div className="w-full lg:w-3/12 ">
        <div className="text-md font-workSans flex flex-col lg:flex-row gap-2 lg:px-2 px-4 py-4 ">
          <ul className="sidebar flex flex-col gap-2 font-medium w-full ">
            {menuComponent}
          </ul>
        </div>
      </div>

      {/* Dashboard Contents */}
      <div className="w-full lg:w-9/12 flex p-4 bg-white">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
