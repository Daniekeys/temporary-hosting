import React from 'react'
import DownloadHero from "../components/download-page/download-hero"
import Slider from '../components/blogs/Slider'
import PartnersCard from '../components/download-page/partners-card'
import NewFooter from '../components/footer/new-footer'
import RequestDemo from '../components/footer/request-demo'
const Download = () => {
  return (
    <div className="w-full flex flex-col">
      <DownloadHero />
      <PartnersCard />
      <div className="w-full mt-0 lg:mt-12">
        <Slider />
      </div>
      <RequestDemo />
      <NewFooter />
    </div>
  );
}

export default Download
