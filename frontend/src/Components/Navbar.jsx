import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../slices/authSlice";
import { useTranslation } from "react-i18next";

export default function Navbar({ onMenuClick }) {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) return;

    const fetchMe = async () => {
      try {
        const res = await fetch("http://localhost:5000/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!res.ok) return;

        const data = await res.json();
        if (data?.name) {
          setName(data.name);
          setEmail(data.email);
          dispatch(setCredentials({ token, user: data }));
        }
      } catch (err) {
        console.error("Failed to fetch user:", err);
        // Optional: show an error toast or message
      }
    };

    fetchMe();
  }, [token, dispatch]);

  return (
    <div className="flex justify-between items-center w-full px-3 sm:px-6 xl:px-8 py-3 border-b border-b-[#E7E7E7] min-w-0">
      {/* Left side - Menu button and title */}
      <div className="flex items-center gap-2 sm:gap-4 min-w-0 overflow-hidden">
        {/* Mobile menu button */}
        <button
          onClick={onMenuClick}
          className="xl:hidden p-2 rounded-md hover:bg-gray-100 shrink-0"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <h1 className="font-['Instrument_Sans'] font-semibold text-[16px] sm:text-[18px] lg:text-[22px] text-ellipsis overflow-hidden whitespace-nowrap">
          {name ? t("navbar.welcomeUser", { name }) : t("navbar.welcome")} 👋🏻
        </h1>
      </div>

      {/* Right side - Profile */}
      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        <img
          src="/pfp.jpg"
          alt="Profile"
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover object-[50%_5%]"
        />
        <div className="flex flex-col gap-[1px] font-['Inter'] leading-tight">
          <span className="text-[12px] sm:text-[14px] font-medium truncate max-w-[90px] sm:max-w-none">
            {name || t("navbar.guest")}
          </span>
          <span className="text-[10px] sm:text-[12px] text-[#5F5F5F] truncate max-w-[90px] sm:max-w-none">
            {email || t("navbar.guest")}
          </span>
        </div>
      </div>
    </div>
  );
}
