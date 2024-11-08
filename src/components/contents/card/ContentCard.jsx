import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
  Button,
  CircularProgress,
} from "@nextui-org/react";
import ElipsisIcon from "../../../assets/elipsis.svg";
import formatDuration from "../../../helpers/formatDuration";
import PinBtn from "./button/PinBtn";

const ContentCard = ({ content }) => {
  return (
    <>
      <Card className="p-0 hover:cursor-pointer hover:scale-[1.025] transition-transform duration-300">
        <CardBody className="overflow-visible p-0 pb-2">
          <Card radius="lg" className="border-none">
            <CardHeader className="absolute z-10 top-0">
              <div className="flex justify-between grow">
                <div className="flex items-center">
                  <p
                    className={`text-tiny font-bold ${
                      content.success
                        ? "text-primary bg-primary-200"
                        : "text-danger bg-danger-200"
                    } rounded-xl px-2`}
                  >
                    {content.success ? "Complete" : "Drafted"}
                  </p>
                </div>
                <div className="flex flex-row gap-1">
                  <PinBtn id={content.id} pinned={content.pinned} />
                  <Button
                    className="bg-black bg-opacity-30 text-white"
                    size="sm"
                    isIconOnly
                  >
                    <ElipsisIcon />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <Image
              removeWrapper
              alt={content.title}
              className="z-0 h-44 object-cover"
              src={content.image}
            />
            <CardFooter className="absolute bottom-0 z-10">
              <div className="flex flex-row-reverse flex-grow">
                <p className="text-tiny text-white bg-black bg-opacity-35 rounded-xl px-2">
                  {formatDuration(content.duration)}
                </p>
              </div>
            </CardFooter>
          </Card>
        </CardBody>
        <CardFooter className="pt-2 px-4">
          <div className="flex flex-row justify-between flex-grow">
            <div>
              <p className="text-tiny capitalize font-bold">{content.title}</p>
              <small className="text-default-500">{content.typeDesc}</small>
            </div>
            <div>
              <CircularProgress
                size="lg"
                value={content.progress}
                color="secondary"
                showValueLabel={true}
              />
            </div>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default ContentCard;
