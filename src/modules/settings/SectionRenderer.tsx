import Image from "next/image";
import Link from "next/link";
import arrow from "../../assets/svgs/arrow-right.svg";
import React from "react";

const SectionRenderer = ({ sectionItems }: sectionItems) => {
  function formatActions(actions: string[]) {
    switch (actions?.length) {
      case 0:
        return "";
      case 1:
        return actions[0] + ".";
      case 2:
        return actions.join(" and ");
      default:
        const lastAction = actions[actions.length - 1];
        const precedingActions = actions.slice(0, -1).join(", ");
        return precedingActions + " and " + lastAction;
    }
  }

  return (
    <div>
      {sectionItems.map((item, index) => (
        <Link
          href={item.to}
          key={index}
          className={`${item.class} ${index === 0 && "rounded-t-lg"} ${
            index === sectionItems?.length - 1 && "rounded-b-lg"
          } p-6 md:p-10 flex items-center justify-between cursor-pointer hover:brightness-[.97]  transition duration-100`}
        >
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <Image src={item?.icon} width={32} height={32} alt="item icon" />
            <div>
              <h3 className="font-inter font-medium text-2xl">{item?.title}</h3>
              <span className="text-primary-grey">
                {formatActions(item?.actions)}
              </span>
            </div>
          </div>
          <Image src={arrow} width={24} height={24} alt="arrow right icon" />
        </Link>
      ))}
    </div>
  );
};

export default SectionRenderer;
