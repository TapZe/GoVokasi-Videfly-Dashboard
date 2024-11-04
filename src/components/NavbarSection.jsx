import {
  Badge,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import BellIcon from "../assets/bell.svg";
import HamburgerIcon from "../assets/hamburger-menu.svg";
import useHamBarItem from "../hooks/useHamBarItem";
import { useState } from "react";

const NavbarSection = () => {
  const burgerBarData = useHamBarItem();
  const [selectedKeys, setSelectedKeys] = useState("0");

  return (
    <>
      <nav className="flex flex-row justify-between md:justify-end items-center py-4">
        <div className="md:hidden">
          <Dropdown>
            <DropdownTrigger>
              <Button disableRipple isIconOnly color="white">
                <HamburgerIcon />
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              className="w-80"
              itemClasses={{
                base: "gap-4",
              }}
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={selectedKeys}
              onSelectionChange={setSelectedKeys}
              hideSelectedIcon
            >
              <DropdownItem isReadOnly key="main">
                <div className="flex justify-between">
                  <p className="font-bold text-xl">Menu</p>
                  <p className="text-orange-500 font-semibold">Sisa 5 Kredit</p>
                </div>
              </DropdownItem>
              {burgerBarData.map((item, index) => (
                <DropdownItem
                  key={index}
                  color={
                    index === burgerBarData.length - 1 ? "danger" : "secondary"
                  }
                  className={
                    index === burgerBarData.length - 1 && "text-danger"
                  }
                  variant="flat"
                >
                  <div className="flex gap-2 py-2">
                    {item.icon} {item.name}
                  </div>
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
                <BellIcon />
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
