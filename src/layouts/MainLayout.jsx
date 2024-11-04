import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import NavbarSection from "../components/Navbar";
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
          <div className="flex flex-col flex-grow container mx-auto px-6">
            <NavbarSection />
            <HeroSection />
            <Outlet />
          </div>
          <AIBot />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
