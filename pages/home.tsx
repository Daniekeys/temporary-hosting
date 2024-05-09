import React from "react";
import NewNavbar from "../components/navbar/new-navbar";
import MobileNav from "../components/navbar/mobile-nav";
import HomeHero from "../components/HomeHero";
import OurPartner from "../components/download-page/partners-card";
import Control from "../components/LandingPage/Control";
import HomeFeatures from "../components/LandingPage/HomeFeatures";
import How from "../components/LandingPage/How";
import Section from "../components/LandingPage/Section";
import Carousel from "../components/LandingPage/Carousel";
import Footer from "../components/LandingPage/Footer";
import {
  Card1,
  Card2,
  Card3,
  Card4,
  Card5,
  Card6,
  Card7,
  Card8,
} from "../components/LandingPage/Card";
import Faq from "../components/LandingPage/Faq";

function home() {
  const Containers = [
    <Card1 />,
    <Card2 />,
    <Card3 />,
    <Card4 />,
    <Card5 />,
    <Card6 />,
    <Card7 />,
    <Card8 />,
  ];

  return (
    <div className="w-full h-auto">
      <NewNavbar />
      <MobileNav present={1} />
      <HomeHero />
      <OurPartner />
      <Control />
      <HomeFeatures />
      <How />
      <Section />
      <Carousel Containers={Containers} />
      <Faq />
      <Footer />
    </div>
  );
}

export default home;
