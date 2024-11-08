import HouseIcon from "../assets/house.svg";
import CalendarIcon from "../assets/calendar.svg";
import AddCircleIcon from "../assets/add-circle-half-dot.svg";
import PencilIcon from "../assets/pencil.svg";
import BrandKitIcon from "../assets/brand-kit.svg";
import { Button } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { addRandomVideo } from "../redux/reducers/contentsSlice";

const BottomBarSection = () => {
  const dispatch = useDispatch();

  return (
    <div
      className="md:hidden fixed bottom-0 z-20 grid grid-cols-5 w-full p-2 bg-white"
      style={{
        boxShadow:
          "0 -6px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)",
      }}
    >
      <button className="flex flex-col gap-1 items-center justify-center text-[#8D62EC]">
        <HouseIcon />
        <p className="text-xs font-bold">Beranda</p>
      </button>

      <button className="flex flex-col gap-1 items-center justify-center hover:text-[#8D62EC] font-medium hover:font-bold transition-all duration-300">
        <CalendarIcon />
        <p className="text-xs">Kelola Konten</p>
      </button>

      <div></div>

      <Button
        isIconOnly
        className="flex items-center justify-center bg-[#703BE7] rounded-full mx-auto absolute -translate-y-1/2 left-1/2 transform -translate-x-1/2 w-16 h-16"
        onClick={() => dispatch(addRandomVideo())}
      >
        <AddCircleIcon className="w-10 h-10" />
      </Button>

      <button className="flex flex-col gap-1 items-center justify-center hover:text-[#8D62EC] font-medium hover:font-bold transition-all duration-300">
        <PencilIcon />
        <p className="text-xs">AI Tools</p>
      </button>

      <button className="flex flex-col gap-1 items-center justify-center hover:text-[#8D62EC] font-medium hover:font-bold transition-all duration-300">
        <BrandKitIcon />
        <p className="text-xs">Brand Kit</p>
      </button>
    </div>
  );
};

export default BottomBarSection;
