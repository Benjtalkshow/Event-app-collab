import React from "react";
import Image from "next/image";
import addIcon from "../../../public/images/addpeopleicon.png";

function AddBtn() {
  return <>
  <button className="bg-primary whitespace-normal px-3 flex items-center py-3 gap-3 rounded-lg"><Image src={addIcon} alt="add people button" />
  <p className="font-montserrat">Create New Group</p>
  </button>
  </>;
}

export default AddBtn;
