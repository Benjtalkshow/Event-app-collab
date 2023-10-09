"use client";

import React from "react";
import Image from "next/image";
import nextBtn from "@/assets/svgs/nextBtn.svg";
import football from "@/assets/images/football.webp";
import hikey from "@/assets/images/hiking.webp";

const TimelineEventCards: React.FC<CardProps> = ({
  img,
  name,
  date,
  time,
  location,
  bgColor,
}) => {
  return (
    <div className='flex pt-0 flex-col rounded-md h-full max-h-[500px]'>
      <div className='h-1/2 w-full rounded-t-md'>
        <Image
          src={name.includes("football") ? football : hikey}
          width={800}
          height={600}
          alt={name}
          style={{overflow: "hidden"}}
        />
      </div>

      <div
        className={`flex px-3 pt-4 pb-6 items-center gap-16 h-1/2 rounded-b-md bg-${bgColor} w-full`}
      >
        <div className='flex flex-col items-start gap-3 w-3/4'>
          <h3 className='text-black text-lg font-bold leading-[normal] tracking-[0.2px]'>
            {name}
          </h3>
          <p className='text-gray text-sm font-medium leading-[normal]'>
            {date}
          </p>
          <p className='text-gray text-sm font-medium leading-[normal]'>
            {time}
          </p>
          <p className='text-black text-sm font-normal leading-[normal]'>
            {location}
          </p>
        </div>
        <div className='w-1/4'>
          <div className='cursor-pointer'>
            <Image src={nextBtn} alt='next' width={20} height={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineEventCards;
