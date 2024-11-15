import React from 'react'
import ContainerLayout from '../layouts/ContainerLayout'
import { useRouter } from 'next/router';
import Image from "next/image";
import logo from "../assets/svg/latest-logo.svg"; 
import curve from "../assets/png/curve-yellow.png"
import { BellIcon } from '../assets/svg';
import Link from 'next/link';
import email from "../assets/svg/email-s.svg";
import linkedin from "../assets/svg/linkedin-s.svg";
import twiiter from "../assets/svg/twitter-s.svg";
import instagram from "../assets/svg/instagram-s.svg";
import facebook from "../assets/svg/facebook-s.svg";
import youtube from "../assets/svg/youtube-s.svg";
const ComingSoon = () => {
    const router = useRouter();
  return (
    <div className="w-full ">
      <ContainerLayout>
        <div className="w-full flex flex-col">
          <span
            className="cursor-pointer mt-4"
            onClick={() => router.push("/")}
          >
            {" "}
            <Image src={logo} alt="logo" />{" "}
          </span>
          <div className="coming-soon-bg w-full flex flex-col pb-20 mt-[26px] rounded-[30px] relative px-4">
            <div className="absolute top-0 left-0 right-0 z-0 ">
              <Image src={curve} alt="curve" />
            </div>
            <div className="w-full z-10 mt-[140px] flex flex-col">
              <h1 className="text-center font-serif text-[#EDEDFB] text-3xl lg:text-[40px] font-bold 2xl:text-[64px]  ">
                Coming Soon!!!
              </h1>
              <p className="text-[#EDEDFB] max-w-[924px] text-center text-sm lg:text-[18px] leading-[25px] mx-auto font-sans mt-12 font-bold">
                Leverage advanced data collecting technology with features and
                vast network of field agents to collect, track, and ensure
                accurate data for various projects.
              </p>
              <div className="mt-24 flex flex-col">
                <p className="text-[#EDEDFB] mx-auto text-center font-sans text-xs lg:text-[16px]">
                  Get notified when when our website goes live!
                </p>
                <div className="flex border-[2px] border-white rounded-[30px] bg-white items-center bg-opacity-20 mt-4 h-12 gap-3 px-2 max-w-[400px] w-full mx-auto ">
                  <input
                    type="text"
                    className="border-none outline-none bg-transparent font-sans flex flex-grow placeholder:text-sm placeholder:font-sans placeholder:text-[#EDEDFB] text-white text-sm "
                    placeholder="email"
                  />
                  <span className="h-[38px] bg-white rounded-[50px] min-w-[130px] gap-3 items-center flex justify-center">
                    <BellIcon />
                    <p className="text-mainBlue font-sans  font-semibold text-xs lg:text-[14px] ">
                      Notify me
                    </p>
                  </span>
                </div>
                <p className="font-sans  text-[#EDEDFB] mx-auto mt-[60px] text-xs lg:text-[14px] ">
                  If you have questions, contact us at:
                </p>
                <Link
                  href={"mailto:info@wecollect.tech"}
                  target="_blank"
                  className="text-[#FDE93D] font-sans mx-auto text-xs  lg:text-[14px] leading-[25px] mt-4"
                >
                  info@wecollect.tech
                </Link>
                <p className="text-[#EDEDFB] font-sans text-xs  lg:text-[14px] leading-[25px] mx-auto mt-[60px] ">
                  Connect with WeCollect
                </p>
                <div className="w-full justify-center items-center gap-4 flex mt-4 ">
                  <Link href="" target="_blank">
                    <Image src={email} alt="email" />
                  </Link>
                  <Link href="" target="_blank">
                    <Image src={linkedin} alt="email" />
                  </Link>
                  <Link href="" target="_blank">
                    <Image src={twiiter} alt="email" />
                  </Link>
                  <Link href="" target="_blank">
                    <Image src={instagram} alt="email" />
                  </Link>
                  <Link href="" target="_blank">
                    <Image src={facebook} alt="email" />
                  </Link>
                  <Link href="" target="_blank">
                    <Image src={youtube} alt="email" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default ComingSoon
