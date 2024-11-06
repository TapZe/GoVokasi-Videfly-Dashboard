import formatHistory from "../../../helpers/formatHistory";
import PinBtn from "./button/pinBtn";

const RowCard = ({ content }) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 py-5 items-center text-xs border-b-1 border-[#00000033]">
        <div className="flex gap-8 px-3 items-center">
          <img
            src={content.image}
            alt={content.title}
            className="w-24 h-16 object-cover rounded-md"
          />

          <div className="font-bold text-[#584F6A]">{content.title}</div>
        </div>
        <div className="grid grid-cols-4 gap-4 px-3 text-center items-center">
          <div className="text-[#584F6A] font-medium">{content.typeDesc}</div>
          <div className="text-[#584F6A] font-medium">
            {formatHistory(content.updated_at)}
          </div>
          <div
            className={`${
              content.success
                ? "text-[#65B9E7] font-bold"
                : "text-[#FE846F] font-medium"
            }  text-center`}
          >
            {content.success ? "Complete" : "Drafted"}
          </div>
          <div className="flex gap-2 justify-center">
            <PinBtn id={content.id} pinned={content.pinned} />

            <button className="hover:bg-[#F1EBFD] hover:text-[#8D62EC] p-1 rounded-full group transition-all duration-300">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="black"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:fill-[#703BE7]"
              >
                <path d="M16.7998 12.5498C16.7998 12.152 16.9578 11.7704 17.2391 11.4891C17.5204 11.2078 17.902 11.0498 18.2998 11.0498C18.6976 11.0498 19.0792 11.2078 19.3605 11.4891C19.6418 11.7704 19.7998 12.152 19.7998 12.5498C19.7998 12.9476 19.6418 13.3292 19.3605 13.6105C19.0792 13.8918 18.6976 14.0498 18.2998 14.0498C17.902 14.0498 17.5204 13.8918 17.2391 13.6105C16.9578 13.3292 16.7998 12.9476 16.7998 12.5498ZM10.7998 12.5498C10.7998 12.152 10.9578 11.7704 11.2391 11.4891C11.5204 11.2078 11.902 11.0498 12.2998 11.0498C12.6976 11.0498 13.0792 11.2078 13.3605 11.4891C13.6418 11.7704 13.7998 12.152 13.7998 12.5498C13.7998 12.9476 13.6418 13.3292 13.3605 13.6105C13.0792 13.8918 12.6976 14.0498 12.2998 14.0498C11.902 14.0498 11.5204 13.8918 11.2391 13.6105C10.9578 13.3292 10.7998 12.9476 10.7998 12.5498ZM4.7998 12.5498C4.7998 12.152 4.95784 11.7704 5.23914 11.4891C5.52045 11.2078 5.90198 11.0498 6.2998 11.0498C6.69763 11.0498 7.07916 11.2078 7.36047 11.4891C7.64177 11.7704 7.7998 12.152 7.7998 12.5498C7.7998 12.9476 7.64177 13.3292 7.36047 13.6105C7.07916 13.8918 6.69763 14.0498 6.2998 14.0498C5.90198 14.0498 5.52045 13.8918 5.23914 13.6105C4.95784 13.3292 4.7998 12.9476 4.7998 12.5498Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RowCard;
