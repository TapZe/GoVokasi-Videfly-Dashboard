import { useState } from "react";
import ContentCard from "./card/ContentCard";
import RowCard from "./card/RowCard";

const HistorySection = ({ contents }) => {
  const [isListed, setIsListed] = useState(false);

  // Sort contents by pinned status and creation date
  const sortedContents = contents.sort((a, b) => {
    if (a.pinned === b.pinned) {
      return new Date(b.updated_at) - new Date(a.updated_at); // Newest first
    }
    return a.pinned ? -1 : 1; // Pinned items first
  });

  return (
    <div className="my-12">
      <div className="flex justify-between mb-4">
        <h2 className="text-base font-bold">History</h2>
        <button
          className="p-1 rounded-lg border hover:bg-[#F1EBFD] hover:text-[#8D62EC] transition-all duration-300 group"
          onClick={() => setIsListed(!isListed)}
        >
          {isListed ? (
            <svg
              fill="#000000"
              width="800px"
              height="800px"
              viewBox="0 0 256 256"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 group-hover:fill-[#8D62EC]"
            >
              <path d="M112,44H48a4,4,0,0,0-4,4v64a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V48A4,4,0,0,0,112,44Zm-4,64H52V52h56ZM208,44H144a4,4,0,0,0-4,4v64a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V48A4,4,0,0,0,208,44Zm-4,64H148V52h56Zm-92,32H48a4,4,0,0,0-4,4v64a4.0002,4.0002,0,0,0,4,4h64a4.0002,4.0002,0,0,0,4-4V144A4,4,0,0,0,112,140Zm-4,64H52V148h56Zm100-64H144a4,4,0,0,0-4,4v64a4.0002,4.0002,0,0,0,4,4h64a4.0002,4.0002,0,0,0,4-4V144A4,4,0,0,0,208,140Zm-4,64H148V148h56Z" />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 group-hover:stroke-[#8D62EC]"
            >
              <path
                d="M8 6.00067L21 6.00139M8 12.0007L21 12.0015M8 18.0007L21 18.0015M3.5 6H3.51M3.5 12H3.51M3.5 18H3.51M4 6C4 6.27614 3.77614 6.5 3.5 6.5C3.22386 6.5 3 6.27614 3 6C3 5.72386 3.22386 5.5 3.5 5.5C3.77614 5.5 4 5.72386 4 6ZM4 12C4 12.2761 3.77614 12.5 3.5 12.5C3.22386 12.5 3 12.2761 3 12C3 11.7239 3.22386 11.5 3.5 11.5C3.77614 11.5 4 11.7239 4 12ZM4 18C4 18.2761 3.77614 18.5 3.5 18.5C3.22386 18.5 3 18.2761 3 18C3 17.7239 3.22386 17.5 3.5 17.5C3.77614 17.5 4 17.7239 4 18Z"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          )}
        </button>
      </div>
      {isListed ? (
        <div className="flex flex-col max-h-[calc(100vh-7rem)] overflow-y-auto">
          {sortedContents.map((content) => {
            return <RowCard key={content.id} content={content} />;
          })}
        </div>
      ) : (
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-8 max-h-[calc(100vh-7rem)] overflow-y-auto rounded-xl pb-2">
          {sortedContents.map((content) => {
            return <ContentCard key={content.id} content={content} />;
          })}
        </div>
      )}
    </div>
  );
};

export default HistorySection;
