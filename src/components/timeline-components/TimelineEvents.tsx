import arrowDown from "@/assets/svgs/arrow-down.svg";
import React, {useState} from "react";
import Image from "next/image";
import TimelineEventList from "./TimelineEventList";

interface dropdownProps {
  text: string;
  value: string;
}

const dropdownItems: dropdownProps[] = [
  {
    text: "This month",
    value: "this-month",
  },

  {
    text: "Last month",
    value: "last-month",
  },
  {
    text: "Last year",
    value: "last-year",
  },
];

const TimelineEvents = () => {
  const [selectedItem, setSelectedItem] = useState<dropdownProps>(
    dropdownItems[0],
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleItemClick = (item: dropdownProps) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  const showDropdown = () => {
    setIsOpen((prev) => !prev);
  };

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
          <button
            className='flex justify-between w-36 rounded-md border border-lightGrey px-3 py-1 md:py-3'
            onClick={showDropdown}
          >
            {selectedItem.text} <Image src={arrowDown} alt='arrow down' />
          </button>

          <div
            className={`absolute mt-2 w-36 bg-white border-lightGrey rounded shadow-lg z-10 transition duration-200 ease-linear ${
              isOpen ? "translate-y-0" : "-translate-y-3"
            }`}
          >
            {isOpen ? (
              <>
                {dropdownItems.map((item) => (
                  <button
                    key={item.value}
                    className={`block px-4 py-2 text-gray w-full ${
                      selectedItem.value === item.value
                        ? "bg-charcoal text-white"
                        : ""
                    }`}
                    onClick={() => handleItemClick(item)}
                  >
                    {item.text}
                  </button>
                ))}{" "}
              </>
            ) : null}
          </div>
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
