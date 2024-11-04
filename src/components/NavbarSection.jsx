import {
  Badge,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import bellIcon from "../assets/bell.svg";
import { burgerBarData } from "../constants/sideBarItemsData";
import hamburgerIcon from "../assets/hamburger-menu.svg";

const NavbarSection = () => {
  return (
    <>
      <nav className="flex flex-row justify-between md:justify-end items-center py-4">
        <div className="md:hidden">
          <Dropdown>
            <DropdownTrigger>
              <Button disableRipple isIconOnly color="white">
                <img src={hamburgerIcon} className="h-5" />
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              className="w-80"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem isReadOnly key="main">
                <div className="flex justify-between">
                  <p className="font-bold text-xl">Menu</p>
                  <p className="text-orange-500 font-semibold">Sisa 5 Kredit</p>
                </div>
              </DropdownItem>
              {burgerBarData.map((item, index) => (
                <DropdownItem key={`${item.name}-${index}`}>
                  <Button
                    className="w-full justify-start"
                    variant={index === 0 ? "flat" : "light"}
                    color={
                      index === burgerBarData.length - 1
                        ? "danger"
                        : "secondary"
                    }
                  >
                    <img src={item.icon} className="h-5" /> {item.name}
                  </Button>
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>
        <div className="flex flex-row-reverse gap-x-4">
          <div className="flex flex-row-reverse gap-x-2">
            <Button
              variant="light"
              color="secondary"
              className="hidden md:flex"
            >
              Hi, Dewi Anjani
            </Button>
            <Badge content="5" color="danger">
              <Button variant="light" color="secondary" isIconOnly>
                <img src={bellIcon} className="h-10" />
              </Button>
            </Badge>
          </div>
          <Button className="bg-gradient-to-r from-orange-500 via-orange-600 to-secondary text-white shadow-lg">
            Upgrade Plan
          </Button>
          <div className="flex items-center">
            <p className="text-orange-500 font-semibold hidden md:block">
              Sisa 5 Kredit
            </p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarSection;
