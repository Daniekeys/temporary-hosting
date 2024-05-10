import React, { useState } from "react";
import Image from "next/image";
import ContainerLayout from "../../layouts/ContainerLayout";
import add from "../../assets/svg/arrow-down.svg";
import minus from "../../assets/svg/minus.svg";
import { faqData } from "../../utils/faqdata";

const Faq = () => {
  return (
    <div className="w-full bg-[#fff] h-auto py-[100px]" id="faq">
      <ContainerLayout>
        <div className="w-full flex flex-col">
          <p className="text-[#333333] text-[36px] font-semibold text-center">
            FAQ
          </p>
          <p className="text-[#555555] text-[20px] font-medium text-center mt-[10px]">
            Find quick answers to some frequently asked questions
          </p>

          <div className="w-full bg-[#EDE6FF] h-auto rounded-[30px] flex flex-col mt-[30px] md:mt-[50px] p-5 lg:p-[30px]">
            {faqData.map((item: any, index: number) => {
              return <SingleFaq item={item} key={index} />;
            })}
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default Faq;

const SingleFaq = ({ item }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const { title, story, list, isLast } = item;

  return (
    <div
      className={`flex flex-col w-full py-5 ${
        isLast ? "border-none" : "bg-[#fff] rounded-[20px] mb-5"
      }`}
    >
      <div
        className="flex space-x-5 items-center justify-between px-2 md:px-5"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="md:text-[22px] text-[#0E0E0E] font-bold sat-bold text-sm">
          {title}
        </p>
        <Image src={isOpen ? minus : add} alt="add " className="w-[20px] h-[16px]" />
      </div>
      {isOpen && (
        <div className="flex flex-col mt-3 p-2 lg:pl-[44px]">
          <p className="text-[#0E0E0E] md:text-lg ">{story}</p>
          {list.length !== 0 && (
            <ul className="list-disc ">
              {list.map((item: any, index: number) => {
                return (
                  <li className="text-[#0E0E0E] md:text-lg text-sm" key={index}>
                    {item}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};
