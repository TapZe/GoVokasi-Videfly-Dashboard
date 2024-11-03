import { Outlet } from "react-router-dom";
import Sidebar from "../components/contents/Sidebar";

const MainLayout = () => {
  return (
    <>
      <div className="flex flex-grow min-h-screen">
        <div className="flex flex-row gap-x-4">
          <div>
            {/* <div className="sidebar">This is the side bar</div> */}
            <Sidebar />
          </div>
          <div className="flex flex-col flex-grow">
            <div>this is the nav bar</div>
            <div>this is the hero</div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
