import React from "react";
import football from "../../assets/images/football.webp";
import EventCards from "./EventCards";

const EventList = () => {
  const cardDetails = [
    {
      cardImg: football,
      cardName: "Football Game",
      cardDate: "20th May, 2023",
      cardTime: "Friday, 16:00-18:00",
      cardLocation: "Teslim Balogun Stadium",
      cardBackgroudColor: "peachyPink",
    },
    {
      cardImg: football,
      cardName: "Hiking",
      cardDate: "20th May, 2023",
      cardTime: "Friday, 16:00-18:00",
      cardLocation: "Mount Patti",
      cardBackgroudColor: "lightBlue",
    },
    {
      cardImg: football,
      cardName: "Hiking",
      cardDate: "20th May, 2023",
      cardTime: "Friday, 16:00-18:00",
      cardLocation: "Mount Patti",
      cardBackgroudColor: "peach", // purple didn't work
    },
    {
      cardImg: football,
      cardName: "Football Game",
      cardDate: "20th May, 2023",
      cardTime: "Friday, 16:00-18:00",
      cardLocation: "Teslim Balogun Stadium",
      cardBackgroudColor: "peachyPink",
    },
    {
      cardImg: football,
      cardName: "Hiking",
      cardDate: "20th May, 2023",
      cardTime: "Friday, 16:00-18:00",
      cardLocation: "Mount Patti",
      cardBackgroudColor: "lightBlue",
    },
    {
      cardImg: football,
      cardName: "Hiking",
      cardDate: "20th May, 2023",
      cardTime: "Friday, 16:00-18:00",
      cardLocation: "Mount Patti",
      cardBackgroudColor: "peach", // purple didn't work
    },
    {
      cardImg: football,
      cardName: "Football Game",
      cardDate: "20th May, 2023",
      cardTime: "Friday, 16:00-18:00",
      cardLocation: "Teslim Balogun Stadium",
      cardBackgroudColor: "peachyPink",
    },
    {
      cardImg: football,
      cardName: "Hiking",
      cardDate: "20th May, 2023",
      cardTime: "Friday, 16:00-18:00",
      cardLocation: "Mount Patti",
      cardBackgroudColor: "lightBlue",
    },
    {
      cardImg: football,
      cardName: "Hiking",
      cardDate: "20th May, 2023",
      cardTime: "Friday, 16:00-18:00",
      cardLocation: "Mount Patti",
      cardBackgroudColor: "peach", // purple didn't work
    },
  ];

  const renderCards = cardDetails.map((value, index) => {
    return <EventCards key={index} index={index} value={value} />;
  });
  return (
    <div className="container mx-auto px-4 h-[400px] ">
      <div className="h-full lg:overflow-y-scroll grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[repeat(3,_minmax(0))] lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {renderCards}
      </div>
    </div>
  );
};

export default EventList;
