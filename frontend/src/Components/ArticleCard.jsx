export default function ArticleCard(props) {
  const pct = Math.max(0, Math.min(100, Number(props.progress) || 0));

  return (
    <div className="w-full min-h-[260px] sm:min-h-[288px] border rounded-[12px] sm:rounded-[16px] border-[#E6E6E6] p-4 sm:p-6">
      {/* Header Section */}
      <div className="border-b border-[#E6E6E6] pb-3 font-['Inter']">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0">
          <div className="flex items-center gap-[7px]">
            <img
              src={props.img}
              alt={props.Source || "Article source"}
              className="h-[28px] w-[28px] sm:h-[32px] sm:w-[32px] rounded-full object-cover"
            />
            <span className="font-semibold text-[14px] sm:text-[16px] cursor-pointer">
              {props.Source}
            </span>
            <span className="text-[#D1D1D1] hidden sm:inline">•</span>
            <span className="font-normal text-[12px] sm:text-[14px] text-[#5F5F5F]">
              {props.totaltime}
            </span>
          </div>

          <div className="flex items-center gap-2 text-[12px] sm:text-[14px]">
            <div className="flex items-center bg-[#EFF5EF] py-1 px-2 sm:px-3 rounded-[12px] sm:rounded-[16px] gap-1">
              <img
                src={props.categoryimg}
                alt={props.category || "Category"}
                className="h-3 w-3 sm:h-4 sm:w-4"
              />
              <span className="text-[11px] sm:text-[14px]">{props.category}</span>
            </div>
            <div className="flex items-center bg-[#FFD16666] py-1 px-2 sm:px-3 rounded-[12px] sm:rounded-[16px]">
              <span className="text-[11px] sm:text-[14px]">{props.level}</span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        {pct > 0 && (
          <div className="mt-3 flex items-center gap-2">
            <div className="h-2 w-full sm:w-[40%] xl:w-[292px] bg-[#EFF5EF] rounded-full">
              <div
                className="h-2 bg-[#CADECB] rounded-full"
                style={{ width: `${pct}%` }}
              ></div>
            </div>
            <span className="text-[#5F5F5F] font-['Inter'] font-medium text-[14px] sm:text-[16px]">
              {pct}%
            </span>
          </div>
        )}
      </div>

      {/* Arabic Content Section */}
      <div
        dir="rtl"
        lang="ar"
        style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
        className="flex flex-col justify-end gap-3 mt-4"
      >
        <h1 className="font-bold text-[18px] sm:text-[20px] leading-tight">
          {props.title}
        </h1>
        <p className="whitespace-pre-line font-normal text-[14px] sm:text-[15px] text-[#BBBBBB] line-clamp-4">
          {props.description}
        </p>
      </div>

      {/* Button Section */}
      <div className="flex justify-end mt-4">
        <button className="font-['Inter'] font-bold text-[14px] sm:text-[16px] cursor-pointer bg-[#C9DECB] border-2 rounded-[6px] sm:rounded-[8px] border-b-black px-4 sm:px-5 py-3 sm:py-4 h-[44px] sm:h-[50px] flex items-center justify-center hover:bg-[#B8D4BA] transition-colors">
          {props.buttonText}
        </button>
      </div>
    </div>
  );
}
