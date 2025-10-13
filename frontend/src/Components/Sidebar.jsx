import { useDispatch, useSelector } from "react-redux";
import { clearCredentials } from "../slices/authSlice";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageToggle from "./LanguageToggle";

export default function Sidebar({ isOpen, onClose }) {
  const { t } = useTranslation();
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const items = [
    { name: t("sidebar.home"), icon: "/house.svg", active: true },
    { name: t("sidebar.learn"), icon: "/learn.svg" },
    { name: t("sidebar.progressTracker"), icon: "/progress.svg" },
    { name: t("sidebar.profile"), icon: "/profile.svg" },
    { name: t("sidebar.settings"), icon: "/setting.svg" },
  ];

  return (
    <div
      className={`
      fixed xl:static inset-y-0 left-0 z-50 xl:z-auto
      w-[80%] sm:w-[240px] xl:w-[270px]
      max-w-[100vw]
      bg-[#FFFFFF] border-r border-r-[#E7E7E7] 
      p-[20px] sm:p-[24px]
      transform transition-transform duration-300 ease-in-out
      ${isOpen ? "translate-x-0" : "-translate-x-full xl:translate-x-0"}
    `}
    >
      <button
        onClick={onClose}
        className="xl:hidden absolute top-4 right-4 p-2 rounded-md hover:bg-gray-100"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <h1 className="font-['Instrument_Sans'] font-bold text-[24px] sm:text-[28px] mb-8 cursor-pointer truncate">
        {t("sidebar.appName")}
      </h1>

      <ul className="flex flex-col space-y-[10px] w-full text-[15px] sm:text-[16px] font-['Inter'] font-normal">
        {items.map((item) => (
          <li key={item.name}>
            <a
              href="#"
              className={`flex items-center gap-2 py-2 px-3 sm:px-4 ${
                item.active
                  ? "bg-[#E3EEE4] text-black border-0 rounded-lg font-semibold"
                  : "text-[#5F5F5F] font-normal"
              }`}
            >
              <img
                src={item.icon}
                alt={item.name}
                className="w-[18px] h-[20px] sm:w-[20px] sm:h-[24px]"
              />
              <span>{item.name}</span>
            </a>
          </li>
        ))}

        {/* Language Toggle */}
        <li className="pt-2 border-t border-gray-200">
          <LanguageToggle />
        </li>

        {token && (
          <li>
            <button
              onClick={() => {
                dispatch(clearCredentials());
                navigate("/signin");
              }}
              className="flex items-center gap-2 py-2 px-3 sm:px-4 text-[#5F5F5F] hover:text-black w-full  rounded-lg"
            >
              <img
                src="/setting.svg"
                alt={t("sidebar.logout")}
                className="w-[18px] h-[20px] sm:w-[20px] sm:h-[24px]"
              />
              <span>{t("sidebar.logout")}</span>
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}
