export default function ArticleCard(props) {
  return (
    <div className="min-h-[288px] border rounded-[16px] border-[#E6E6E6] p-6">
      <div className="border-b border-[#E6E6E6] pb-3 font-['Inter'] ">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[7px]">
            <img
              src={props.img}
              alt="hello"
              className="h-[32px] w-[32px] rounded-full object-cover "
            />
            <span className="font-semibold text-[16px] cursor-pointer">
              {props.Source}
            </span>
            <span className="text-[#D1D1D1]">•</span>
            <span className="font-normal text-[14px] text-[#5F5F5F]">
              {props.totaltime}
            </span>
          </div>

          <div className="flex items-center gap-2 text-[14px]">
            <div className="flex items-center bg-[#EFF5EF] py-1 px-3 rounded-[16px] gap-1">
              <img src={props.categoryimg} alt="" className="h-4 w-4" />
              <span>{props.category}</span>
            </div>
            <div className="flex items-center bg-[#FFD16666] py-1 px-3 rounded-[16px]">
              <span>{props.level}</span>
            </div>
          </div>
        </div>

        {props.progress && (
          <div className="mt-3 flex items-center gap-2 w-[292px]">
            <div className="h-2 w-full bg-[#EFF5EF]   rounded-full">
              <div
                className="h-2 bg-[#CADECB] rounded-full"
                style={{ width: `${props.progress}%` }}
              ></div>
            </div>
            <span className=" text-[#5F5F5F] font-['Inter'] font-medium text-[16px]">
              {props.progress}%
            </span>
          </div>
        )}
      </div>
      <div dir="rtl" className="flex flex-col justify-end gap-3  mt-4 ">
        <h1 className="font-['Noto Sans Arabic'] font-bold text-[20px]">
          {props.title}
        </h1>
        <p className=" whitespace-pre-line font-['Noto Sans Arabic'] font-normal text-[15px] text-[#BBBBBB] ">
          {props.description}
        </p>
      </div>
      <div className="flex justify-end mt-4">
        <button className="font-['Inter'] font-bold text-[16px] cursor-pointer bg-[#C9DECB] border-2 rounded-[8px] border-b-black px-5 py-4 h-[50px] flex items-center justify-center">
          {props.buttonText}
        </button>
      </div>
    </div>
  );
}
