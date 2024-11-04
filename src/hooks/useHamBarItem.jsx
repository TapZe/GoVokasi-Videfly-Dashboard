import HouseIcon from "../assets/house.svg";
import UserStarIcon from "../assets/user-star.svg";
import SettingIcon from "../assets/setting.svg";
import ProjectIcon from "../assets/project.svg";
import LogoutIcon from "../assets/logout.svg";

const useHamBarItem = () => {
  const burgerBarData = [
    { name: "Beranda", icon: <HouseIcon /> },
    { name: "Proyek", icon: <ProjectIcon /> },
    { name: "Avatar", icon: <UserStarIcon /> },
    { name: "Pengaturan", icon: <SettingIcon /> },
    { name: "Keluar", icon: <LogoutIcon /> },
  ];
  return burgerBarData;
};

export default useHamBarItem;
