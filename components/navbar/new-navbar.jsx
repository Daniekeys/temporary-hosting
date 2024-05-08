import React from "react";
import ContainerLayout from "../../layouts/ContainerLayout";

import logo from "../../assets/png/new-logo.png";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "../../assets/svg";
const NewNavbar = () => {
  const router = useRouter();
  return (
    <div
      className={`bg-[#F5F4FB] fixed top-0 right-0 left-0 z-high w-full h-[68px] lg:flex items-center rounded-b-[50px] hidden `}
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
                      <div className="flex items-center gap-2 ">
                          <p className="text-ash lg:text-base font-semibold ">About Us</p>
                          <span>
                              <ArrowDown />
                          </span>
                      </div>
                      <div className="flex items-center gap-2 ">
                          <p className="text-ash lg:text-base font-semibold ">Products</p>
                          <span>
                              <ArrowDown />
                          </span>
                      </div>
                      <div className="flex items-center gap-2 ">
                          <p className="text-ash lg:text-base font-semibold ">Contact Us</p>
                         
                      </div>
                      <div className="flex items-center gap-2 ">
                          <p className="text-mainBlue lg:text-base font-semibold ">Sign in</p>
                         
                      </div>
                      <Link href="/" className="bg-mainBlue h-[50px] flex items-center text-white rounded-[50px] px-5 ">
                      Create account 
                      </Link>
         </div>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default NewNavbar;
