import React from 'react'
import AppCaseHero from '../components/app-cases/app-cases-hero'
import AppCaseList from '../components/app-cases/app-case-list'
import Slider from "../components/blogs/Slider";

import NewFooter from "../components/footer/new-footer";
import RequestDemo from "../components/footer/request-demo";
import Head from 'next/head';
const ApplicableCases = () => {
  return (
    <div className="w-full flex flex-col">
      <Head>
        <title>We Collect</title>
        <meta
          name="description"
          content="Leverage advanced data-collecting technology and numerous field agents to access and track data for various projects."
        />
        <link rel="icon" href="/we-logo.png" />
      </Head>
      ;
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
