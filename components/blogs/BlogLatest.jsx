import React from "react";
import ContainerLayout from "../../layouts/ContainerLayout";
import Image from "next/image";
import heroImage from "../../assets/png/fpmp-pic.png";
import { useRouter } from "next/router";
const BlogLatest = () => {
  const router = useRouter();

  return (
    <ContainerLayout>
      <div className="w-full flex flex-col pt-2">
        {/* <div className='w-full h-[1px] mt-10 bg-[#999]' /> */}
        <h1 className="mt-16 text-[#555] text-xl md:text-[40px] font-[500] ">
          Latest
        </h1>
        <div className="w-full mt-12 flex flex-col md:flex-row justify-between items-center ">
          <div className="w-full md:w-6/12 items-center">
            <Image
              src={heroImage}
              alt="hero"
              className="w-full h-auto rounded-[30px]"
            />
          </div>
          <div className="w-full md:w-5/12 flex flex-col justify-center">
            <p className="text-[12px] md:text-base text-[#555] md:mt-6 2xl:mt-0 ">
              April 12 . 10:52 PM
            </p>
            <h2 className="md:w-11/12 w-full text-[32px] 2xl:text-[40px] font-[500] text-[#333] my-7 md:mt-2 md:mb-2 text-2xl md:leading-[60px]">
              WeCollect carries out Food Price Monitoring...
            </h2>
            <p className="text-[#555] text-sm md:text-xl">
              WeCollect carries out the maiden edition of Food Price Monitoring
              Project in Nigeria. This edition is designed to take place in the
              6 SouthWestern...
            </p>
            <p
              className="hover:bg-mainBlue bg-white   text-base text-mainBlue border border-mainBlue hover:border-none  hover:text-white  font-semibold mt-4  w-fit px-[10px] py-[15px] cursor-pointer h-[50px] rounded-[50px] flex items-center justify-center "
              onClick={() => router.push(`/blog`)}
            >
              Read
            </p>
          </div>
        </div>
      </div>
    </ContainerLayout>
  );
};

export default BlogLatest;
