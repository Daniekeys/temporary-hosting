import React from "react";
import Image from "next/image";
import ContainerLayout from "../../layouts/ContainerLayout";
import maskwoman from "../../assets/png/maskwoman.png";

function Control() {
  return (
    <ContainerLayout>
      <p className="text-[#555555] text-[20px] md:text-[32px] font-semibold text-center mt-[119px]">
        TAKE CONTROL OF YOUR DATA
      </p>

      <p className="w-full md:w-8/12 m-auto text-[#555555] text-[14px] md:text-[18px] font-medium text-center mt-[10px]">
        WeCollect is a smart data collection mobile app that allows you collect
        online and offline data, while reporting to a dynamic dashboard that
        provides real-time updates on data collected. It promotes quick
        decision-making by allowing users to visualise and analyse data on the
        go. The dashboard is flexible, which is also handy when managing
        multiple projects or forms.
      </p>

      <Image
        src={maskwoman}
        alt="maskwoman"
        className="w-full md:w-10/12 h-[400px] md:h-[500px] m-auto mt-20"
      />
    </ContainerLayout>
  );
}

export default Control;
