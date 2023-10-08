import React from "react";
import football from "../../assets/images/football.webp";
import nextBtn from "../../assets/images/nextBtn.svg";
import Image from "next/image";
import EventCards from "./EventCards";

const EventList = () => {
  const cardDetails = [
    {
      cardImg: football,
      cardName: "Football Game",
      cardDate: "20th May, 2023",
      cardTime: "Friday, 16:00-18:00",
      cardLocation: "Teslim Balogun Stadium",
      cardBackgroudColor: "bg-[#EEE0FF]",
    },
    {
      cardImg: football,
      cardName: "Hiking",
      cardDate: "20th May, 2023",
      cardTime: "Friday, 16:00-18:00",
      cardLocation: "Mount Patti",
      cardBackgroudColor: "bg-[#FFE0C4]",
    },
    {
      cardImg: football,
      cardName: "Football Game",
      cardDate: "20th May, 2023",
      cardTime: "Friday, 16:00-18:00",
      cardLocation: "Teslim Balogun Stadium",
      cardBackgroudColor: "bg-[#D2F5FE]",
    },
    {
      cardImg: football,
      cardName: "Hiking",
      cardDate: "20th May, 2023",
      cardTime: "Friday, 16:00-18:00",
      cardLocation: "Mount Patti",
      cardBackgroudColor: "bg-[#EEE0FF]",
    },
    {
      cardImg: football,
      cardName: "Football Game",
      cardDate: "20th May, 2023",
      cardTime: "Friday, 16:00-18:00",
      cardLocation: "Teslim Balogun Stadium",
      cardBackgroudColor: "bg-[#FFE0C4]",
    },
    {
      cardImg: football,
      cardName: "Hiking",
      cardDate: "20th May, 2023",
      cardTime: "Friday, 16:00-18:00",
      cardLocation: "Mount Patti",
      cardBackgroudColor: "bg-[#D2F5FE]",
    },
    {
      cardImg: football,
      cardName: "Hiking",
      cardDate: "20th May, 2023",
      cardTime: "Friday, 16:00-18:00",
      cardLocation: "Mount Patti",
      cardBackgroudColor: "bg-[#D2F5FE]",
    },
    {
      cardImg: football,
      cardName: "Hiking",
      cardDate: "20th May, 2023",
      cardTime: "Friday, 16:00-18:00",
      cardLocation: "Mount Patti",
      cardBackgroudColor: "bg-[#EEE0FF]",
    },
    {
      cardImg: football,
      cardName: "Football Game",
      cardDate: "20th May, 2023",
      cardTime: "Friday, 16:00-18:00",
      cardLocation: "Teslim Balogun Stadium",
      cardBackgroudColor: "bg-[#FFE0C4]",
    },
  ];

  const renderCards = cardDetails.map((value, index) => {
    return <EventCards value={value} index={index} />;
  });
  return (
    <div className="container mx-auto px-4 h-[400px] ">
      <div className="h-full overflow-y-scroll grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[repeat(3,_minmax(0))] lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {renderCards}
      </div>
    </div>
  );
};

export default EventList;
