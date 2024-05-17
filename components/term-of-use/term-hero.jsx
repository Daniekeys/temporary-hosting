import React from 'react'
import ContainerLayout from '../../layouts/ContainerLayout';
import Image from 'next/image';
import cookie from "../../assets/png/cookie-pic.png";
import term from "../../assets/png/term-pic.png";
import privacy from "../../assets/png/privacy-pic.png";

const TermHero = ({current}) => {
    return (
      <ContainerLayout>
        <div className="w-full bg-[#F6F1FF] rounded-[30px] h-[153px] lg:h-[234px] mt-28 mb-16 flex items-center">
          <div className="w-10/12 lg:w-10/12 flex items-center justify-between mx-auto">
            <h1
              className="text-mainBlue font-semibold   lg:text-[64px] uppercase text-[48px] "
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              {current === 1 && "PRIVACY POLICY"}
              {current === 2 && "TERMS OF USE"}
              {current === 3 && "COOKIE POLICY"}
            </h1>

            <div
              className=" hidden md:flex justify-end"
              data-aos="fade-up"
            
              data-aos-duration="1000"
            >
              {current === 1 && (
                <Image
                  src={privacy}
                  alt="image"
                  className="w-[150px] h-[150px] rounded-full"
                />
              )}
              {current === 2 && (
                <Image
                  src={term}
                  alt="image"
                  className="w-[150px] h-[150px] rounded-full"
                />
              )}
              {current === 3 && (
                <Image
                  src={cookie}
                  alt="image"
                  className="w-[150px] h-[150px] rounded-full"
                />
              )}
            </div>
          </div>
        </div>
      </ContainerLayout>
    );
}

export default TermHero
