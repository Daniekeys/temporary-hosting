import React from 'react'
import ContainerLayout from '../../layouts/ContainerLayout'
import Image from 'next/image';
import a1 from "../../assets/svg/a1.svg";
import a2 from "../../assets/svg/a2.svg";
import a3 from "../../assets/svg/a3.svg";
import a4 from "../../assets/svg/a4.svg";
import a5 from "../../assets/svg/a5.svg";
import a6 from "../../assets/svg/a6.svg";
import a7 from "../../assets/svg/a7.svg";
import a9 from "../../assets/svg/a9.svg";
import a10 from "../../assets/svg/a10.svg";
import a8 from "../../assets/svg/a8.svg";
const data = [
  {
    title: "BRAND VISIBILITY",
    pic: a1,
    story:
      "WeCollect enhances brand visibility by leveraging a network of field agents equipped with a dynamic mobile application. These agents conduct on-the-ground assessments, capturing real-time data on brand presence, product displays, and competitor activities. The app's geotagging feature ensures accurate location data, providing businesses with actionable insights to optimize their brand visibility strategies and outshine the competition.",
  },
  {
    title: "SUPPLY CHAIN MONITORING AND REPORTING",
    pic: a2,
    story:
      "For supply chain monitoring, WeCollect transforms the logistics landscape by enabling real-time tracking of goods and activities throughout the supply chain. Field agents utilize the mobile app to record crucial data points, ensuring visibility from warehouse to delivery. Automated reporting and analytics streamline the monitoring process, allowing businesses to identify bottlenecks, improve efficiency, and make informed decisions for a seamless and optimized supply chain.",
  },
  {
    title: "INVENTORY MANAGEMENT",
    pic: a3,
    story:
      "WeCollect revolutionizes inventory management by empowering field agents to digitally track and manage inventory levels using customizable forms within the mobile application. From stock levels to product conditions, agents provide real-time updates, preventing stockouts and minimizing wastage. This dynamic inventory management system enhances accuracy, reduces manual errors, and ensures businesses maintain optimal stock levels to meet customer demands.",
  },
  {
    title: "ONSHELF PRODUCT MONITORING",
    pic: a4,
    story:
      "With WeCollect, onshelf product monitoring becomes a breeze. Field agents equipped with the mobile app systematically capture data on product availability, pricing, and shelf placements. This real-time information enables businesses to make swift adjustments to merchandising strategies, ensuring that products are prominently displayed and readily available to meet consumer demands.",
  },
  {
    title: "OUTLET ENUMERATION",
    pic: a5,
    story:
      "WeCollect simplifies outlet enumeration by deploying field agents equipped with the mobile application to systematically catalog and geo-tag existing outlets. This comprehensive data provides businesses with a clear understanding of market coverage, allowing for strategic expansion, targeted marketing efforts, and improved distribution planning.",
  },
  {
    title: "ASSET TRACKING AND MANAGEMENT",
    pic: a6,
    story:
      "WeCollect transforms asset tracking and management by enabling field agents to monitor assets in real time using the mobile application. From equipment to vehicles, agents record essential data points, facilitating proactive maintenance and minimizing downtime. This innovative approach ensures businesses maintain control and visibility over their assets, optimizing operational efficiency.",
  },
  {
    title: "FINANCIAL INCLUSION TRAINING",
    pic: a7,
    story:
      "In a financial inclusion project, WeCollect empowers field agents to gather essential data for assessing the needs and preferences of underserved communities. The mobile app facilitates community engagement, allowing residents to provide insights that inform the development of tailored financial inclusion initiatives. WeCollect ensures accurate data collection, promoting inclusivity and enabling businesses to design impactful financial services.",
  },
  {
    title: "PRODUCT PRICE MONITORING PROJECT",
    pic: a8,
    story:
      "WeCollect revolutionizes product price monitoring by deploying field agents to collect real-time data on product prices, promotions, and competitor pricing strategies. The mobile app streamlines data collection and ensures accuracy, allowing businesses to stay agile in pricing strategies, respond to market dynamics, and maintain a competitive edge.",
  },
  {
    title: "POPULATION ENUMERATION",
    pic: a9,
    story:
      "For population enumeration projects, WeCollect utilizes its mobile application to enable field agents to conduct a systematic count of individuals within specific areas. The app's offline data collection feature ensures accuracy, even in remote locations. This approach facilitates comprehensive population enumeration, supporting data-driven decision-making for public policy, resource allocation, and community development initiatives.",
  },
  {
    title: "DEMOGRAPHY ANALYSIS",
    pic: a10,
    story:
      "WeCollect facilitates demography analysis by empowering field agents to collect detailed demographic data using customizable forms within the mobile application. This rich dataset enables businesses and policymakers to conduct in-depth demographic analyses, understand population trends, and tailor strategies that align with the unique characteristics of specific regions or communities.",
  },

];

const AppCaseList = () => {
  return (
    <div className="w-full flex flex-col relative bg-white flow-hide ">
      <div className="w-full lg:h-[1438px] bg-white rounded-t-[50px] "></div>
      <div className="w-full lg:min-h-[3200px] h-full mb-20 bg-[#F9F6FF] rounded-t-[50px] "></div>
      <div className="absolute top-20 left-0 right-0">
        <ContainerLayout>
          <div className="w-full flex flex-col gap-10 flow-hide">
            <h1
              className="text-mainBlue lg:text-[32px] font-semibold"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Applicable in the following cases and more...
            </h1>
            <div className="w-full flex flex-col bg-[#F9F6FF] p-4 lg:p-[30px]  rounded-[30px]  gap-[40px]">
              {data?.map((item, index) => {
                return (
                  <div
                    className="w-full bg-white flex flex-col p-4 lg:p-8 gap-10 rounded-[30px] boxlee  "
                    key={index}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <span>
                      <Image
                        src={item.pic}
                        alt="pics"
                        className="w-[120px] h-[120px] rounded-full"
                      />
                    </span>
                    <h1 className=" text-customBlack font-semibold leading-[48px] lg:text-[30px] ">
                      {item.title}
                    </h1>
                    <p className="text-lg text-ash font-medium ">
                      {item.story}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </ContainerLayout>
      </div>
    </div>
  );
}

export default AppCaseList
