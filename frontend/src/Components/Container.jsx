import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";

export default function Container() {
  const items = [
    { label: "Economy", img: "/bag.png" },
    { label: "Politics", img: "/politics.png" },
    { label: "World News", img: "/Globe.png" },
    { label: "Culture and Lifestyle", img: "/culture.png" },
    { label: "Security & Defense", img: "/Lock.png" },
  ];

  const [active, setActive] = useState("Reading");
  const [articles, setArticles] = useState([]);

  const tabs = ["Reading", "Listening"];

  // Fetch articles from the backend
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const token = localStorage.getItem("jwt");
        const response = await fetch("http://localhost:5000/articles", {
          headers: token
            ? {
                Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiTWljaGFlbCIsImlhdCI6MTc1OTczNjAxOSwiZXhwIjoxNzYwMzQwODE5fQ.QIuBT2kJXHMiAH3KLE1X27Eek_unJO2GjDpAFTZM_BE"}`,
              }
            : {},
        });

        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }

        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error.message);
      }
    };

    fetchArticles();
  }, []);

  return (
    <>
      <div className="px-[12px] pt-[16px] pb-0 sm:px-[24px] sm:pt-[24px] sm:pb-[24px] xl:px-[32px] xl:pt-[32px] xl:pb-[32px] bg-white">
        <h1 className="mb-[12px] sm:mb-[16px] font-['Instrument_Sans'] font-semibold text-[18px] sm:text-[20px]">
          Your topics
        </h1>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-[8px] sm:gap-[11px] text-[12px] sm:text-[13px] font-normal">
          <button className="h-[28px] sm:h-[32px] cursor-pointer border-[0.8px] bg-[#F4F8F4] px-[6px] sm:px-[8px] py-[4px] sm:py-[6px] rounded-[4.8px]">
            <img
              src="/filter.png"
              alt="Filter"
              className="h-3 w-3 sm:h-4 sm:w-4"
            />
          </button>
          {items.map((item, index) => (
            <button
              key={index}
              className="flex items-center border-[0.8px] cursor-pointer bg-[#F4F8F4] px-[6px] sm:px-[8px] py-[4px] sm:py-[6px] rounded-[4.8px] h-[28px] sm:h-[32px] font-['Inter'] text-[11px] sm:text-[13px]"
            >
              <img
                src={item.img}
                alt={item.label}
                className="h-[14px] w-[18px] sm:h-[16px] sm:w-[20px] mr-1"
              />
              <span className="leading-none hidden sm:inline">
                {item.label}
              </span>
              <span className="leading-none sm:hidden">
                {item.label.split(" ")[0]}
              </span>
            </button>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-4 sm:gap-6 border-b border-gray-200 mt-[12px] sm:mt-[16px]">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`pb-2 text-[14px] sm:text-[15px] font-['Instrument_Sans'] ${
                active === tab
                  ? "font-medium border-b-2 border-black"
                  : "text-[#BBBBBB] font-normal"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Articles header */}
        <div className="flex justify-between items-center mt-[12px] sm:mt-[16px]">
          <span className="font-['Instrument_Sans'] font-semibold text-[18px] sm:text-[20px]">
            Today's Articles
          </span>
          <span className="font-['Inter'] font-medium text-[14px] sm:text-[16px] cursor-pointer hover:text-gray-600">
            View all
          </span>
        </div>

        {/* Articles grid */}
        <div className="mt-[12px] sm:mt-[16px]">
          <div className="flex flex-col gap-[12px] sm:gap-[16px]">
            {articles.map((article) => (
              <ArticleCard
                key={article.id}
                Source={article.source}
                img={article.img}
                categoryimg={article.categoryimg}
                totaltime={article.totaltime}
                title={article.title}
                description={article.description}
                category={article.category}
                level={article.level}
                progress={article.progress}
                buttonText={
                  article.progress > 0 ? "Continue" : "Start Assesment"
                }
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
