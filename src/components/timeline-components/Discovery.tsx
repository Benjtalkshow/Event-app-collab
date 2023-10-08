import Image from "next/image";
import React from "react";
import createIcon from "../../assets/svgs/create-new-event.svg";

const Discovery = () => {
  return (
    <div className="bg-discover">
      <div className="flex max-w-[500px] w-full flex-col justify-center h-full items-start gap-[32px]">
        <div className="flex flex-col items-start gap-[4px] self-stretch">
          <h3 className="text-timeline-whiteOne text-[32px] not-italic font-bold leading-[42px] tracking-[0.64px]">
            Discover, Experience and Share Memories
          </h3>
          <p className="text-timeline-whiteTwo text-[16px] not-italic font-normal leading-[24px]">
            Seamlessly plan, invite, and celebrate with friends and cliques
          </p>
        </div>
        <div>
          <button className="flex px-[16px] py-[12px] justify-center items-center gap-[8px] rounded-[8px] bg-primary-peach">
            <Image src={createIcon} alt="createIcon" />
            <p className="text-timeline-peach text-center text-[16px] not-italic font-medium leading-[24px]">
              Create New Event
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Discovery;
