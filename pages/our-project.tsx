import React from 'react'
import OurProjectHero from "../components/projects/our-project-hero"
import OurProjectList from "../components/projects/our-project-list"
import OtherProject from "../components/projects/other-project"
import Slider from '../components/blogs/Slider'
import NewFooter from '../components/footer/new-footer'
import RequestDemo from '../components/footer/request-demo'
const OurProject = () => {
  return (
    <div className="w-full flex flex-col">
      <OurProjectHero />
      <OurProjectList />
      <OtherProject />
      <div className="w-full mt-12">
        <Slider />
      </div>
      <RequestDemo />
      <NewFooter />
    </div>
  );
}

export default OurProject
