import { Button, Card, CardFooter, CardHeader } from "@nextui-org/react";
import videoLogo from "../assets/video-svgrepo-com.svg";
import linesFileLogo from "../assets/lines-file-svgrepo-com.svg";
import speakLogo from "../assets/speak-svgrepo-com.svg";
import userStarLogo from "../assets/user-star-svgrepo-com.svg";

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
                <img src={videoLogo} alt="..." className="h-5" />
                URL to Video
              </Button>
              <Button variant="light">
                <img src={linesFileLogo} alt="..." className="h-5" />
                Text to Video
              </Button>
              <Button variant="light">
                <img src={speakLogo} alt="..." className="h-5" />
                Speak to Video
              </Button>
              <Button variant="light">
                <img src={userStarLogo} alt="..." className="h-5" />
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
