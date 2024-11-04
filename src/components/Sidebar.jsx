import logo from "../assets/sidebar/videfly-logo.png";
import addCircle from "../assets/sidebar/add-circle-half-dot.svg";
import { Button } from "@nextui-org/react";

const Sidebar = () => {
  return (
    <div className="sticky w-[260px] h-screen flex flex-col gap-16 px-4 py-6 border-r-2 border-[#ECECEC] items-center">
      <img src={logo} alt="videfly-logo" />

      <Button className="w-full flex gap-3 rounded-xl bg-[#703BE7] text-white justify-center ">
        <div className="font-semibold">Buat Video</div>
        <img src={addCircle} alt="add-circle" />
      </Button>

      <div className="flex flex-col gap-1 w-full ">
        <button className="flex gap-4 py-2 px-4 bg-[#F1EBFD] text-[#8D62EC] font-bold text-left items-center rounded-xl">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.99931 22L8.74868 18.4911C8.61393 16.6046 10.108 15 11.9993 15C13.8906 15 15.3847 16.6046 15.2499 18.4911L14.9993 22"
              stroke="#8D62EC"
              stroke-width="2"
            />
            <path
              d="M2.35139 13.2135C1.99837 10.9162 1.82186 9.76763 2.25617 8.74938C2.69047 7.73112 3.65403 7.03443 5.58114 5.64106L7.02099 4.6C9.41829 2.86667 10.6169 2 12 2C13.383 2 14.5817 2.86667 16.979 4.6L18.4188 5.64106C20.346 7.03443 21.3095 7.73112 21.7438 8.74938C22.1781 9.76763 22.0016 10.9162 21.6486 13.2135L21.3476 15.1724C20.8471 18.4289 20.5969 20.0572 19.429 21.0286C18.2611 22 16.5536 22 13.1388 22H10.8612C7.44634 22 5.73891 22 4.571 21.0286C3.40309 20.0572 3.15287 18.4289 2.65243 15.1724L2.35139 13.2135Z"
              stroke="#8D62EC"
              stroke-width="2"
              stroke-linejoin="round"
            />
          </svg>
          <div className="text-sm">Beranda</div>
        </button>

        <button className="flex gap-4 py-2 px-4 hover:bg-[#F1EBFD] hover:text-[#8D62EC] font-semibold text-left items-center rounded-xl group transition-all duration-300">
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#111336"
              className="group-hover:stroke-[#8D62EC]"
            >
              <path
                d="M18 2V4M6 2V4"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.9955 13H12.0045M11.9955 17H12.0045M15.991 13H16M8 13H8.00897M8 17H8.00897"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.5 8H20.5"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3 8H21"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="text-sm">Kelola Konten</div>
        </button>

        <button className="flex gap-4 py-2 px-4 hover:bg-[#F1EBFD] hover:text-[#8D62EC] font-semibold text-left items-center rounded-xl group transition-all duration-300">
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#111336"
              className="group-hover:stroke-[#8D62EC]"
            >
              <path
                d="M16.2627 10.5H7.73725C5.15571 10.5 3.86494 10.5 3.27143 11.3526C2.67793 12.2052 3.11904 13.4258 4.00126 15.867L5.08545 18.867C5.54545 20.1398 5.77545 20.7763 6.2889 21.1381C6.80235 21.5 7.47538 21.5 8.82143 21.5H15.1786C16.5246 21.5 17.1976 21.5 17.7111 21.1381C18.2245 20.7763 18.4545 20.1398 18.9146 18.867L19.9987 15.867C20.881 13.4258 21.3221 12.2052 20.7286 11.3526C20.1351 10.5 18.8443 10.5 16.2627 10.5Z"
                stroke-width="1.5"
                stroke-linecap="square"
              />
              <path
                d="M19 8C19 7.53406 19 7.30109 18.9239 7.11732C18.8224 6.87229 18.6277 6.67761 18.3827 6.57612C18.1989 6.5 17.9659 6.5 17.5 6.5H6.5C6.03406 6.5 5.80109 6.5 5.61732 6.57612C5.37229 6.67761 5.17761 6.87229 5.07612 7.11732C5 7.30109 5 7.53406 5 8"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.5 4C16.5 3.53406 16.5 3.30109 16.4239 3.11732C16.3224 2.87229 16.1277 2.67761 15.8827 2.57612C15.6989 2.5 15.4659 2.5 15 2.5H9C8.53406 2.5 8.30109 2.5 8.11732 2.57612C7.87229 2.67761 7.67761 2.87229 7.57612 3.11732C7.5 3.30109 7.5 3.53406 7.5 4"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="text-sm">Proyek</div>
        </button>

        <button className="flex gap-4 py-2 px-4 hover:bg-[#F1EBFD] hover:text-[#8D62EC] font-semibold text-left items-center rounded-xl group transition-all duration-300">
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#111336"
              className="group-hover:stroke-[#8D62EC]"
            >
              <g clip-path="url(#clip0_197_1753)">
                <path
                  d="M11.8732 22.6319L6.73033 23.0776L7.17604 17.9347L17.8732 7.30615C18.0328 7.14288 18.2235 7.01314 18.434 6.92457C18.6445 6.83599 18.8705 6.79037 19.0989 6.79037C19.3273 6.79037 19.5533 6.83599 19.7638 6.92457C19.9743 7.01314 20.165 7.14288 20.3246 7.30615L22.5018 9.50044C22.6624 9.65981 22.79 9.84941 22.877 10.0583C22.964 10.2672 23.0088 10.4913 23.0088 10.7176C23.0088 10.9439 22.964 11.168 22.877 11.3769C22.79 11.5858 22.6624 11.7754 22.5018 11.9347L11.8732 22.6319ZM1.44347 6.80901C0.841759 6.70444 0.841759 5.84044 1.44347 5.73587C2.50851 5.54958 3.4941 5.05079 4.27494 4.30292C5.05577 3.55506 5.59658 2.59189 5.82862 1.53587L5.86462 1.36958C5.9949 0.776441 6.84176 0.771298 6.9789 1.36615L7.02176 1.55815C7.26079 2.61017 7.80565 3.56798 8.58777 4.31105C9.36989 5.05412 10.3543 5.54926 11.4172 5.73415C12.0223 5.83701 12.0223 6.70615 11.4172 6.81244C10.3542 6.9969 9.36959 7.49165 8.58716 8.23442C7.80474 8.97719 7.25949 9.93479 7.02004 10.9867L6.97547 11.1804C6.84004 11.7736 5.99319 11.7702 5.8629 11.1753L5.82862 11.009C5.59635 9.95253 5.05503 8.98902 4.27354 8.24111C3.49204 7.49319 2.50571 6.99468 1.44004 6.80901H1.44347Z"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_197_1753">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="text-sm">AI Tools</div>
        </button>

        <button className="flex gap-4 py-2 px-4 hover:bg-[#F1EBFD] hover:text-[#8D62EC] font-semibold text-left items-center rounded-xl group transition-all duration-300">
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#111336"
              className="group-hover:stroke-[#8D62EC]"
            >
              <path
                d="M5.18007 15.2964C3.92249 16.0335 0.625212 17.5386 2.63348 19.422C3.6145 20.342 4.7071 21 6.08077 21H13.9192C15.2929 21 16.3855 20.342 17.3665 19.422C19.3748 17.5386 16.0775 16.0335 14.8199 15.2964C11.8709 13.5679 8.12906 13.5679 5.18007 15.2964Z"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14 7C14 9.20914 12.2091 11 10 11C7.79086 11 6 9.20914 6 7C6 4.79086 7.79086 3 10 3C12.2091 3 14 4.79086 14 7Z"
                stroke-width="1.5"
              />
              <path
                d="M19.5183 3.43325L20.0462 4.49786C20.1182 4.64606 20.3102 4.78821 20.4722 4.81543L21.4291 4.97573C22.041 5.07856 22.185 5.52618 21.744 5.96775L21.0001 6.71781C20.8741 6.84484 20.8051 7.08982 20.8441 7.26524L21.0571 8.19375C21.2251 8.92869 20.8381 9.21299 20.1932 8.82889L19.2963 8.29356C19.1343 8.19677 18.8674 8.19677 18.7024 8.29356L17.8055 8.82889C17.1636 9.21299 16.7736 8.92567 16.9416 8.19375L17.1546 7.26524C17.1935 7.08982 17.1246 6.84484 16.9986 6.71781L16.2547 5.96775C15.8167 5.52618 15.9577 5.07856 16.5696 4.97573L17.5265 4.81543C17.6855 4.78821 17.8775 4.64606 17.9495 4.49786L18.4774 3.43325C18.7654 2.85558 19.2333 2.85558 19.5183 3.43325Z"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="text-sm">Avatars</div>
        </button>

        <button className="flex gap-4 py-2 px-4 hover:bg-[#F1EBFD] hover:text-[#8D62EC] font-semibold text-left items-center rounded-xl group transition-all duration-300">
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#111336"
              className="group-hover:stroke-[#8D62EC]"
            >
              <path
                d="M7 21C5.93913 21 4.92172 20.5786 4.17157 19.8284C3.42143 19.0783 3 18.0609 3 17V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9C9.53043 3 10.0391 3.21071 10.4142 3.58579C10.7893 3.96086 11 4.46957 11 5V17C11 18.0609 10.5786 19.0783 9.82843 19.8284M7 21C8.06087 21 9.07828 20.5786 9.82843 19.8284M7 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V15C21 14.4696 20.7893 13.9609 20.4142 13.5858C20.0391 13.2107 19.5304 13 19 13H16.657M9.82843 19.8284L18.314 11.343C18.6889 10.9679 18.8996 10.4593 18.8996 9.929C18.8996 9.39867 18.6889 8.89006 18.314 8.515L15.485 5.686C15.1099 5.31106 14.6013 5.10043 14.071 5.10043C13.5407 5.10043 13.0321 5.31106 12.657 5.686L11 7.343M7 17H7.01"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="text-sm">Brand Kit</div>
        </button>
      </div>

      <div className="flex flex-col gap-2 w-full">
        <button className="flex gap-4 py-2 px-4 hover:bg-[#F1EBFD] hover:text-[#8D62EC] font-semibold text-left items-center rounded-xl group transition-all duration-300">
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#111336"
              className="group-hover:stroke-[#8D62EC]"
            >
              <path
                d="M15.5 12C15.5 13.933 13.933 15.5 12 15.5C10.067 15.5 8.5 13.933 8.5 12C8.5 10.067 10.067 8.5 12 8.5C13.933 8.5 15.5 10.067 15.5 12Z"
                stroke-width="1.5"
              />
              <path
                d="M21.011 14.0963C21.5329 13.9556 21.7939 13.8852 21.8969 13.7506C22 13.6161 22 13.3996 22 12.9667V11.033C22 10.6001 22 10.3836 21.8969 10.2491C21.7938 10.1145 21.5329 10.0441 21.011 9.9034C19.0606 9.37741 17.8399 7.33833 18.3433 5.40069C18.4817 4.86781 18.5509 4.60138 18.4848 4.44511C18.4187 4.28884 18.2291 4.18116 17.8497 3.96578L16.125 2.98655C15.7528 2.77521 15.5667 2.66954 15.3997 2.69204C15.2326 2.71454 15.0442 2.90255 14.6672 3.27855C13.208 4.7343 10.7936 4.73424 9.33434 3.27846C8.95743 2.90245 8.76898 2.71445 8.60193 2.69194C8.43489 2.66944 8.24877 2.77511 7.87653 2.98645L6.15184 3.96569C5.77253 4.18105 5.58287 4.28873 5.51678 4.44497C5.45068 4.60122 5.51987 4.86769 5.65825 5.40062C6.16137 7.33832 4.93972 9.37745 2.98902 9.90342C2.46712 10.0441 2.20617 10.1145 2.10308 10.249C2 10.3836 2 10.6001 2 11.033V12.9667C2 13.3996 2 13.6161 2.10308 13.7506C2.20615 13.8852 2.46711 13.9556 2.98902 14.0963C4.9394 14.6223 6.16008 16.6614 5.65672 18.599C5.51829 19.1319 5.44907 19.3983 5.51516 19.5546C5.58126 19.7109 5.77092 19.8186 6.15025 20.0339L7.87495 21.0132C8.24721 21.2245 8.43334 21.3302 8.6004 21.3077C8.76746 21.2852 8.95588 21.0971 9.33271 20.7211C10.7927 19.2642 13.2088 19.2641 14.6689 20.721C15.0457 21.0971 15.2341 21.2851 15.4012 21.3076C15.5682 21.3301 15.7544 21.2244 16.1266 21.0131L17.8513 20.0338C18.2307 19.8185 18.4204 19.7108 18.4864 19.5545C18.5525 19.3982 18.4833 19.1318 18.3448 18.5989C17.8412 16.6614 19.0609 14.6224 21.011 14.0963Z"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div className="text-sm">Pengaturan</div>
        </button>

        <button className="flex gap-4 py-2 px-4 hover:bg-[#F1EBFD] text-[#FF6D6D] font-semibold text-left items-center rounded-xl group transition-all duration-300">
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 17.625C14.9264 19.4769 13.3831 21.0494 11.3156 20.9988C10.8346 20.987 10.2401 20.8194 9.05112 20.484C6.18961 19.6768 3.70555 18.3203 3.10956 15.2815C3 14.723 3 14.0944 3 12.8373V11.1627C3 9.90561 3 9.27705 3.10956 8.71846C3.70555 5.67965 6.18961 4.32316 9.05112 3.51603C10.2401 3.18064 10.8346 3.01295 11.3156 3.00119C13.3831 2.95061 14.9264 4.52307 15 6.37501"
                stroke="#FF6D6D"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M21 12H10M21 12C21 11.2998 19.0057 9.99153 18.5 9.5M21 12C21 12.7002 19.0057 14.0085 18.5 14.5"
                stroke="#FF6D6D"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="text-sm">Keluar</div>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
