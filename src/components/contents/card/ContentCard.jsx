import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
  Button,
} from "@nextui-org/react";

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
                  <FontAwesomeIcon icon={faEllipsis} />
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
        <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">Daily Mix</p>
          <small className="text-default-500">12 Tracks</small>
          <h4 className="font-bold text-large">Frontend Radio</h4>
        </CardFooter>
      </Card>
    </>
  );
};

export default ContentCard;
