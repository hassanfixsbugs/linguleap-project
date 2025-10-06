const cards = [
  { name: "Articles completed", streak: 233, icon: "/card1.png" },
  { name: "Vocabulary learned", streak: 12344, icon: "/card2.png" },
  { name: "Speaking activities", streak: 678, icon: "/card3.png" },
];

export default function Right_Section() {
  return (
    <div
      className={`
        w-full max-w-full xl:w-[332px]
        bg-white border-t xl:border-t-0 xl:border-l border-[#E7E7E7]
        p-[12px] sm:p-[16px] xl:p-[22px]
        overflow-y-auto
      `}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-1 gap-3 sm:gap-4">
        <div
          className="w-full border border-[#E6F0E7] flex flex-col items-center justify-center rounded-[16px] gap-[6px]
          h-[180px] sm:h-[180px] xl:h-[180px]
          relative overflow-hidden 
          bg-cover bg-center /* Added back background properties */
          "
          style={{ backgroundImage: "url('/streak_bg.png')" }}
        >
          <div className="bg-[#E3EEE4] rounded-full h-[60px] w-[60px] sm:h-[72px] sm:w-[72px] flex items-center justify-center">
            <img
              src="/Group.png"
              alt="Flame icon"
              className="h-[30px] w-[30px] sm:h-[36px] sm:w-[36px] max-w-full"
            />
          </div>

          <h1 className="font-['Instrument_Sans'] font-semibold text-[16px] sm:text-[20px] text-center text-black">
            4 days in a row!
          </h1>

          <span className="font-['Inter'] font-normal text-[13px] sm:text-[16px] text-[#BBBBBB] text-center">
            You're doing great Micheal!
          </span>
        </div>

        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col justify-between w-full
              border border-[#E6F0E7] rounded-[16px]
              p-[12px] sm:p-[14px] xl:p-[18px]
              h-[180px] sm:h-[180px] xl:h-[130px]"
          >
            <div>
              <img
                src={card.icon}
                alt={card.name}
                className="h-[26px] w-[26px] sm:h-[26px] sm:w-[26px] max-w-full"
              />
            </div>

            <div className="flex justify-between items-center mt-auto mb-[4px] sm:mb-[6px]">
              <span className="font-['Inter'] font-semibold text-[14px] sm:text-[14px] text-[#5F5F5F]">
                {card.name}
              </span>
              <span className="font-['Instrument_Sans'] font-semibold text-[24px] sm:text-[24px]">
                {card.streak}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
