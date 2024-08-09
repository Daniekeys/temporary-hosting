import React from "react";
import InnovationHero from "../components/innovations/innovation-hero";
import OurInnovation from "../components/innovations/our-innovations";
import OtherInnovations from "../components/innovations/other-innovation";
import Slider from "../components/blogs/Slider";
import NewFooter from "../components/footer/new-footer";
import RequestDemo from "../components/footer/request-demo";
import Head from "next/head";
import UseHero from "../components/use-cases/use-hero";
import CustomCarousel from "../components/LandingPage/CustomCarousel";
import Benefits from "../components/use-cases/benefits";
const ViewUseCase = () => {
  return (
    <div className="w-full flex flex-col">
      <Head>
        <title>Brand Visibility</title>
        <meta
          name="description"
          content="Leverage advanced data-collecting technology and numerous field agents to access and track data for various projects."
        />
        <link rel="icon" href="/we-logo.png" />
      </Head>

          <UseHero />
          <Benefits />
          
      <CustomCarousel />
      <RequestDemo />
      <NewFooter />
    </div>
  );
};

export default ViewUseCase;
