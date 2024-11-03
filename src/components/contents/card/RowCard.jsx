const RowCard = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 py-5 items-center text-xs border-b-1 border-[#00000033]">
        <div className="flex gap-8 px-3 items-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/2792/342c/7964c311006c141d7ea4362439c8ab98?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SUbjzirmihMGqzeOFR1VUpsKuubQZDQ-V1XkwQzjmMpHZkp1C9Ytn3CqYSmYb5biKhxklEk~s4VX4ZpFn4YUQy3P1kWyDggtqkElIRrH56oAQCYzCG7cbxVg64DttNBeRFg2ItK8U96ggcUV34g~jFZ2NiZ0MewOSVKqejKqXSxnWmReuRAc21ZXONSb1PjET3zOHYx9eWgvCz-h7SkpPd4LEoKniM9SqXJfatBhK5Y-itOmCywBvdNA1SmeZy~ZZ9NylnsOJHvQJROUgWwzBCySefqb9nIJRG4fZ-JugeEXsABVnVokrJ9Fw7enzjJArnMGDXK7iOdkbiKHhGC3Bg__"
            alt="img"
            className="w-24 h-16 object-cover rounded-md"
          />

          <div className="font-bold text-[#584F6A]">Alchemist Fragrance</div>
        </div>
        <div className="grid grid-cols-4 gap-4 px-3 text-center items-center">
          <div className="text-[#584F6A] font-medium">Text to Video</div>
          <div className="text-[#584F6A] font-medium">2 jam yang lalu</div>
          <div className="text-[#FE846F] font-medium text-center">Drafted</div>
          <div className="flex gap-2 justify-center">
            <button className="group">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="#703BE7"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:fill-[#8D62EC]"
              >
                <path d="M17.5707 1.19153C17.2905 0.909947 16.91 0.751129 16.5128 0.750006C16.1156 0.748883 15.7341 0.905545 15.4524 1.18554C15.3038 1.33702 15.1889 1.51822 15.1154 1.71725C13.869 4.31738 12.4968 5.7837 10.765 6.64942C8.82204 7.60799 6.59143 8.2745 2.99611 8.2745C2.70037 8.2759 2.41157 8.36426 2.1657 8.52859C1.91983 8.69291 1.72776 8.92593 1.6134 9.19862C1.50019 9.47241 1.47065 9.7736 1.52851 10.0642C1.58637 10.3547 1.72903 10.6216 1.93848 10.8312L6.79667 15.6885L0 24.75L9.06322 17.9546L13.9199 22.8104C14.059 22.9506 14.2252 23.0612 14.4083 23.1354C14.591 23.2118 14.7858 23.2522 14.9805 23.2522C15.1753 23.2522 15.37 23.2118 15.5528 23.1354C15.8267 23.023 16.0611 22.8317 16.2259 22.5858C16.3908 22.3399 16.4787 22.0505 16.4786 21.7545C16.4786 18.1598 17.1437 15.9296 18.101 14.017C18.9654 12.2855 20.4319 10.9136 23.0341 9.66743C23.233 9.59455 23.4139 9.4796 23.5644 9.33043C23.8444 9.04876 24.0011 8.66742 24 8.27026C23.9989 7.87311 23.84 7.49266 23.5584 7.21258L17.5707 1.19153Z" />
              </svg>
            </button>

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
