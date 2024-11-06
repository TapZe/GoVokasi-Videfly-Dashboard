import { useState } from "react";
import ContentCard from "./card/ContentCard";
import RowCard from "./card/RowCard";
import ListIcon from "../../assets/list.svg";
import FourBoxIcon from "../../assets/four-box.svg";
import { Button } from "@nextui-org/react";
import Fallback from "../Fallback";

const HistorySection = ({ contents }) => {
  const [isListed, setIsListed] = useState(false);

  // Sort contents by pinned status and creation date
  const sortContents = (a, b) => {
    // Check if both items are pinned
    if (a.pinned === b.pinned) {
      // If both are pinned or both are unpinned, sort by updated_at
      return new Date(b.updated_at) - new Date(a.updated_at); // Newest first
    }
    // Pinned items should come first
    return a.pinned ? -1 : 1;
  };

  const sortedContents = Array.from(contents || []).sort(sortContents);

  return (
    <>
      <div className="flex justify-between mb-4">
        <h2 className="text-base font-bold">History</h2>
        <Button
          className="bg-white border-2 hover:bg-[#F1EBFD] hover:text-[#8D62EC] transition-all duration-300"
          isIconOnly
          onClick={() => setIsListed(!isListed)}
        >
          {isListed ? <FourBoxIcon /> : <ListIcon />}
        </Button>
      </div>
      {isListed ? (
        <div className="flex flex-col max-h-[calc(100vh-7rem)] overflow-y-auto">
          {sortedContents?.map((content) => {
            return <RowCard key={content.id} content={content} />;
          })}
        </div>
      ) : (
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-8 max-h-[calc(100vh-7rem)] overflow-y-auto rounded-xl pb-2">
          {sortedContents?.map((content) => {
            return <ContentCard key={content.id} content={content} />;
          })}
        </div>
      )}
    </>
  );
};

export default HistorySection;
