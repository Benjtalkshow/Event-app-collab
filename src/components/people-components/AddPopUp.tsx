import React from "react";
import { SlClose } from "react-icons/sl";
import { cn } from "@/lib/utils";


interface PopupProps {
  onClose: () => void;
}

const Popup  = ({ onClose } : PopupProps) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-opacity-50 bg-white ">
      <div className="bg-white p-6 rounded-lg shadow-md relative w-1/3 h-1/3">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-600 transition duration-300 ease-in-out"
          onClick={onClose}
        >
              <SlClose className={cn("h-5 w-5 mr-3 text-xl")} />
        </button>
        <p className="text-2xl font-semibold mb-4">Add New Group Here:</p>
      </div>
    </div>
  );
};

export default Popup;
