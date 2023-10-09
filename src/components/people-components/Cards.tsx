import React, { useState } from "react";
import AddBtn from "@/components/people-components/AddBtn";
import Popup from "./AddPopUp";
import Link from "next/link";
import transparentBg from "../../../public/images/transparency.png";
import peopleImage1 from "../../../public/images/mypeople1.png";
import peopleImage2 from "../../../public/images/mypeople2.png";
import peopleImage3 from "../../../public/images/mypeople3.png";
import mp3 from "../../../public/images/mp3.svg";
import laptop from "../../../public/images/laptop.svg";

import Image from "next/image";

const cardData: PeopleCardProps[] = [
  {
    image: peopleImage1,
    groupName: "YBNL Mafia",
    icon: mp3,
    events: "12 events",
  },
  {
    image: peopleImage2,
    groupName: "Techies",
    icon: [laptop, mp3],
    events: "16 events",
  },
  {
    image: peopleImage3,
    groupName: "Techies",
    icon: [laptop, mp3],
    events: "5 events",
  },
];

const bgColors = ["bg-primary-purple", "bg-primary-peach", "bg-primary-orange"];

const Cards = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="container flex flex-col justify-center items-center px-3 xs:px-5 sm:px-10">
      <div className="flex justify-between flex-col w-full">
        <AddBtn label="Create New Group" onClick={openPopup} />
        <div className="cardContainer flex gap-3 justify-center items-start flex-wrap font-montserrat mt-10">
          {cardData.map((data, index) => (
            <Link href="/people">
            <div
              className={`card flex-grow basis-[200] w-[350px] h-[350px] ${bgColors[index % bgColors.length]
                } rounded-xl cursor-pointer relative overflow-hidden`}
              key={data.groupName}
            >
              <Image
                src={data.image}
                alt={data.groupName}
                className="mt-11 ml-3 w-[300px]"
              />
              <div>
                <div className="eventHolder absolute bottom-10 left-5">
                  <div>
                    <div className="flex">
                      <h1 className={`${data.groupName} font-extrabold text-xl block pr-3`}>{data.groupName}</h1>
                      {Array.isArray(data.icon) ? (
                        data.icon.map((icon, idx) => (
                          <Image key={idx} src={icon} alt="icons" />
                        ))
                      ) : (
                        <Image src={data.icon} alt="icon" />
                      )}
                    </div>
                    <p className="events block text-primary-grey">
                      {data.events}
                    </p>
                  </div>
                </div>
                <Image
                  src={transparentBg}
                  alt="transparent background"
                  className="absolute bottom-0 right-0"
                />
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
      {isPopupOpen && <Popup onClose={closePopup} />}
    </div>
  );
};

export default Cards;
