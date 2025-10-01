import homeicon from "./assets/house.png";
import learnicon from "./assets/learn.png";
import progressicon from "./assets/profile.png";
import profileicon from "./assets/progress.png";
import settingicon from "./assets/setting.png";

const items = [
  { name: "Home", icon: homeicon, active: true },
  { name: "Learn", icon: learnicon },
  { name: "Progress Tracker", icon: profileicon },
  { name: "Profile", icon: progressicon },
  { name: "Settings", icon: settingicon },
];
export default function Sidebar() {
  return (
    <div className="h-screen w-[270px] bg-[#FFFFFF] border-r border-r-[#E7E7E7] p-[24px]">
      <h1 className="font-['Instrument_Sans'] font-bold text-[28px] mb-10 cursor-pointer">
        LinguLeap
      </h1>
      <ul className="flex flex-col space-y-[10px] w-[222px] text-[16px] font-['Inter'] font-normal">
        {items.map((item) => (
          <li key={item.name}>
            <a
              href=""
              className={`flex items-center gap-2  py-2 px-4 ${
                item.active
                  ? "bg-[#E3EEE4] text-black border-0 rounded-lg font-semibold"
                  : "text-[#5F5F5F] font-normal"
              }`}
            >
              <img src={item.icon} alt="" className="w-[20px] h-[24px]" />
              <span>{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
