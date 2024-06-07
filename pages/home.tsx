import React from "react";
import NewNavbar from "../components/navbar/new-navbar";
import MobileNav from "../components/navbar/mobile-nav";
import HomeHero from "../components/HomeHero";
import OurPartner from "../components/download-page/partners-card";
import Control from "../components/LandingPage/Control";
import HomeFeatures from "../components/LandingPage/HomeFeatures";
import How from "../components/LandingPage/How";
import Section from "../components/LandingPage/Section";
import DesktopCarousel from "../components/LandingPage/DesktopCarousel";
import CustomCarousel from "../components/LandingPage/CustomCarousel";
import MobileCarousel from "../components/LandingPage/MobileCarousel";
import Slider from "../components/blogs/Slider";
import RequestDemo from "../components/footer/request-demo";
import Footer from "../components/footer/new-footer";
import Faq from "../components/LandingPage/Faq";
import Head from "next/head";

function home() {
  return (
    <div className="w-full h-auto ">
      <Head>
        <title>WeCollect</title>
        <meta
          name="description"
          content="Leverage advanced data-collecting technology and numerous field agents to access and track data for various projects."
        />
        <link rel="icon" href="/we-logo.png" />
      </Head>

      <NewNavbar />
      <MobileNav present={1} />
      <HomeHero />
      <OurPartner />
      <Control />
      <HomeFeatures />
      <How />
      <Section />
      {/* <DesktopCarousel /> */}
      <CustomCarousel />
      <MobileCarousel />
      <Faq />
      <Slider />
      <RequestDemo />
      <Footer />
    </div>
  );
}

export default home;
