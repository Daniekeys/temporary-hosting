import React from "react";
import Image from "next/image";
import ContainerLayout from "../../layouts/ContainerLayout";
import spiral from "../../assets/png/spiral-curve.png";
import desktopIcon from "../../assets/svg/desktop-icon.svg"
import bookIcon from "../../assets/svg/book-icon.svg"
import angola from "../../assets/png/laptop-pic.png";
const OtherInnovations = () => {
  return (
    <div className="w-full flex flex-col rounded-t-[50px] bg-[#EDE6FF] relative overflow-y-hidden ">
      <div className="absolute top-0 left-0 ">
        <Image src={spiral} alt="spiral" />
      </div>
      <ContainerLayout>
        <div className="w-full py-20 lg:py-28 flex flex-col items-center justify-center">
          <div className="w-full flex items-center justify-center gap-4">
            <span>
              <Image src={desktopIcon} alt="des" />
            </span>
            <h1 className="text-2xl lg:text-[32px] font-semibold text-mainBlue">
              Project Management Dasboard
            </h1>
          </div>
          <div className="flex flex-col items-center relative mt-12">
            <span className="">
              <Image
                src={angola}
                alt="images"
                className="mx-auto max-w-[435px] h-auto "
              />
            </span>
          </div>
          <p
            className="text-center mx-auto text-ash text-sm lg:text-lg lg:leading-[36px] max-w-[977px] mt-6"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Lorem ipsum dolor sit amet consectetur. Id suspendisse enim elit
            ipsum feugiat sed vulputate id amet. Etiam arcu ultricies mauris
            neque porta porta egestas amet. Ut luctus risus dictum urna commodo
            in egestas. Massa lectus ut ornare orci sit.
          </p>
          <div
            className="w-full flex items-center gap-2 justify-center mt-8"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <button className="bg-mainBlue text-white h-[47px] items-center justify-center rounded-[50px] font-semibold flex min-w-[197px] ">
              Create free account
            </button>
            <button className="border bg-white border-mainBlue text-mainBlue h-[47px] items-center justify-start gap-4 rounded-[50px] font-semibold flex min-w-[197px] border-opacity-30 px-2">
              <span>
                <Image src={bookIcon} alt="book" />
              </span>
              Book a demo
            </button>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default OtherInnovations;
