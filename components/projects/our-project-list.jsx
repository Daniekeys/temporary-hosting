import React from 'react'
import ContainerLayout from '../../layouts/ContainerLayout'
import { SpecialArrow } from '../../assets/svg'
import oval from "../../assets/png/oval.png";
import fpmp from "../../assets/png/fpmp-samp.png"
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
const OurProjectList = () => {
  const router = useRouter();
  return (
    <div
      className="w-full flex flex-col bg-white rounded-t-[50px]  "
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <ContainerLayout>
        <div className="w-full py-20 lg:py-28 flex flex-col justify-center items-center">
          <div className="flex flex-col items-center w-full">
            <h1 className="text-customBlack font-semibold text-2xl 2xl:text-[32px] mb-2">
              OUR PROJECTS
            </h1>
            <span>
              <SpecialArrow />
            </span>
          </div>

          <div className="flex flex-col items-center justify-center w-full mt-24 px-4 lg:px-0">
            <h1
              className="text-mainBlue text-center font-semibold text-2xl 2xl:text-[32px] "
              // data-aos="fade-up"
              // data-aos-duration="1000"
            >
              Food Price Monitoring Project In Nigeria
            </h1>
            <div
              className="flex flex-col items-center relative mt-12"
              // data-aos="fade-up"
              // data-aos-duration="1000"
            >
              <span className="z-modal -mb-16">
                <Image
                  src={fpmp}
                  alt="images"
                  className="mx-auto w-[171px] h-[200px] lg:w-10/12 lg:h-auto 2xl:w-auto 2xl:h-auto  "
                />
              </span>
              <span className="z-0">
                <Image src={oval} alt="ima" className=" lg:w-9/12 lg:mx-auto lg:h-auto 2xl:w-auto 2xl:h-auto" />
              </span>
            </div>
            <p
              className="text-center mt-12 text-ash 2xl:text-lg lg:text-base text-sm leading-[25px]  "
              // data-aos="fade-up"
              // data-aos-duration="1000"
            >
              Tracking the availability of food in Nigeria using a data driven
              price model in line with the UN SD4
            </p>
            <div
              className="w-full flex flex-col lg:flex-row lg:flex items-center gap-5 lg:gap-2 justify-center mt-8 px-4"
              // data-aos="fade-up"
              // data-aos-duration="1000"
            >
              <Link
                href={"https://fpmpn.wecollect.tech/"}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-mainBlue hero-btn text-white h-[47px] items-center justify-center rounded-[50px] font-semibold flex lg:min-w-[197px] hover:bg-[#E3D5FF] hover:text-mainBlue w-full max-w-[200px] text-sm "
              >
                Explore
              </Link>
              <button
                className="bg-white hero-btn text-mainBlue h-[47px] items-center justify-center rounded-[50px] font-semibold flex lg:min-w-[197px]  border-opacity-30 hover:bg-[#E3D5FF] w-full max-w-[200px] text-sm"
                onClick={() => router.push("/contact-us")}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default OurProjectList
