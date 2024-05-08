import React from "react";
import NewNavbar from "../navbar/new-navbar";
import ContainerLayout from "../../layouts/ContainerLayout";
import heroPic from "../../assets/png/contact-samp.png";
import Image from "next/image";
const ContactHero = () => {
  return (
    <div className="grad-blog-bg w-full h-full">
      <div className="w-full lg:h-screen lg:max-h-[908px] relative blog-hero-bg flex flex-col">
        <NewNavbar />
        <ContainerLayout>
          <div className="w-full flex flex-col mt-20">
          
            <div className="w-full lg:flex-row mt-12  flex flex-col ">
              <div className="w-full flex flex-col lg:w-5/12 justify-center ">
                <h1 className="text-mainBlue font-semibold text-[32px] lg:text-[64px]  ">
                  CONTACT US
                </h1>
                <p className="text-customBlack font-medium lg:text-[32px] text-xl">
                  Connect with WeCollect
                </p>
              </div>
              <div className="w-full lg:w-7/12">
                <Image
                  src={heroPic}
                  alt="hero"
                  width={heroPic.width}
                  height={heroPic.height}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </ContainerLayout>
      </div>
    </div>
  );
};

export default ContactHero;
