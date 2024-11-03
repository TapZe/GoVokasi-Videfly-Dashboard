import { Badge, Button } from "@nextui-org/react";
import bellIcon from "../assets/bell.svg";

const NavbarSection = () => {
  return (
    <>
      <nav className="flex flex-row-reverse py-4 gap-x-4">
        <div className="flex flex-row-reverse gap-x-2">
          <Button variant="light" color="secondary">
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
          <p className="text-orange-500 font-semibold">Sisa 5 Kredit</p>
        </div>
      </nav>
    </>
  );
};

export default NavbarSection;
