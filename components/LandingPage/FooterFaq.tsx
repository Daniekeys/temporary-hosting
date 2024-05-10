import React, { useState } from "react";
import Image from "next/image";
import { mobileFooterData } from "../../utils/mobileFooterData";
import blueangle from "../../assets/svg/blueangleright.svg";
import grayangle from "../../assets/svg/grayangledown.svg";

function FooterFaq() {
  return (
    <div className="w-full h-auto mt-[66px] md:hidden">
      <div className="flex flex-col">
        {mobileFooterData.map((item: any, index: number) => {
          return <SingleActivities item={item} key={index} />;
        })}
      </div>
    </div>
  );
}

export default FooterFaq;

const SingleActivities = ({ item }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const { title, list1, list2, list3, list4, list5 } = item;

  return (
    <div className="w-full rounded-[20px] px-5">
      <div
        className="w-full m-auto flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p
          className="text-[14px] font-bold cursor-pointer
        text-[#555555] mb-3 mt-4"
        >
          {title}
        </p>

        <p className="cursor-pointer">
          {isOpen ? (
            <Image src={grayangle} alt="" />
          ) : (
            <Image src={blueangle} alt="" />
          )}
        </p>
      </div>
      {isOpen && (
        <div className="text-[#555555] text-[14px] font-medium">
          <p className="mt-4">{list1}</p>
          <p className="mt-3">{list2}</p>
          <p className="mt-3">{list3}</p>
          <p className="mt-3">{list4}</p>
          <p className="mt-3">{list5}</p>
        </div>
      )}
    </div>
  );
};
