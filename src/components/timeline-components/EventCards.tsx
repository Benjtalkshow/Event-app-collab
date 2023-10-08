import React from "react";
import football from "../../assets/images/football.webp";
import nextBtn from "../../assets/images/nextBtn.svg";
import Image from "next/image";

interface CardTypes {
  index: number;
  value: any;
}

const EventCards = ({ index, value }: CardTypes) => {
  return (
    <div
      key={index}
      className={`flex pt-0 pb-[24px] pl-0 flex-col justify-center items-start gap-[16px] flex-[1_0_0] self-stretch rounded-[8px] ${value.cardBackgroudColor}`}
    >
      <div className="cardimg">
        <Image className="h-full" src={football} alt="football" />
      </div>
      <div className="flex px-[12px] py-0 items-center gap-[64px]">
        <div className="flex flex-col items-start gap-[12px]">
          <h3 className="text-[#141414] text-[20px] not-italic font-bold leading-[normal] tracking-[0.2px]">
            {value.cardName}
          </h3>
          <p className="text-[#4C4C4C] text-[16px] not-italic font-medium leading-[normal]">
            {value.cardDate}
          </p>
          <p className="text-[#4C4C4C] text-[16px] not-italic font-medium leading-[normal]">
            {value.cardTime}
          </p>
          <p className="text-[#141414] text-[16px] not-italic font-normal leading-[normal]">
            {value.cardLocation}
          </p>
        </div>
        <div className="">
          <div>
            <Image src={nextBtn} alt="next" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCards;
