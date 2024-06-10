import React from "react";

import ContainerLayout from "../../layouts/ContainerLayout";
import Image from "next/image";
import { data } from "./data";
import { useRouter } from "next/router";
import { blogPosts } from "../../utils/blog-data";

const AllBlogs = () => {
  const router = useRouter();
  return (
    <ContainerLayout>
      <div
        className="w-full flex flex-col mt-20 mb-8 md:mb-0"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1
          className="mt-16 text-[#555] text-2xl md:text-[40px] mb-8 font-[500]"
          // data-aos="fade-up"
          // data-aos-duration="1000"
        >
          Older posts
        </h1>
        <div className="w-full grid grid-cols-1 gap-x-8 gap-y-12  sm:grid-cols-2 lg:grid-cols-3 overflow-y-hidden">
          {blogPosts?.slice(1, 6)?.map((item, index) => (
            <div
              className="w-full flex flex-col"
              key={index}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <Image
                src={item.leadImage}
                alt="image"
                className="w-full object-cover mx-auto md:w-full h-auto rounded-[30px]"
              />
              <p className="text-[12px] md:text-base text-[#555] mt-4 ">
                {item.date}
              </p>
              <p className="text-2xl md:text-[32px] text-[#555] leading-[40px] mt-4 truncate">
                {item.title}
              </p>
              <p className="text-sm md:text-xl text-[#555] mt-4">
                {item.summaryHeading}
              </p>
              <p
                className="hover:bg-[#E3D5FF] bg-white   text-base text-mainBlue border border-mainBlue hover:border-none    font-semibold mt-4  w-fit px-[30px] py-[15px] cursor-pointer h-[50px] rounded-[50px] flex items-center justify-center hover:text-mainBlue "
                onClick={() => router.push(`/blog/${index + 1}`)}
              >
                Read
              </p>
            </div>
          ))}
        </div>
      </div>
    </ContainerLayout>
  );
};

export default AllBlogs;
