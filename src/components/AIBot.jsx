import { Button } from "@nextui-org/react";
import aiBot from "../assets/ai-bot.svg";

const AIBot = () => {
  return (
    <Button isIconOnly variant="solid" className="fixed bottom-4 right-4 flex justify-center items-center rounded-full p-2 bg-[#703BE7]">
      <img src={aiBot} alt="ai-bot" />
    </Button>
  );
};

export default AIBot;
