import React from "react";
import TimelineEventCards from "./TimelineEventCards";

const TimelineEventList = () => {
  const cardDetails: CardProps[] = [
    {
      img: "/public/images/hiking.png",
      name: "Football Game",
      date: "20th May, 2023",
      time: "Friday, 16:00-18:00",
      location: "Teslim Balogun Stadium",
      bgColor: "peachyPink",
    },
    {
      img: "/public/images/soccer.png",
      name: "Hiking",
      date: "20th May, 2023",
      time: "Friday, 16:00-18:00",
      location: "Mount Patti",
      bgColor: "lightBlue",
    },
    {
      img: "/public/images/hiking.png",
      name: "Hiking",
      date: "20th May, 2023",
      time: "Friday, 16:00-18:00",
      location: "Mount Patti",
      bgColor: "peach", // purple didn't work
    },
    {
      img: "/public/images/soccer.png",
      name: "Football Game",
      date: "20th May, 2023",
      time: "Friday, 16:00-18:00",
      location: "Teslim Balogun Stadium",
      bgColor: "peachyPink",
    },
    {
      img: "/public/images/hiking.png",
      name: "Hiking",
      date: "20th May, 2023",
      time: "Friday, 16:00-18:00",
      location: "Mount Patti",
      bgColor: "lightBlue",
    },
    {
      img: "/public/images/soccer.png",
      name: "Hiking",
      date: "20th May, 2023",
      time: "Friday, 16:00-18:00",
      location: "Mount Patti",
      bgColor: "peach", // purple didn't work
    },
    {
      img: "/public/images/hiking.png",
      name: "Football Game",
      date: "20th May, 2023",
      time: "Friday, 16:00-18:00",
      location: "Teslim Balogun Stadium",
      bgColor: "peachyPink",
    },
    {
      img: "/public/images/soccer.png",
      name: "Hiking",
      date: "20th May, 2023",
      time: "Friday, 16:00-18:00",
      location: "Mount Patti",
      bgColor: "lightBlue",
    },
    {
      img: "/public/images/hiking.png",
      name: "Hiking",
      date: "20th May, 2023",
      time: "Friday, 16:00-18:00",
      location: "Mount Patti",
      bgColor: "peach",
    },
  ];

  const renderCards = cardDetails.map((evt, idx) => {
    return <TimelineEventCards key={idx} {...(evt as CardProps)} />;
  });

  return (
    <div className='px-4 py-4'>
      <div className='h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6'>
        {renderCards}
      </div>
    </div>
  );
};

export default TimelineEventList;
