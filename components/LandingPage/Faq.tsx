import React, { useState } from "react";
import Image from "next/image";
import ContainerLayout from "../../layouts/ContainerLayout";
import add from "../../assets/svg/arrow-down.svg";
import minus from "../../assets/svg/minus.svg";
import { faqData } from "../../utils/faqdata";

const Faq = () => {
  return (
    <div className="w-full bg-[#fff] h-auto py-[100px] mt-12 flow-hide" id="faq">
      <ContainerLayout>
        <div className="w-full flex flex-col">
          <p
            className="text-[#333333] text-xl leading-[30px] lg:text-[36px] font-semibold text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            FAQ
          </p>
          <p
            className="text-[#555555] text-sm  lg:text-[20px] font-medium text-center mt-[10px] leading-[25px] lg:leading-[35px]"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Find quick answers to some frequently asked questions
          </p>

          <div className="w-full bg-[#F9F6FF] h-auto rounded-[30px] flex flex-col mt-[30px] md:mt-[50px] p-5  lg:p-[30px]">
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
      className={`flex flex-col w-full py-5 lg:px-7 px-4 ${
        isLast ? "border-none" : "bg-[#fff] rounded-[20px] mb-5"
      }`}
    >
      <div
        className="flex space-x-5 items-center justify-between  "
        onClick={() => setIsOpen(!isOpen)}
      >
        <p
          className={`md:text-lg  ${
            isOpen ? "text-ash" : "text-customBlack"
          }  font-bold  text-sm cursor-pointer`}
        >
          {title}
        </p>
        <Image
          src={isOpen ? add : minus}
          alt="add "
          className="w-[20px] h-[16px]"
        />
      </div>
      {isOpen && (
        <div
          className="flex flex-col mt-3 "
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <p className="text-ash md:text-lg lg:w-11/12 ">{story}</p>
          {list.length !== 0 && (
            <ul className="list-disc ">
              {list.map((item: any, index: number) => {
                return (
                  <li
                    className="text-ash md:text-lg text-sm lg:w-9/12"
                    key={index}
                  >
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
