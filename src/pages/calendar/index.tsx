import DashboadLayout from "@/components/DashboadLayout";
import { useState } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ReminderCard from "@/components/calendar-components/ReminderCard";

const CalendarPage = () => {
  const reminderDetails = [
    {
      time: "10:00 - 02:00",
      title: "Movies",
      location: "Joey's Crib",
      backgroundColor: "lightBlue",
    },
    {
      time: "10:00 - 02:00",
      title: "Yatch Party",
      location: "Ibiza boat club",
      backgroundColor: "peachyPink",
    },
  ];

  const [value, onChange] = useState<Value>(new Date());

  return (
    <DashboadLayout>
      <div className=" flex flex-col items-center gap-[50px] px-[20px] py-[44px] lg:pl-[40px] lg:py-[44px] lg:flex lg:flex-row lg:items-start lg:justify-between lg:w-[100%] lg:gap-[31px]">
        <div className="lg:w-[80%]">
          <Calendar onChange={onChange} value={value} />
        </div>

        <div className="w-[100%] lg:w-[30%] lg:py-[112px]">
          <div className="flex flex-col gap-[16px]">
            {reminderDetails.map((item, index) => (
              <ReminderCard
                key={index}
                title={item.title}
                background={item.backgroundColor}
                time={item.time}
                location={item.location}
              />
            ))}
          </div>
        </div>
      </div>
    </DashboadLayout>
  );
};

export default CalendarPage;
