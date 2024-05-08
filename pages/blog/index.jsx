import React from "react";
import BlogLatest from "../../components/blogs/BlogLatest";

import AllBlogs from "../../components/blogs/AllBlogs";
import BlogHero from "../../components/blogs/BlogHero";
import RequestDemo from "../../components/footer/request-demo";
import NewFooter from "../../components/footer/new-footer";
import Slider from "../../components/blogs/Slider"
const index = () => {
  return (
    <div className="w-full flex flex-col">
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
