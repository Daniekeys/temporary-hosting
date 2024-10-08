import React from "react";
import ContainerLayout from "../../layouts/ContainerLayout";
import { Navlogo } from "../../assets/svg";
import logo from "../../assets/svg/log2.svg";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
const Navbar = ({ active }) => {
  const router = useRouter();
  return (
    <div
      className={`${
        active ? "bg-white" : "nav-bg"
      } fixed top-0 right-0 left-0 z-high w-full h-[68px] flex items-center `}
    >
      <ContainerLayout>
        <div className="w-full flex items-center justify-between  h-[68px]">
          {active ? (
            <span className="cursor-pointer" onClick={() => router.push("/")}>
              {" "}
              <Image src={logo} alt="logo" />{" "}
            </span>
          ) : (
            <span className="cursor-pointer" onClick={() => router.push("/")}>
              {" "}
              <Navlogo />{" "}
            </span>
          )}

          {active ? (
            <Link
              href={"https://medium.com/@wecollectng/"}
              target="_blank"
              className="blue-btn text-white md:text-[20px] text-[16px] font-bold flex items-center justify-center px-[20px] py-[10px] "
            >
              Learn more
            </Link>
          ) : (
            <Link
              href={"https://medium.com/@wecollectng/"}
              target="_blank"
              className="white-btn text-mainBlue md:text-[20px] text-[16px] font-bold flex items-center justify-center px-[20px] py-[10px] "
            >
              Learn more
            </Link>
          )}
        </div>
      </ContainerLayout>
    </div>
  );
};

export default Navbar;
