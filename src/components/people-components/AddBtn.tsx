import React from "react";
import Image from "next/image";
import addIcon from "../../../public/images/addpeopleicon.png";

const AddBtn = ({ label, onClick }: AddBtnProps) => {
  const buttonClasses: string = "px-3 md:px-6 flex items-center ml-auto py-3 gap-3 rounded-lg bg-peach";
  
// Add New Group Button in people page
  return (
  <div className="container mt-10"> 
      <button className={buttonClasses} onClick={onClick}>
        <Image src={addIcon} alt="add people button" />
        <p className="font-montserrat">{label}</p>
      </button>
    </div>
  );
}

export default AddBtn;

