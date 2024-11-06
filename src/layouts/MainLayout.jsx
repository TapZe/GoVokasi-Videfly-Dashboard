import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import NavbarSection from "../components/NavbarSection";
import HeroSection from "../components/HeroSection";
import AIBot from "../components/AIBot";

const MainLayout = () => {
  return (
    <>
      <div className="min-h-screen">
        <div className="flex flex-row">
          <div className="flex-grow-0">
            <Sidebar />
          </div>
          <div className="flex flex-col flex-grow sm:container sm:mx-auto sm:px-6">
            <div className="flex flex-col sm:from-white bg-gradient-to-b from-violet-300 via-violet-200 to-white px-3">
              <NavbarSection />
              <HeroSection />
            </div>
            <div className="px-6 sm:px-0 my-12">
              <Outlet />
            </div>
          </div>
          <AIBot />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
