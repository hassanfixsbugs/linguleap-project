import Flame from "./assets/Group.png";
import card1 from "./assets/card1.png";
import card2 from "./assets/Card2.png";
import card3 from "./assets/card3.png";
const cards = [
  { name: "Articles completed", streak: 233, icon: card1 },
  { name: "Vocabulary learned", streak: 12344, icon: card2 },
  { name: "Speaking activities", streak: 678, icon: card3 },
];
export default function Right_Section() {
  return (
    <div className="w-[332px] border-l border-l-[#E7E7E7] p-[22px] space-y-4">
      <div className="h-[198px] w-[266px] border border-[#E6F0E7] flex flex-col items-center justify-center rounded-[16px] gap-[6px] ">
        <div className="bg-[#E3EEE4] rounded-full h-[72px] w-[72px]  flex items-center justify-center">
          {" "}
          <img src={Flame} alt="" />
        </div>

        <h1 className="font-['Instrument_Sans'] font-semibold text-[20px]">
          4 days in a row!
        </h1>
        <span className="font-['Inter'] font-normal text-[16px] text-[#BBBBBB]">
          You’re doing great Micheal!
        </span>
      </div>
      <div className=" space-y-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col h-[130px] w-[266px] border border-[#E6F0E7] rounded-[16px] p-[18px] gap-[22px]"
          >
            <img
              src={card.icon}
              alt="{card.name}"
              className="h-[26px] w-[26px]"
            />
            <div className="flex justify-between">
              <span className="font-['Inter'] font-semibold text-[14px] text-[#5F5F5F] w-[86px]">
                {card.name}
              </span>
              <span className="font-['Instrument_Sans'] font-semibold text-[32px]">
                {card.streak}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
