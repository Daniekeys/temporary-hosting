import React from 'react'
import ContainerLayout from '../../layouts/ContainerLayout'
import Image from "next/image";
import { LocationIcon, PhoneIcon, EmailIcon } from '../../assets/svg'
import woman from "../../assets/png/contact-woman.png"
const GetInTouch = () => {
  return (
    <div className="w-full bg-white rounded-t-[30px] -mt-4 flex flex-col flow-hide">
      <ContainerLayout>
        <div className="w-full mt-8 lg:min-h-[271px] bg-white flex items-center lg:px-[100px] lg:py-[50px] rounded-[30px]">
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0">
            {/* start */}
            <div
              className="w-fit mx-auto lg:mx-0 lg:w-full flex flex-col justify-center items-center gap-4"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              <span>
                <EmailIcon />
              </span>
              <h2 className="text-mainBlue text-2xl font-semibold ">
                Email Address
              </h2>
              <p className="text-customBlack text-lg font-medium">
                help@wecollect.tech
              </p>
            </div>

            {/* end */}
            {/* start */}
            <div
              className="w-fit mx-auto lg:mx-0 lg:w-full flex flex-col justify-center items-center gap-4 border-t-[10px] border-b-[10px]  border-l-[#F9F6FF] border-t-[#F9F6FF] lg:border-l-[10px] lg:border-r-[10px] border-b-[#F9F6FF] border-r-[#F9F6FF] lg:border-t-0 lg:border-b-0 py-8 lg:py-0 "
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1000"
            >
              <span>
                <PhoneIcon />
              </span>
              <h2 className="text-mainBlue text-2xl font-semibold ">
                Phone number
              </h2>
              <p className="text-customBlack text-lg font-medium">
                +234(0) 816 360 8315
              </p>
            </div>

            {/* end */}
            {/* start */}
            <div
              className="w-full flex flex-col justify-center items-center gap-4"
              data-aos="fade-up"
              data-aos-delay="1000"
              data-aos-duration="1000"
            >
              <span>
                <LocationIcon />
              </span>
              <h2 className="text-mainBlue text-2xl font-semibold ">
                Physical location
              </h2>
              <p className="text-customBlack text-lg font-medium lg:max-w-[239px] mx-auto text-center">
                Unit D128 Ikota complex, Lekki Lagos
              </p>
            </div>

            {/* end */}
          </div>
        </div>
        <div className="flex mt-20 flex-col items-center flow-hide">
          <h1
            className="text-ash lg:text-[32px] text-2xl font-semibold"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            GET IN TOUCH
          </h1>
          <p
            className="text-base  text-ash font-medium lg:text-lg mt-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            We’re available
          </p>
        </div>
      </ContainerLayout>
      <ContainerLayout>
        <div className="w-full flex mt-6 flex-col-reverse lg:flex-row lg:gap-8 ">
          <div className="w-full lg:w-1/2 flex flex-col  ">
            <div className="w-full   rounded-[30px] flex flex-col gap-6  mt-8">
              {/* start */}
              <div
                className="flex flex-col"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1000"
              >
                <label className="font-semibold text-customBlack text-sm lg:text-base">
                  Full name*
                </label>
                <input
                  type="text"
                  className=" h-[50px] w-full bg-white outline-none focus:outline-none border-[#999] border rounded-[8px] border-opacity-30 px-5 placeholder:text-ash placeholder:font-medium mt-2"
                  placeholder="enter full name"
                />
              </div>

              {/* end */}
              {/* start */}
              <div
                className="flex flex-col"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1000"
              >
                <label className="font-semibold text-customBlack text-sm lg:text-base">
                  Email Address*
                </label>
                <input
                  type="email"
                  className=" h-[50px] w-full bg-white outline-none focus:outline-none border-[#999] border rounded-[8px] border-opacity-30 px-5 placeholder:text-ash placeholder:font-medium mt-2"
                  placeholder="enter email address"
                />
              </div>

              {/* end */}
              {/* start */}
              <div
                className="flex flex-col"
                data-aos="fade-up"
                data-aos-delay="700"
                data-aos-duration="1000"
              >
                <label className="font-semibold text-customBlack text-sm lg:text-base">
                  Phone number*
                </label>
                <input
                  type="tel"
                  className=" h-[50px] w-full bg-white outline-none focus:outline-none border-[#999] border rounded-[8px] border-opacity-30 px-5 placeholder:text-ash placeholder:font-medium mt-2"
                  placeholder="enter phone number"
                />
              </div>

              {/* end */}
              {/* start */}
              <div
                className="flex flex-col"
                data-aos="fade-up"
                data-aos-delay="900"
                data-aos-duration="1000"
              >
                <label className="font-semibold text-customBlack text-sm lg:text-base">
                  Message*
                </label>
                <textarea
                  type="tel"
                  className=" h-[50px] w-full bg-white outline-none focus:outline-none border-[#999] border rounded-[8px] border-opacity-30 min-h-[245px] py-3 px-5 placeholder:text-ash placeholder:font-medium mt-2"
                  placeholder="Message here... "
                />
              </div>

              {/* end */}
              {/* start */}
              <div className="w-full flex items-center gap-4">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="accent-mainBlue w-6 h-6"
                />
                <span className="text-ash text-base">
                  I agree to be contacted
                </span>
              </div>
              {/* end */}
              <div className="w-full mt-1">
                <button className="w-full rounded-[30px] h-[44px] flex items-center justify-center bg-mainBlue text-[#F2F4F5]  ">
                  Send message
                </button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-end">
            <Image
              src={woman}
              alt="woman"
              width={woman.width}
              height={woman.height}
              className="object-contain  "
              data-aos="fade-up"
              data-aos-duration="1000"
            />
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default GetInTouch
