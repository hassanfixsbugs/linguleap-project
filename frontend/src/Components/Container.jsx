import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import ArticleCard from "./ArticleCard";

export default function Container() {
  const { t } = useTranslation();
  const [articles, setArticles] = useState([]);

  const items = [
    { label: t("container.economy"), img: "/bag.png" },
    { label: t("container.politics"), img: "/politics.png" },
    { label: t("container.worldNews"), img: "/Globe.png" },
    { label: t("container.cultureLifestyle"), img: "/culture.png" },
    { label: t("container.securityDefense"), img: "/Lock.png" },
  ];

  const tabs = [t("container.reading"), t("container.listening")];
  const [active, setActive] = useState(t("container.reading"));
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch("http://localhost:5000/articles", {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        });

        if (!res.ok) {
          console.warn("❌ Failed to fetch articles:", res.status);
          setArticles([]);
          return;
        }

        const data = await res.json();
        const enriched = Array.isArray(data)
          ? data.map((a) => ({
              ...a,
              progress:
                typeof a.progress === "number"
                  ? a.progress
                  : Math.floor(Math.random() * 101),
            }))
          : [];
        setArticles(enriched);
      } catch (err) {
        console.error("Error fetching articles:", err);
        setArticles([]);
      }
    };

    if (token) {
      fetchArticles();
    }
  }, [token]);

  return (
    <div className="px-[12px] pt-[16px] pb-0 sm:px-[24px] sm:pt-[24px] sm:pb-[24px] xl:px-[32px] xl:pt-[32px] xl:pb-[32px] bg-white">
      <h1 className="mb-[12px] sm:mb-[16px] font-['Instrument_Sans'] font-semibold text-[18px] sm:text-[20px]">
        {t("container.yourTopics")}
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
            <span className="leading-none hidden sm:inline">{item.label}</span>
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
          {t("container.todaysArticles")}
        </span>
        <span className="font-['Inter'] font-medium text-[14px] sm:text-[16px] cursor-pointer hover:text-gray-600">
          {t("container.viewAll")}
        </span>
      </div>

      {/* Articles list */}
      <div className="mt-[12px] sm:mt-[16px]">
        <div className="flex flex-col gap-[12px] sm:gap-[16px]">
          {articles.length > 0 ? (
            articles.map((article) => (
              <ArticleCard
                key={article.id}
                Source={article.source || "LinguLeap"}
                img={
                  article.imageUrl
                    ? article.imageUrl.startsWith("http")
                      ? article.imageUrl
                      : article.imageUrl.startsWith("/")
                        ? article.imageUrl
                        : `http://localhost:5000${article.imageUrl}`
                    : article.img || "/default-article.jpg"
                }
                categoryimg={
                  article.categoryimg
                    ? article.categoryimg.startsWith("http")
                      ? article.categoryimg
                      : article.categoryimg.startsWith("/")
                        ? article.categoryimg
                        : `http://localhost:5000${article.categoryimg}`
                    : "/default-category.jpg"
                }
                totaltime={article.totaltime || "5 min read"}
                title={article.title}
                description={
                  article.summary || article.description || "No description"
                }
                category={article.category || "General"}
                level={article.difficulty || article.level || "All Levels"}
                progress={article.progress || 0}
                buttonText={
                  article.progress && article.progress > 0
                    ? "Continue"
                    : "Start Assessment"
                }
              />
            ))
          ) : (
            <p className="text-center text-gray-500 mt-20 text-sm">
              {t("container.noArticles")}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
