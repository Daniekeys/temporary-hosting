import React, { useState } from "react";
import ContainerLayout from "../../layouts/ContainerLayout";
import logo from "../../assets/png/new-logo.png";
import { useRouter } from "next/router";
import Image from "next/image";
import project from "../../assets/svg/project.svg";
import blog from "../../assets/svg/blog.svg";
import cases from "../../assets/svg/cases.svg";
import download from "../../assets/svg/download.svg";
import Link from "next/link";
import { ArrowDown } from "../../assets/svg";
import emuration from "../../assets/svg/emuration.svg";
import reporting from "../../assets/svg/reporting.svg";

const NewNavbar = () => {
  const router = useRouter();
  const [isAboutUsDropdownOpen, setIsAboutUsDropdownOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

  return (
    <div
      className={`bg-[#F9F6FF] fixed top-0 right-0 left-0 z-high w-full h-[68px] lg:flex items-center hidden rounded-b-[50px] `}
    >
      <ContainerLayout>
        <div className="w-full flex items-center justify-between relative  h-[68px]">
          <div>
            <span className="cursor-pointer" onClick={() => router.push("/")}>
              {" "}
              <Image src={logo} alt="logo" />{" "}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <div
              onClick={() => {
                setIsAboutUsDropdownOpen(!isAboutUsDropdownOpen);
                setIsProductDropdownOpen(false);
              }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <p className="text-ash lg:text-base font-semibold ">About Us</p>
              <span>
                <ArrowDown />
              </span>
            </div>
            <div
              onClick={() => {
                setIsProductDropdownOpen(!isProductDropdownOpen);
                setIsAboutUsDropdownOpen(false);
              }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <p className="text-ash lg:text-base font-semibold ">Products</p>
              <span>
                <ArrowDown />
              </span>
            </div>
            <Link href="/contact-us" className="flex items-center gap-2 ">
              <p className="text-ash lg:text-base font-semibold ">Contact Us</p>
            </Link>
            <div className="flex items-center gap-2 ">
              <p className="text-mainBlue hover:bg-[#E3D5FF] lg:text-base font-semibold px-4 py-2 rounded-[50px] cursor-pointer ">
                Sign in
              </p>
            </div>
            <Link
              href="/"
              className="bg-mainBlue hover:bg-[#E3D5FF] h-[50px] flex items-center text-white hover:text-mainBlue rounded-[50px] px-5 cursor-pointer "
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* AboutUs DropDown */}
        {isAboutUsDropdownOpen && (
          <div className="w-[900px] flex flex-col left-[25%] 2xl:left-[35%] absolute right-0 nav-layer rounded-b-[30px] bg-[#F9F6FF] py-2 px-3 transition-all ease-in-out duration-1000 ">
            <div className="w-full     rounded-b-[30px]  grid grid-cols-2 gap-8">
              <div
                onClick={() => router.push("/our-project")}
                className="w-full h-auto flex items-center cursor-pointer hover:bg-[#fff]  rounded-[20px] px-4 py-2 transition-all duration-1000 ease-in-out "
              >
                <Image
                  src={project}
                  alt="project"
                  className="w-20 h-20 rounded-full"
                />
                <div className="ml-[21px]">
                  <p className="text-[#555555] text-base font-semibold">
                    Projects
                  </p>
                  <p className="text-[#555555] text-sm font-medium">
                    Lorem ipsum dolor sit amet
                  </p>
                </div>
              </div>

              <div
                onClick={() => router.push("/applicable-cases")}
                className="w-full h-auto flex items-center cursor-pointer hover:bg-[#fff]  rounded-[20px] px-4 py-2 transition-all duration-1000 ease-in-out "
              >
                <Image
                  src={cases}
                  alt="cases"
                  className="w-20 h-20 rounded-full"
                />
                <div className="ml-[21px]">
                  <p className="text-[#555555] text-[16px] font-semibold">
                    Cases
                  </p>
                  <p className="text-[#555555] text-[14px] font-medium">
                    Lorem ipsum dolor sit amet
                  </p>
                </div>
              </div>

              <div
                onClick={() => router.push("/blog")}
                className="w-full h-auto flex items-center cursor-pointer hover:bg-[#fff]  rounded-[20px] px-4 py-2 transition-all duration-1000 ease-in-out "
              >
                <Image
                  src={blog}
                  alt="blog"
                  className="w-20 h-20 rounded-full"
                />
                <div className="ml-[21px]">
                  <p className="text-[#555555] text-[16px] font-semibold">
                    Blog
                  </p>
                  <p className="text-[#555555] text-[14px] font-medium">
                    Lorem ipsum dolor sit amet
                  </p>
                </div>
              </div>

              <div
                onClick={() => router.push("/download")}
                className="w-full h-auto flex items-center cursor-pointer hover:bg-[#fff]  rounded-[20px] px-4 py-2 transition-all duration-1000 ease-in-out "
              >
                <Image
                  src={download}
                  alt="download"
                  className="w-20 h-20 rounded-full"
                />
                <div className="ml-[21px]">
                  <p className="text-[#555555] text-[16px] font-semibold">
                    Download app
                  </p>
                  <p className="text-[#555555] text-[14px] font-medium">
                    Lorem ipsum dolor sit ame.
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="w-full grid grid-cols-2">
              <div className="shadow-one w-full h-4 bg-transparent"></div>
              <div className="shadow-one w-full h-4 bg-transparent"></div>
            </div> */}
          </div>
        )}

        {isProductDropdownOpen && (
          <div className="w-[35rem] product-shadow  bg-[#F9F6FF] absolute right-0 2xl:right-[220px] p-2 rounded-b-[30px]">
            <div
              // onClick={() => router.push("/download")}
              className="w-full h-auto flex items-center cursor-pointer hover:bg-[#fff]  rounded-[20px] px-4 py-2 transition-all duration-1000 ease-in-out "
            >
              <Image src={emuration} alt="emuration" />
              <div className="ml-[21px]">
                <p className="text-[#555555] text-[16px] font-semibold">
                  Enumeration app
                </p>
                <p className="text-[#555555] text-[14px] font-medium">
                  Lorem ipsum dolor sit amet
                </p>
              </div>
            </div>

            <div
              // onClick={() => router.push("/download")}
              className="w-full h-auto flex items-center cursor-pointer hover:bg-[#fff]  rounded-[20px] px-4 py-2 transition-all duration-1000 ease-in-out "
            >
              <Image src={reporting} alt="reporting" />
              <div className="ml-[21px]">
                <p className="text-[#555555] text-[16px] font-semibold">
                  Reporting dashboard
                </p>
                <p className="text-[#555555] text-[14px] font-medium">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>
          </div>
        )}
      </ContainerLayout>
    </div>
  );
};

export default NewNavbar;
