import React, { useState } from "react";
import ContainerLayout from "../../layouts/ContainerLayout";
import logo from "../../assets/svg/we-logo.svg";
import { useRouter } from "next/router";
import Image from "next/image";
import project from "../../assets/svg/project.svg";
import blog from "../../assets/png/blog-png.png";
import cases from "../../assets/svg/cases.svg";
import download from "../../assets/png/download-png.png";
import Link from "next/link";
import { ArrowDown, CancelIcon } from "../../assets/svg"; 
import emuration from "../../assets/svg/emuration.svg";
import reporting from "../../assets/svg/reporting.svg";
import learning from "../../assets/svg/wecollect-learning.svg"
const NewNavbar = () => {
  const router = useRouter();
  const [isAboutUsDropdownOpen, setIsAboutUsDropdownOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [rotateAbout, setRotateAbout] = useState(false);
  const [rotateProduct, setRotateProduct] = useState(false); 
  const [open, setOpen] = useState(false);
  const [openSecond, setOpenSecond] = useState(false);


  return (
    <>
      <div
        className={`bg-[#F5F4FB] fixed top-0 right-0 left-0 z-high w-full h-[68px] lg:flex items-center hidden rounded-b-[50px] `}
      >
        <ContainerLayout>
          <div className="w-full flex items-center justify-between relative  h-[68px]">
            <div>
              <span
                className="cursor-pointer"
                onClick={() => router.push("/home")}
              >
                {" "}
                <Image src={logo} alt="logo" />{" "}
              </span>
            </div>

            <div className="flex items-center gap-6">
              {/* <Link
              href="/home"
              className="rounded-[50px] gap-2 h-[50px] hover:bg-[#E3D5FF] flex items-center px-4 hover:text-mainBlue text-ash"
              >
              <p className=" lg:text-base font-semibold ">Home</p>
              </Link> */}
              <div
                onMouseEnter={() => {
                  setIsAboutUsDropdownOpen(!isAboutUsDropdownOpen);
                  setIsProductDropdownOpen(false);
                  setRotateAbout(!rotateAbout);
                  setRotateProduct(false);
                }}
                className="flex items-center gap-2 cursor-pointer hover:bg-[#E3D5FF] px-4 h-[50px] rounded-[50px] text-ash hover:text-mainBlue text-sm 2xl:text-base"
              >
                <p className=" text-sm 2xl:text-base font-semibold ">
                  About Us
                </p>
                <span
                  className={
                    rotateAbout
                      ? "rotate-180 duration-500 ease-in-out"
                      : "rotate-0 duration-500 ease-in-out"
                  }
                >
                  <ArrowDown />
                </span>
              </div>
              <div
                onMouseEnter={() => {
                  setIsProductDropdownOpen(!isProductDropdownOpen);
                  setIsAboutUsDropdownOpen(false);
                  setRotateProduct(!rotateProduct);
                  setRotateAbout(false);
                }}
                className="flex items-center gap-2 cursor-pointer hover:bg-[#E3D5FF] px-4 h-[50px] rounded-[50px] hover:text-mainBlue text-ash"
              >
                <p className=" text-sm 2xl:text-base font-semibold ">
                  Products
                </p>
                <span
                  className={
                    rotateProduct
                      ? "rotate-180 duration-500 ease-in-out"
                      : "rotate-0 duration-500 ease-in-out"
                  }
                >
                  <ArrowDown />
                </span>
              </div>
              <Link
                href="/contact-us"
                className="rounded-[50px] gap-2 h-[50px] hover:bg-[#E3D5FF] flex items-center px-4 text-ash hover:text-mainBlue"
              >
                <p className=" lg:text-base font-semibold ">Contact Us</p>
              </Link>
              <div className="flex items-center gap-2 ">
                <p className="text-mainBlue h-[50px] hover:bg-[#E3D5FF] flex items-center lg:text-base font-semibold px-4 py-2 rounded-[50px] cursor-pointer ">
                  Sign in
                </p>
              </div>
              <button
                className="bg-mainBlue hover:bg-[#E3D5FF] h-[50px] font-semibold flex items-center text-white hover:text-mainBlue rounded-[50px] px-5 cursor-pointer "
                onClick={() => setOpen(true)}
              >
                Get Quote
              </button>
            </div>
          </div>

          {/* AboutUs DropDown */}
          {isAboutUsDropdownOpen && (
            <div
              className="w-[900px] flex flex-col left-[25%] 2xl:left-[35%] absolute right-0 nav-layer rounded-b-[30px] bg-[#F9F6FF] py-2 px-3 transition-all ease-in-out duration-1000 "
              onMouseLeave={() => {
                setIsAboutUsDropdownOpen(!isAboutUsDropdownOpen);
                setIsProductDropdownOpen(false);
                setRotateAbout(!rotateAbout);
                setRotateProduct(false);
              }}
            >
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
                      Check out our projects
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
                      Project examples
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
                      Learn about our process
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
                      Start collecting data
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
            <div
              className="w-[35rem] product-shadow  bg-[#F9F6FF] absolute right-0 2xl:right-[264px] p-2 rounded-b-[30px]"
              onMouseLeave={() => {
                setIsProductDropdownOpen(!isProductDropdownOpen);
                setIsAboutUsDropdownOpen(false);
                setRotateProduct(!rotateProduct);
                setRotateAbout(false);
              }}
            >
              <div
                onClick={() => router.push("/innovations#app")}
                className="w-full h-auto flex items-center cursor-pointer hover:bg-[#fff]  rounded-[20px] px-4 py-2 transition-all duration-1000 ease-in-out "
              >
                <Image src={emuration} alt="emuration" />
                <div className="ml-[21px]">
                  <p className="text-[#555555] text-[16px] font-semibold">
                    Smart Data Collection App
                  </p>
                  <p className="text-[#555555] text-[14px] font-medium">
                    Collect data anywhere and anytime
                  </p>
                </div>
              </div>

              <div
                onClick={() => router.push("/innovations#dashboard")}
                className="w-full h-auto flex items-center cursor-pointer hover:bg-[#fff]  rounded-[20px] px-4 py-2 transition-all duration-1000 ease-in-out "
              >
                <Image src={reporting} alt="reporting" />
                <div className="ml-[21px]">
                  <p className="text-[#555555] text-[16px] font-semibold">
                    Project Management Dashboard
                  </p>
                  <p className="text-[#555555] text-[14px] font-medium">
                    Track and monitor your project
                  </p>
                </div>
              </div>
              <div
                onClick={() => router.push("#")}
                className="w-full h-auto flex items-center cursor-pointer hover:bg-[#fff]  rounded-[20px] px-4 py-2 transition-all duration-1000 ease-in-out "
              >
                <Image src={learning} alt="reporting" />
                <div className="ml-[21px]">
                  <p className="text-[#555555] text-[16px] font-semibold">
                    WeCollect Learning
                  </p>
                  <p className="text-[#555555] text-[14px] font-medium">
                    Get training on data and analytics
                  </p>
                </div>
              </div>
            </div>
          )}
        </ContainerLayout>
      </div>
      {open && (
        <div className="w-full fixed z-modal inset-0 overlay-shadow flex items-center justify-center bg-white h-screen ">
          <div className="w-full max-h-[500px] lg:max-h-[750px] flow-hide bg-white rounded-lg lg:rounded-[50px] lg:max-w-[800px] xl:max-w-[900px] lg:p-12 xl:p-16 px-4 py-8 flex flex-col  ">
            {/* header session */}
            <div className="w-full flex items-center justify-between">
              <p></p>
              <h1 className="text-2xl lg:text-3xl text-customBlack font-bold">
                GET A QUOTE
              </h1>

              <span className="cursor-pointer" onClick={() => setOpen(false)}>
                <CancelIcon />
              </span>
            </div>

            {/* end of session */}
            <p className="text-center text-[#555] text-lg bg-[#f1f1f1] h-[35px] px-2 py-1 mt-1 w-fit mx-auto rounded-[20px]">
              Personalized quote for your project ✨
            </p>

            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-9 mt-11">
              {/* start */}
              <div className="flex flex-col">
                <label
                  htmlFor=""
                  className=" text-[#555] text-sm lg:text-base mb-1"
                >
                  Number of agents
                </label>
                <input
                  type="number"
                  className="w-full border-[2px] border-white bg-mainBlue bg-opacity-5 outline-none h-[50px] rounded-[50px] px-4 "
                  placeholder="e.g 10"
                />
              </div>
              {/* end */}
              {/* start */}
              <div className="flex flex-col">
                <label
                  htmlFor=""
                  className=" text-[#555] text-sm lg:text-base mb-1"
                >
                  Number of locations
                </label>
                <input
                  type="number"
                  className="w-full border-[2px] border-white bg-mainBlue bg-opacity-5 outline-none h-[50px] rounded-[50px] px-4 "
                  placeholder="e.g 10"
                />
              </div>
              {/* end */}
              {/* start */}
              <div className="flex flex-col">
                <label
                  htmlFor=""
                  className=" text-[#555] text-sm lg:text-base mb-1"
                >
                  Project start date
                </label>
                <input
                  type="date"
                  className="w-full border-[2px] border-white bg-mainBlue bg-opacity-5 outline-none h-[50px] rounded-[50px] px-4 "
                  placeholder="e.g 10"
                />
              </div>
              {/* end */}
              {/* start */}
              <div className="flex flex-col">
                <label
                  htmlFor=""
                  className=" text-[#555] text-sm lg:text-base mb-1"
                >
                  Use cases
                </label>
                <input
                  type="text"
                  className="w-full border-[2px] border-white bg-mainBlue bg-opacity-5 outline-none h-[50px] rounded-[50px] px-4 "
                  placeholder="Enter a use case"
                />
              </div>
              {/* end */}
              {/* start */}
              <div className="flex flex-col">
                <label
                  htmlFor=""
                  className=" text-[#555] text-sm lg:text-base mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border-[2px] border-white bg-mainBlue bg-opacity-5 outline-none h-[50px] rounded-[50px] px-4 "
                  placeholder="Enter a use case"
                />
              </div>
              {/* end */}
              {/* start */}
              <div className="flex flex-col">
                <label
                  htmlFor=""
                  className=" text-[#555] text-sm lg:text-base mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full border-[2px] border-white bg-mainBlue bg-opacity-5 outline-none h-[50px] rounded-[50px] px-4 "
                  placeholder="Enter a use case"
                />
              </div>
              {/* end */}
              {/* start */}
              <div className="flex flex-col">
                <button className="w-full font-semibold text-sm lg:text-base flex bg-mainBlue text-white h-[50px] items-center justify-center rounded-[50px]">
                  Request Quote
                </button>
                <p className="text-center text-[#9999FF] mt-3 font-medium text-xs">
                  You are agreeing to be contacted when you request a quote from
                  us
                </p>
              </div>
              {/* end */}
              {/* start */}
              <div className="flex flex-col">
                <div className=" text-customBlack  mt-3 font-medium text-sm ">
                  Don’t have account with Us yet?
                  <Link href={"/home"} className="text-mainBlue font-semibold cursor-pointer ml-1">
                  Sign up
                  </Link>
                </div>
              </div>
              {/* end */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewNavbar;
