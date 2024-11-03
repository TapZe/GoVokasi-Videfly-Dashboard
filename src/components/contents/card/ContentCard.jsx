import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
  Button,
  CircularProgress,
} from "@nextui-org/react";
import elipsis from "../../../assets/elipsis-svgrepo-com.svg";

const ContentCard = () => {
  return (
    <>
      <Card className="p-0">
        <CardBody className="overflow-visible p-0 pb-2">
          <Card radius="lg" className="border-none">
            <CardHeader className="absolute z-10 top-0">
              <div className="flex justify-between grow">
                <div className="flex items-center">
                  <p className="text-tiny font-bold text-danger bg-danger-200 rounded-xl px-2">
                    Drafted
                  </p>
                </div>
                <Button
                  className="bg-black bg-opacity-30 text-white text-large"
                  size="sm"
                >
                  <img src={elipsis} className="h-5" />
                </Button>
              </div>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-64 h-44 object-cover"
              src="https://nextui.org/images/card-example-6.jpeg"
            />
            <CardFooter className="absolute bottom-0 z-10">
              <div className="flex flex-row-reverse flex-grow">
                <p className="text-tiny text-white bg-black bg-opacity-35 rounded-xl px-2">
                  00:30
                </p>
              </div>
            </CardFooter>
          </Card>
        </CardBody>
        <CardFooter className="pt-2 px-4">
          <div className="flex flex-row justify-between flex-grow">
            <div>
              <p className="text-tiny capitalize font-bold">The New Cannon</p>
              <small className="text-default-500">URL to Video</small>
            </div>
            <div>
              <CircularProgress
                size="lg"
                value={70}
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
