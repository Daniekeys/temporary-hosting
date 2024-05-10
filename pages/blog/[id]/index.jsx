import React from 'react'
import SingleBlogHeader from '../../../components/blogs/SingleBlogHeader'
import Footer from '../../../components/LandingPage/Footer'
import { useRouter } from 'next/router'
import { blogPosts } from '../../../utils/blog-data'
import NewNavbar from '../../../components/navbar/new-navbar'
import RequestDemo from '../../../components/footer/request-demo'
import NewFooter from '../../../components/footer/new-footer'
const index = () => {
   const router = useRouter();
  const { id } = router.query;
  const item = blogPosts[id];
  
  return (
    <div className="w-full flex flex-col">
      <NewNavbar />
      <SingleBlogHeader />
      <RequestDemo />
      <NewFooter />
    </div>
  );
}

export default index