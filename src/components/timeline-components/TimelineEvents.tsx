import arrowDown from "@/assets/svgs/arrow-down.svg";
import React from "react";
import Image from "next/image";
import TimelineEventList from "./TimelineEventList";

const TimelineEvents = () => {
  return (
    <div className='flex w-full px-0 py-6 flex-col justify-center items-center gap-5 font-inter'>
      <div className='flex flex-col md:flex-row justify-between w-full'>
        <div className='flex px-3 py-1 justify-start md:justify-center mb-3 md:mb-0 items-center gap-5'>
          <button className='text-gray text-sm font-medium leading-[normal]'>
            Friends
          </button>
          <button className='flex items-center gap-2 p-2 rounded border  border-lightGrey '>
            <p className='text-gray text-md font-medium leading-[normal]'>
              Everyone
            </p>
          </button>
        </div>

        <div>
          <button className='flex px-3 py-1 md:py-3 items-center gap-2 rounded-md border border-lightGrey'>
            <p>This Month</p>
            <Image src={arrowDown} alt='arrow down' />
          </button>
        </div>
      </div>

      <div>
        <hr style={{border: "0.5px solid #3F3849"}} />
        <TimelineEventList />
      </div>
    </div>
  );
};

export default TimelineEvents;
