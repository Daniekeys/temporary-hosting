import React from "react";
import Image from "next/image";
import ContainerLayout from "../../layouts/ContainerLayout";
import data from "../../assets/svg/data.svg";
import management from "../../assets/svg/management.svg";
import gpss from "../../assets/svg/gpss.svg";
import wifi from "../../assets/svg/wifi.svg";
import securecase from "../../assets/svg/securecase.svg";
import Section from "./Section";

function How() {
  return (
    <ContainerLayout>
      <p className="text-[#555555] text-[20px] md:text-[32px] font-semibold mt-36 text-center">
        HOW IT WORKS
      </p>

      <p className="text-[#555555] text-[14px] md:text-[18px] font-medium mt-[10px] text-center">
        See how WeCollect allows you to collect data faster, safer and reliably
      </p>
    </ContainerLayout>
  );
}

export default How;