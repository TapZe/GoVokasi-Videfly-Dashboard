import { Button, Card, CardFooter, CardHeader } from "@nextui-org/react";
import VideoIcon from "../assets/video.svg";
import LinesFileIcon from "../assets/lines-file.svg";
import SpeakIcon from "../assets/speak.svg";
import UserStarIcon from "../assets/user-star.svg";
import {
  addAIAvatar,
  addSpeechToVideo,
  addTextToVideo,
  addURLToVideo,
} from "../redux/reducers/contentsSlice";
import { useDispatch } from "react-redux";

const HeroSection = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex flex-col mx-6 gap-6">
        <Card className="w-full h-40 col-span-12 sm:col-span-7 overflow-visible">
          <CardHeader className="absolute z-10 flex flex-grow bottom-0 top-0 items-center justify-center flex-col">
            <h4 className="text-white font-medium text-large xs:text-xl md:text-2xl capitalize text-center md:-translate-y-1/2">
              Mulai kreasi baru kamu hari ini!
            </h4>
          </CardHeader>
          <div className="absolute inset-0 bg-gradient-to-r from-violet-700 to-blue-600 z-0 rounded-xl" />
          <CardFooter className="absolute bg-white z-10 rounded-xl bottom-0 translate-y-1/2 border-1 xl:left-[20%] xl:w-[60%] lg:left-[12.5%] lg:w-[75%] hidden md:block">
            <div className="flex flex-row items-center grow justify-around">
              <Button
                variant="light"
                className="px-1"
                onClick={() => dispatch(addURLToVideo())}
              >
                <VideoIcon />
                URL to Video
              </Button>
              <Button
                variant="light"
                className="px-1"
                onClick={() => dispatch(addTextToVideo())}
              >
                <LinesFileIcon />
                Text to Video
              </Button>
              <Button
                variant="light"
                className="px-1"
                onClick={() => dispatch(addSpeechToVideo())}
              >
                <SpeakIcon />
                Speech to Video
              </Button>
              <Button
                variant="light"
                className="px-1"
                onClick={() => dispatch(addAIAvatar())}
              >
                <UserStarIcon />
                AI Avatar
              </Button>
            </div>
          </CardFooter>
        </Card>
        <div className="flex flex-row items-center grow justify-between md:hidden">
          <div className="flex flex-col gap-1 justify-center items-center">
            <Button
              isIconOnly
              radius="full"
              size="lg"
              className="bg-violet-500 text-white"
              onClick={() => dispatch(addURLToVideo())}
            >
              <VideoIcon />
            </Button>
            <p className="text-xs font-bold text-center">URL to Video</p>
          </div>
          <div className="flex flex-col gap-1 justify-center items-center">
            <Button
              isIconOnly
              radius="full"
              size="lg"
              className="text-white bg-gray-500"
              onClick={() => dispatch(addTextToVideo())}
            >
              <LinesFileIcon />
            </Button>
            <p className="text-xs font-bold text-center">Text to Video</p>
          </div>
          <div className="flex flex-col gap-1 justify-center items-center">
            <Button
              isIconOnly
              radius="full"
              size="lg"
              className="bg-orange-500 text-white"
              onClick={() => dispatch(addSpeechToVideo())}
            >
              <SpeakIcon />
            </Button>
            <p className="text-xs font-bold text-center">Speech to Video</p>
          </div>
          <div className="flex flex-col gap-1 justify-center items-center">
            <Button
              isIconOnly
              radius="full"
              size="lg"
              className="bg-green-600 text-white"
              onClick={() => dispatch(addAIAvatar())}
            >
              <UserStarIcon />
            </Button>
            <p className="text-xs font-bold text-center">AI Avatar</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
