import Image from "next/image";
import React from "react";
import createIcon from "@/assets/svgs/create-new-event.svg";

const TimelineBanner = () => {
  return (
    <div className='bg-discover'>
      <div className='flex max-w-[500px] w-full flex-col justify-center h-full items-start gap-8 font-inter'>
        <div className='flex flex-col items-start gap-1 self-stretch'>
          <h3 className='text-lightGrey text-[2rem] not-italic font-bold max-w-md leading-[42px] tracking-[0.64px]'>
            Discover, Experience and Share Memories
          </h3>
          <p className='text-lightGrey text-base not-italic font-normal leading-[24px]'>
            Seamlessly plan, invite, and celebrate with friends and cliques
          </p>
        </div>
        <div>
          <button className='flex px-2 md:px-4 py-1 md:py-3 justify-center items-center gap-2 rounded-md bg-peach'>
            <Image src={createIcon} alt='createIcon' height={20} width={20} />
            <p className='text-timeline-peach text-center font-inter not-italic font-medium leading-[24px]'>
              Create New Event
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimelineBanner;
