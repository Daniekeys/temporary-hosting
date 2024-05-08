import React from 'react'
import AppCaseHero from '../components/app-cases/app-cases-hero'
import AppCaseList from '../components/app-cases/app-case-list'
import Slider from "../components/blogs/Slider";

import NewFooter from "../components/footer/new-footer";
import RequestDemo from "../components/footer/request-demo";
const ApplicableCases = () => {
  return (
    <div className="w-full flex flex-col">
      <AppCaseHero />
      <AppCaseList />
      <div className="w-full mt-12">
        <Slider />
      </div>
      <RequestDemo />
      <NewFooter />
    </div>
  );
}

export default ApplicableCases
