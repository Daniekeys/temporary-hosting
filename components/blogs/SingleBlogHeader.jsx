import React from "react";
import ContainerLayout from "../../layouts/ContainerLayout";
import { Navlogo } from "../../assets/svg";
import logo from "../../assets/svg/log2.svg";
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";
import { RiArrowLeftSLine } from "react-icons/ri";
import heroImage from "../../assets/png/blog-hero.png";
import { useRouter } from "next/router";
import { data } from "./data";
import { blogPosts } from "../../utils/blog-data";
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";
import {BsFacebook} from "react-icons/bs"
const SingleBlogHeader = () => {
  const router = useRouter();
  const { id } = router.query;
  const blogId = Number(id);
  const item = blogPosts[blogId];
  


  return (
    <ContainerLayout>
      <div className="w-full flex flex-col pt-2 flow-hide mt-16">
        <div className="w-full mt-8 flex flex-col md:flex-row justify-between items-center md:mt-12">
          <div className="w-full md:w-8/12 items-center">
            <Image
              src={item?.leadImage}
              alt="hero"
              className="w-full h-auto max-h-[557px] object-contain rounded-[30px]"
              data-aos="fade-up"
              data-aos-duration="1000"
            />
          </div>
          <div
            className="w-full md:w-4/12 flex flex-col  justify-center md:pl-8"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <p className="text-[#333] mb-1">Share post to:</p>
            <div className="flex space-x-8 items-center">
              <AiFillLinkedin className="text-2xl cursor-pointer text-[#333]" />
              <BsFacebook className="text-2xl text-[#333] cursor-pointer" />
              <AiFillInstagram className="text-2xl text-[#333] cursor-pointer" />
              <AiFillTwitterCircle className="text-2xl text-[#333] cursor-pointer" />
            </div>
          </div>
        </div>
        <p
          className="text-base text-[#444] md:mt-16"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {item?.date}
        </p>
        <div className="w-8/12 flex flex-col">
          <h1
            className="text-4xl md:text-[52px] text-[#333] leading-[78px]"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {item?.title}
          </h1>
          <div className="flex flex-col gap-8 mt-8">
            {item?.bodyContent?.slice(0, 2)?.map((item, index) => {
              return (
                <p
                  className="text-[#333] text-xl"
                  key={index}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  {item}
                </p>
              );
            })}
          </div>
          {item?.supportImage && (
            <div className="mt-8 w-full lg:w-8/12 mx-auto">
              <Image
                src={item?.supportImage}
                alt="hero"
                className="w-full h-auto max-h-[557px] object-contain rounded-[30px]"
                data-aos="fade-up"
                data-aos-duration="1000"
              />
            </div>
          )}
          <div className="flex flex-col gap-8 mt-8">
            {item?.bodyContent?.slice(2)?.map((item, index) => {
              return (
                <p
                  className="text-[#333] text-xl"
                  key={index}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  {item}
                </p>
              );
            })}
          </div>
          {/* end of an ending */}
          <h1 className="md:text-[40px] text-[#555] mt-12 mb-8 font-normal ">
            People Also Read
          </h1>
        </div>
        <div className="w-full grid grid-cols-1 gap-x-8 gap-y-12  sm:grid-cols-2 lg:grid-cols-3 flow-hide">
          {blogPosts?.slice(0, 3)?.map((item, index) => (
            <div
              className="w-full flex flex-col"
              key={index}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={`${(index + 1) * 300}`}
             
            >
              <Image
                src={item.leadImage}
                alt="image"
                className="w-full object-cover mx-auto md:w-full h-auto rounded-[30px]"
              />
              <p className="text-[12px] md:text-base text-[#555] mt-4 ">
                {item.date}
              </p>
              <p className="text-2xl md:text-[32px] text-[#555] leading-[40px] mt-4">
                {item.title}
              </p>
              <p className="text-sm md:text-xl text-[#555] mt-4">
                {item.summaryHeading}
              </p>
              <p
                className="hover:bg-mainBlue bg-white   text-base text-mainBlue border border-mainBlue hover:border-none  hover:text-white  font-semibold mt-4  w-fit px-[10px] py-[15px] cursor-pointer h-[50px] rounded-[50px] flex items-center justify-center "
                onClick={() => router.push(`/blog/${index}`)}
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

export default SingleBlogHeader;
