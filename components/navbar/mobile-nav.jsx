import React, { useState } from "react";
import logo from "../../assets/png/new-logo.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Bars, CloseIcon } from "../../assets/svg";
import { ArrowDown } from "../../assets/svg";
const styles = {
  active: "",
  nonactive: "",
};
const MobileNav = ({ present }) => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  return (
    <div>
      <div className="w-full bg-white pt-4 fixed top-0 nav-index left-0 right-0 flex flex-col lg:hidden overflow-x-hidden z-modal">
        <div className="w-full flex items-center justify-between px-4 h-[65px]">
          <Link href="/">
            <Image src={logo} alt="logo" />
          </Link>

          <div className="w-fit" onClick={() => setShow(!show)}>
            {show ? (
              <span>
                {" "}
                <CloseIcon />{" "}
              </span>
            ) : (
              <span>
                {" "}
                <Bars />{" "}
              </span>
            )}
          </div>
        </div>

        {show && (
          <div className="bg-white w-full flex flex-col items-center z-100 transition-all duration-1000 delay-1000 h-screen relative ">
            <div className="flex flex-col w-full px-4 mt-[45px]">
              <div
                className="w-full py-6 flex items-center gap-2 "
                onClick={() => setShow(false)}
              >
                <p className=" text-base font-semibold text-ash">About Us</p>
                <span>
                  <ArrowDown />
                </span>
              </div>
              <div
                className="w-full py-6 flex items-center gap-2"
                onClick={() => setShow(false)}
              >
                <p className=" text-base font-semibold text-ash">Products</p>
                <span>
                  <ArrowDown />
                </span>
              </div>
              <div
                className="w-full py-6 "
                onClick={() => setShow(false)}
              >
                <Link
                  href="/contact-us"
                  className="text-ash text-base font-semibold"
                >
                  Contact Us
                </Link>
              </div>
              <div className="flex flex-col  space-y-5 absolute bottom-40 ">
                <button className="bg-[#4747D6] w-full max-w-fit px-5 rounded-[50px] hero-btn flex justify-center items-center h-[47px]  text-white bg-primary font-semibold">
                  Create Account
                </button>
                <button className="w-full flex justify-center items-center h-[47px] px-5 rounded-[50px]  text-mainBlue bg-white hero-btn  font-semibold border-primary ">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileNav;
