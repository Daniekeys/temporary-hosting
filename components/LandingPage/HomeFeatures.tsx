import React from "react";
import Image from "next/image";
import ContainerLayout from "../../layouts/ContainerLayout";
import data from "../../assets/svg/data.svg";
import management from "../../assets/svg/management.svg";
import gpss from "../../assets/svg/gpss.svg";
import wifi from "../../assets/svg/wifi.svg";
import securecase from "../../assets/svg/securecase.svg";

function HomeFeatures() {
  return (
    <ContainerLayout>
      <p className="text-[#555555] text-[20px] md:text-[32px] font-semibold mt-36 text-center">
        FEATURES
      </p>

      <p className="text-[#555555] text-[14px] md:text-[18px] font-medium text-center">
        Explore features that makes Us unique
      </p>

      <div className="bg-[#EDE6FF] w-full h-auto rounded-[50px] p-7 mt-20">
        <div className="w-full h-auto flex flex-col md:flex-row justify-between items-center">
          <div className="bg-[#FFFFFF] w-full md:w-[48%] h-auto rounded-[30px] p-5 hover:bg-[#EDE6FF] hover:shadow-lg cursor-default">
            <Image src={data} alt="data" className="w-[80px] h-[80px]" />

            <p className="text-[#333333] text-[30px] font-semibold mt-5">
              SMART DATA <br /> COLLECTION APP
            </p>

            <p className="text-[#555555] text-[18px] font-medium mt-5">
              We have simplified your data collection efforts. Now you can
              seamlessly collect and analyze accurate, insightful, and complete
              data using our smart application
            </p>
          </div>

          <div className="bg-[#FFFFFF] w-full md:w-[48%] h-auto rounded-[30px] p-5 mt-10 md:mt-0 hover:bg-[#EDE6FF] hover:shadow-lg cursor-default">
            <Image
              src={management}
              alt="management"
              className="w-[80px] h-[80px]"
            />

            <p className="text-[#333333] text-[30px] font-semibold mt-5">
              PROJECT MANAGEMENT DASHBOARD
            </p>

            <p className="text-[#555555] text-[18px] font-medium mt-5">
              We are taking the stress out of your data collection project. Now
              you can conveniently track and monitor your project on one
              platform
            </p>
          </div>
        </div>

        <div className="w-full h-auto flex flex-col md:flex-row justify-between items-center mt-10">
          <div className="bg-[#FFFFFF] w-full md:w-[31%] h-auto rounded-[30px] p-5 hover:bg-[#EDE6FF] hover:shadow-lg cursor-default">
            <Image src={gpss} alt="gpss" className="w-[80px] h-[80px]" />

            <p className="text-[#333333] text-[30px] font-semibold mt-5">
              GPS COORDINATES
            </p>

            <p className="text-[#555555] text-[18px] font-medium mt-5">
              With the GPS feature, agents can easily navigate, locate, and
              track effortlessly, therefore increasing productivity.
            </p>
          </div>

          <div className="bg-[#FFFFFF] w-full md:w-[31%] h-auto rounded-[30px] p-5 my-10 md:my-0 hover:bg-[#EDE6FF] hover:shadow-lg cursor-default">
            <Image src={wifi} alt="wifi" className="w-[80px] h-[80px]" />

            <p className="text-[#333333] text-[30px] font-semibold mt-5">
              OFFLINE DATA COLLECTION
            </p>

            <p className="text-[#555555] text-[18px] font-medium mt-5">
              Harness the power of seamless offline data collection, anytime,
              anywhere, even without an internet connection.
            </p>
          </div>

          <div className="bg-[#FFFFFF] w-full md:w-[31%] h-auto rounded-[30px] p-5 hover:bg-[#EDE6FF] hover:shadow-lg cursor-default">
            <Image
              src={securecase}
              alt="securecase"
              className="w-[80px] h-[80px]"
            />

            <p className="text-[#333333] text-[30px] font-semibold mt-5">
              SECURE CASE MANAGEMENT
            </p>

            <p className="text-[#555555] text-[18px] font-medium mt-5">
              Build, create and save data securely to your cloud without network
              connectivity. Sync data when network is restored.
            </p>
          </div>
        </div>
      </div>
    </ContainerLayout>
  );
}

export default HomeFeatures;
