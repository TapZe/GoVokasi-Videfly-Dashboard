import logo from "../assets/videfly-logo.png";
import AddCircleIcon from "../assets/add-circle-half-dot.svg";
import HouseIcon from "../assets/house.svg";
import CalendarIcon from "../assets/calendar.svg";
import ProjectIcon from "../assets/project.svg";
import PencilIcon from "../assets/pencil.svg";
import UserStarIcon from "../assets/user-star.svg";
import BrandKitIcon from "../assets/brand-kit.svg";
import SettingIcon from "../assets/setting.svg";
import LogoutIcon from "../assets/logout.svg";
import { Button } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { addRandomVideo } from "../redux/reducers/contentsSlice";

const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <div className="sticky left-0 top-0 w-[200px] lg:w-[260px] h-screen hidden md:flex flex-col gap-16 px-4 py-6 border-r-2 border-[#ECECEC] items-center">
      <img src={logo} alt="videfly-logo" />

      <Button
        className="w-full flex gap-3 py-5 rounded-xl bg-[#703BE7] text-white justify-center"
        onClick={() => dispatch(addRandomVideo())}
      >
        <div className="font-semibold">Buat Video</div>
        <AddCircleIcon />
      </Button>

      <div className="flex flex-col gap-1 w-full ">
        <button className="flex gap-4 py-2 px-4 bg-[#F1EBFD] text-[#8D62EC] font-bold text-left items-center rounded-xl">
          <HouseIcon />
          <div className="text-sm">Beranda</div>
        </button>

        <button className="flex gap-4 py-2 px-4 hover:bg-[#F1EBFD] hover:text-[#8D62EC] font-semibold text-left items-center rounded-xl transition-all duration-300">
          <CalendarIcon />
          <div className="text-sm">Kelola Konten</div>
        </button>

        <button className="flex gap-4 py-2 px-4 hover:bg-[#F1EBFD] hover:text-[#8D62EC] font-semibold text-left items-center rounded-xl transition-all duration-300">
          <ProjectIcon />
          <div className="text-sm">Proyek</div>
        </button>

        <button className="flex gap-4 py-2 px-4 hover:bg-[#F1EBFD] hover:text-[#8D62EC] font-semibold text-left items-center rounded-xl transition-all duration-300">
          <PencilIcon />
          <div className="text-sm">AI Tools</div>
        </button>

        <button className="flex gap-4 py-2 px-4 hover:bg-[#F1EBFD] hover:text-[#8D62EC] font-semibold text-left items-center rounded-xl transition-all duration-300">
          <UserStarIcon />
          <div className="text-sm">Avatars</div>
        </button>

        <button className="flex gap-4 py-2 px-4 hover:bg-[#F1EBFD] hover:text-[#8D62EC] font-semibold text-left items-center rounded-xl transition-all duration-300">
          <BrandKitIcon />
          <div className="text-sm">Brand Kit</div>
        </button>
      </div>

      <div className="flex flex-col gap-2 w-full">
        <button className="flex gap-4 py-2 px-4 hover:bg-[#F1EBFD] hover:text-[#8D62EC] font-semibold text-left items-center rounded-xl transition-all duration-300">
          <SettingIcon />
          <div className="text-sm">Pengaturan</div>
        </button>

        <button className="flex gap-4 py-2 px-4 hover:bg-[#FDD0DF] text-[#FF6D6D] font-semibold text-left items-center rounded-xl transition-all duration-300">
          <LogoutIcon />
          <div className="text-sm">Keluar</div>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
