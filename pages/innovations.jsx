import React from 'react'
import InnovationHero from '../components/innovations/innovation-hero'
import OurInnovation from '../components/innovations/our-innovations'
import OtherInnovations from '../components/innovations/other-innovation'
import Slider from "../components/blogs/Slider";
import NewFooter from "../components/footer/new-footer";
import RequestDemo from "../components/footer/request-demo";
const Innovations = () => {
  return (
    <div className="w-full flex flex-col">
      <InnovationHero />
      <OurInnovation />
      <OtherInnovations />
      <div className="w-full mt-12">
        <Slider />
      </div>
      <RequestDemo />
      <NewFooter />
    </div>
  );
}

export default Innovations
