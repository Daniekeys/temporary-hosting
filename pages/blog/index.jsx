import React from "react";
import BlogLatest from "../../components/blogs/BlogLatest";

import AllBlogs from "../../components/blogs/AllBlogs";
import BlogHero from "../../components/blogs/BlogHero";
import RequestDemo from "../../components/footer/request-demo";
import NewFooter from "../../components/footer/new-footer";
import Slider from "../../components/blogs/Slider"
import Head from "next/head";
const index = () => {
  return (
    <div className="w-full flex flex-col flow-hide">
      <Head>
        <title>Blog</title>
        <meta
          name="description"
          content="Leverage advanced data-collecting technology and numerous field agents to access and track data for various projects."
        />
        <link rel="icon" href="/we-logo.png" />
      </Head>
      
      <BlogHero />
      <BlogLatest />
      <AllBlogs />
      <Slider />
      <RequestDemo />
      <NewFooter />
    </div>
  );
};

export default index;
