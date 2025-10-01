import profilepic from "./assets/pfp.jpg";
export default function Navbar() {
  return (
    <div className="flex justify-between items-center h-[76px] w-full px-10 py-4 border-b border-b-[#E7E7E7]">
      <h1 className="font-['Instrument_Sans'] font-semibold text-[24px]">
        Welcome back, Micheal 👋🏻
      </h1>

      <div className="flex gap-[6px]">
        <img
          src={profilepic}
          alt=""
          className="w-11 h-11 rounded-full object-cover object-[50%_5%]"
        />
        <div className="flex flex-col gap-[2px] font-['Inter']">
          <span className="text-[16px] font-medium">Micheal Jordan</span>
          <span className="text-[14px] font-normal">micheal@gmail.com</span>
        </div>
      </div>
    </div>
  );
}
