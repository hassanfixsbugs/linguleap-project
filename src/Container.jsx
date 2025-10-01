import { useState } from "react";
import ArticleCard from "./ArticleCard";
import card1 from "./assets/card1.png";
import logo from "./assets/AlJazzera.png";
import politics from "./assets/politics.png";
import globe from "./assets/Globe.png";
import lock from "./assets/Lock.png";
import culture from "./assets/culture.png";
import bag from "./assets/bag.png";
import filter from "./assets/filter.png";

export default function Container() {
  const items = [
    { label: "Economy", img: bag },
    { label: "Politics", img: politics },
    { label: "World News", img: globe },
    { label: "Culture and Lifestyle", img: culture },
    { label: "Security & Defense", img: lock },
  ];
  const [active, setActive] = useState("Reading");

  const tabs = ["Reading", "Listening"];
  return (
    <>
      <div className="p-[32px] bg-white">
        <h1 className="mb-[16px] font-['Instrument_Sans'] font-semibold text-[20px]">
          Your topics
        </h1>
        <div className="flex gap-[11px] text-[13px] font-normal ">
          <button className=" h-[32px] cursor-pointer border-[0.8px] bg-[#F4F8F4] px-[8px] py-[6px] rounded-[4.8px]">
            <img src={filter} alt="" className="h-4 w-4" />
          </button>
          {items.map((item, index) => (
            <button
              key={index}
              className="flex items-center border-[0.8px] cursor-pointer bg-[#F4F8F4] px-[8px] py-[6px] rounded-[4.8px] h-[32px] font-['Inter'] text-[13px]"
            >
              <img
                src={item.img}
                alt={item.label}
                className="h-[16px] w-[20px] mr-1 "
              />
              <span className="leading-none">{item.label}</span>
            </button>
          ))}
        </div>

        <div className="flex gap-6 border-b border-gray-200 mt-[16px]">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`pb-2 text-[15px] font-['Instrument_Sans'] ${
                active === tab
                  ? "font-medium border-b-2 border-black"
                  : "text-[#BBBBBB] font-normal"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="flex justify-between items-center mt-[16px]">
          <span className="font-['Instrument_Sans'] font-semibold text-[20px]">
            Today’s article
          </span>
          <span className="font-['Inter'] font-medium text-[16x]">
            View all
          </span>
        </div>
        <div>
          <div className="flex flex-col gap-[16px] mt-[16px]">
            <ArticleCard
              Source="Al Jazeera"
              img={logo}
              categoryimg={politics}
              totaltime="7 min read"
              title="جدعون ليفي: إسرائيل ليست أسدا صاعدا وإنما هي أسد مريض"
              description="يرى ليفي أن مصير الحرب مرهون بنزوات رئيس أميركي “متقلب المزاج” و “ثرثار”، فإذا قرر أن يقصف إيران فقد يتحقق انتصار، وإذا لم يقصفها تكون إسرائيل قد دخلت حربا عبثية أخرى وأشد خطورة من سابقاتها كلها.
يرى ليفي أن مصير الحرب مرهون بنزوات رئيس أميركي “متقلب المزاج” و “ثرثار”، فإذا قرر أن يقصف إيران فقد يتحقق "
              category="Politics"
              level="ILR Level: 2-Moderate"
              buttonText="Start Assessment"
            />
            <h1 className="font-['Instrument_Sans'] font-semibold text-[20px]">
              In progress
            </h1>
            <ArticleCard
              Source="Al Jazeera"
              img={logo}
              categoryimg={politics}
              totaltime="7 min read"
              title="جدعون ليفي: إسرائيل ليست أسدا صاعدا وإنما هي أسد مريض"
              description="يرى ليفي أن مصير الحرب مرهون بنزوات رئيس أميركي “متقلب المزاج” و “ثرثار”، فإذا قرر أن يقصف إيران فقد يتحقق انتصار، وإذا لم يقصفها تكون إسرائيل قد دخلت حربا عبثية أخرى وأشد خطورة من سابقاتها كلها.
يرى ليفي أن مصير الحرب مرهون بنزوات رئيس أميركي “متقلب المزاج” و “ثرثار”، فإذا قرر أن يقصف إيران فقد يتحقق "
              category="Politics"
              level="ILR Level: 2-Moderate"
              buttonText="Continue"
              progress={45}
            />
          </div>
        </div>
      </div>
    </>
  );
}
