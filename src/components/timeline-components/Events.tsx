import arrowDown from '../../assets/svgs/arrow-down.svg';
import React from "react";
import EventList from "./EventList";
import Image from 'next/image';

const Events = () => {
  return (
    <div className="flex max-w-[1088px] w-[100%] px-0 py-[24px] flex-col justify-center items-center gap-[19px]">
      <div className="flex justify-between items-center self-stretch w-[90%]">
        <div className="flex w-[233px] px-[12px] py-[4px] justify-center items-center gap-[20px] rounded-[8px] bg-white">
          <p className="text-gray text-[16px] not-italic font-medium leading-[normal]">
            Friends
          </p>
          <button className="flex p-[8px] items-center gap-[10px] rounded-[4px] border-[1px]  border-lightGrey bg-white">
            <p className="text-gray text-[16px] not-italic font-medium leading-[normal]">
              Everyone
            </p>
          </button>
        </div>
        <div>
          <button className="flex px-[12px] py-[14px] items-center gap-[8px] rounded-[8px] border-[1px] border-lightGrey bg-white">
            <p>This Month</p>
            <Image src={arrowDown} alt="arrow down" />
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
