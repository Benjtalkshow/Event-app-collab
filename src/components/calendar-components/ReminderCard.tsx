import React from "react";
import Image from "next/image";
import circle from "../../assets/svgs/reminder-circle.svg";

const ReminderCard = ({
  title,
  background,
  location,
  time,
}: ReminderCardTypes) => {
  return (
    <div
      className={`bg-${background} py-[15px] px-[17px] lg:mr-[80px] lg:max-w-[100%] lg:rounded-[8px] lg:px-[17px] lg:py-[15px]`}
    >
      <div className="flex flex-row items-center gap-[2px] float-right">
        <div className="w-[3px] h-[3px] bg-gray rounded-full"></div>
        <div className="w-[3px] h-[3px] bg-gray rounded-full"></div>
        <div className="w-[3px] h-[3px] bg-gray rounded-full"></div>
      </div>

      <div className="flex flex-row items-center gap-[5px] w-[100%]">
        <Image src={circle} width={10} height={10} alt="arrow right icon" />

        <p className="font-inter font-semibold text-[14px] w-[100%] whitespace-nowrap text-gray">
          {time}
        </p>
      </div>

      <p className="font-inter font-semibold text-[16px] text-black">{title}</p>

      <p className="font-inter font-medium text-[12px] text-gray">{location}</p>
    </div>
  );
};

export default ReminderCard;
