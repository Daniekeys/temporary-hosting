import React, { useEffect } from "react";
import ContainerLayout from "../../layouts/ContainerLayout";
import Image from "next/image";
import cookie from "../../assets/png/chat-msg.png";


const FaqHero = () => {
    useEffect(() => {
      window?.scrollTo(0, 0);
    }, []);
  return (
    <ContainerLayout>
      <div className="w-full bg-[#F6F1FF] rounded-[30px] h-[153px] lg:h-[234px] mt-28 mb-16 flex items-center">
        <div className="w-10/12 lg:w-10/12 flex items-center justify-between mx-auto">
          <h1
            className="text-mainBlue font-semibold   2xl:text-[64px] uppercase text-[48px] leading-[55px] 2xl:leading-[80px] "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            FREQUENTLY ASKED QUESTIONS
          </h1>

          <div
            className=" hidden md:flex justify-end"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
           
              <Image
                src={cookie}
              alt="image"
              width={139}
              height={139}
              
                className="w-auto aspect-square  rounded-full object-contain h-[200px]"
              />
         
          </div>
        </div>
      </div>
    </ContainerLayout>
  );
};

export default FaqHero;
