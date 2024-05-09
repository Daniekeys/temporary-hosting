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

const NewNavbar = () => {
  const router = useRouter();
  const [isAboutUsDropdownOpen, setIsAboutUsDropdownOpen] = useState(false);

  return (
    <div
      className={`bg-[#F5F4FB] fixed top-0 right-0 left-0 z-high w-full h-[68px] lg:flex items-center hidden `}
    >
      <ContainerLayout>
        <div className="w-full flex items-center justify-between  h-[68px]">
          <div>
            <span className="cursor-pointer" onClick={() => router.push("/")}>
              {" "}
              <Image src={logo} alt="logo" />{" "}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <div
              onClick={() => setIsAboutUsDropdownOpen(!isAboutUsDropdownOpen)}
              className="flex items-center gap-2 cursor-pointer"
            >
              <p className="text-ash lg:text-base font-semibold ">About Us</p>
              <span>
                <ArrowDown />
              </span>
            </div>
            <Link href="/products" className="flex items-center gap-2 ">
              <p className="text-ash lg:text-base font-semibold ">Products</p>
              <span>
                <ArrowDown />
              </span>
            </Link>
            <Link href="/contactus" className="flex items-center gap-2 ">
              <p className="text-ash lg:text-base font-semibold ">Contact Us</p>
            </Link>
            <div className="flex items-center gap-2 ">
              <p className="text-mainBlue lg:text-base font-semibold ">
                Sign in
              </p>
            </div>
            <Link
              href="/"
              className="bg-mainBlue h-[50px] flex items-center text-white rounded-[50px] px-5 "
            >
              Create account
            </Link>
          </div>
        </div>

        {/* AboutUs DropDown */}
        {isAboutUsDropdownOpen && (
          <div className="w-[50rem] h-[220px] bg-white absolute right-0 rounded-b-xl">
            <div className="w-full h-[100px] bg-white flex justify-between items-center p-4">
              <div
                onClick={() => router.push("/projects")}
                className="w-1/2 h-auto flex items-center cursor-pointer hover:bg-[#F5F4FB] rounded-xl"
              >
                <Image src={project} alt="project" />
                <div className="ml-[21px]">
                  <p className="text-[#555555] text-[16px] font-semibold">
                    Projects
                  </p>
                  <p className="text-[#555555] text-[14px] font-medium">
                    Lorem ipsum dolor sit amet consectetur. Bibendum sit sed.
                  </p>
                </div>
              </div>

              <div
                onClick={() => router.push("/cases")}
                className="w-1/2 h-auto flex items-center cursor-pointer hover:bg-[#F5F4FB] rounded-xl"
              >
                <Image src={cases} alt="cases" />
                <div className="ml-[21px]">
                  <p className="text-[#555555] text-[16px] font-semibold">
                    Cases
                  </p>
                  <p className="text-[#555555] text-[14px] font-medium">
                    Lorem ipsum dolor sit amet consectetur. Bibendum sit sed.
                  </p>
                </div>
              </div>
            </div>

            <div
              onClick={() => router.push("/blog")}
              className="w-full h-[100px] bg-white flex justify-between items-center p-4"
            >
              <div className="w-1/2 h-auto flex items-center cursor-pointer hover:bg-[#F5F4FB] rounded-xl">
                <Image src={blog} alt="blog" />
                <div className="ml-[21px]">
                  <p className="text-[#555555] text-[16px] font-semibold">
                    Blog
                  </p>
                  <p className="text-[#555555] text-[14px] font-medium">
                    Lorem ipsum dolor sit amet consectetur. Bibendum sit sed.
                  </p>
                </div>
              </div>

              <div
                onClick={() => router.push("/downloadapp")}
                className="w-1/2 h-auto flex items-center cursor-pointer hover:bg-[#F5F4FB] rounded-xl"
              >
                <Image src={download} alt="download" />
                <div className="ml-[21px]">
                  <p className="text-[#555555] text-[16px] font-semibold">
                    Download app
                  </p>
                  <p className="text-[#555555] text-[14px] font-medium">
                    Lorem ipsum dolor sit amet consectetur. Bibendum sit sed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </ContainerLayout>
    </div>
  );
};

export default NewNavbar;
