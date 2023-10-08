// import Image from "next/image";
import React from "react";
import EventList from "./EventList";

const Events = () => {
  return (
    <div className="flex max-w-[1088px] w-[100%] px-0 py-[24px] flex-col justify-center items-center gap-[19px]">
      <div className="flex justify-between items-center self-stretch w-[90%]">
        <div className="flex w-[233px] px-[12px] py-[4px] justify-center items-center gap-[20px] rounded-[8px] bg-[#FFF]">
          <p className="text-[#4C4C4C] text-[16px] not-italic font-medium leading-[normal]">
            Friends
          </p>
          <button className="flex p-[8px] items-center gap-[10px] rounded-[4px] border-[1px]  border-[#F0F0F0] bg-[#FFF]">
            <p className="text-[#141414] text-[16px] not-italic font-medium leading-[normal]">
              Everyone
            </p>
          </button>
        </div>
        <div>
          <button className="flex px-[12px] py-[14px] items-center gap-[8px] rounded-[8px] border-[1px] border-[#F0F0F0] bg-[#FFF]">
            <p>This Month</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M16.5999 7.45829L11.1666 12.8916C10.5249 13.5333 9.4749 13.5333 8.83324 12.8916L3.3999 7.45829"
                stroke="#141414"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div>
        <EventList />
      </div>
    </div>
  );
};

export default Events;
