import { Button, Card, CardFooter, CardHeader } from "@nextui-org/react";
import VideoIcon from "../assets/video.svg";
import LinesFileIcon from "../assets/lines-file.svg";
import SpeakIcon from "../assets/speak.svg";
import UserStarIcon from "../assets/user-star.svg";

const HeroSection = () => {
  return (
    <>
      <div className="container mx-auto">
        <Card className="w-full h-40 col-span-12 sm:col-span-7 overflow-visible">
          <CardHeader className="absolute z-10 flex flex-grow bottom-0 top-0 items-center justify-center flex-col">
            <h4 className="text-white font-medium text-2xl capitalize">
              Mulai kreasi baru kamu hari ini!
            </h4>
          </CardHeader>
          <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary z-0 rounded-xl" />
          <CardFooter className="absolute bg-white z-10 rounded-xl bottom-0 translate-y-1/2 border-1 xl:left-[20%] xl:w-[60%] lg:left-[12.5%] lg:w-[75%]">
            <div className="flex flex-row items-center grow justify-around">
              <Button variant="light" className="px-1">
                <VideoIcon />
                URL to Video
              </Button>
              <Button variant="light" className="px-1">
                <LinesFileIcon />
                Text to Video
              </Button>
              <Button variant="light" className="px-1">
                <SpeakIcon />
                Speak to Video
              </Button>
              <Button variant="light" className="px-1">
                <UserStarIcon />
                AI Avatar
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default HeroSection;
