import { Button } from "@nextui-org/react";
import AiBot from "../assets/ai-bot.svg";

const AIBot = () => {
  return (
    <Button
      isIconOnly
      variant="solid"
      className="fixed md:bottom-4 bottom-20 right-4 z-30 flex justify-center items-center rounded-full p-2 bg-[#703BE7]"
    >
      <AiBot />
    </Button>
  );
};

export default AIBot;
