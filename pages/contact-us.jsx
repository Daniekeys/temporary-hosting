import React from 'react'
import ContactHero from '../components/contact-us/contact-hero'
import GetInTouch from '../components/contact-us/get-in-touch'
import Slider from "../components/blogs/Slider";
import NewFooter from "../components/footer/new-footer";
import RequestDemo from "../components/footer/request-demo";
const ContactUs = () => {
  return (
    <div className="w-full flex flex-col">
      <ContactHero />
      <GetInTouch />
      <Slider />
      <RequestDemo />
      <NewFooter />
    </div>
  );
}

export default ContactUs
