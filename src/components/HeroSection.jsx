import { Button, Card, CardFooter, CardHeader } from "@nextui-org/react";
import videoIcon from "../assets/video.svg";
import linesFileIcon from "../assets/lines-file.svg";
import speakIcon from "../assets/speak.svg";
import userStarIcon from "../assets/user-star.svg";

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
          <CardFooter className="absolute bg-white z-10 rounded-xl bottom-0 left-1/4 w-1/2 translate-y-1/2 border-1">
            <div className="flex flex-row gap-2 items-center grow justify-around">
              <Button variant="light">
                <img src={videoIcon} alt="..." className="h-5" />
                URL to Video
              </Button>
              <Button variant="light">
                <img src={linesFileIcon} alt="..." className="h-5" />
                Text to Video
              </Button>
              <Button variant="light">
                <img src={speakIcon} alt="..." className="h-5" />
                Speak to Video
              </Button>
              <Button variant="light">
                <img src={userStarIcon} alt="..." className="h-5" />
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
