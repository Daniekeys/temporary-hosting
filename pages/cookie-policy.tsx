import React from "react";
import NewNavbar from "../components/navbar/new-navbar";
import NewFooter from "../components/footer/new-footer";
import RequestDemo from "../components/footer/request-demo";
import TermHero from "../components/term-of-use/term-hero";
import PrivacyBody from "../components/term-of-use/privacy-body";
import MobileNav from "../components/navbar/mobile-nav";
const CookiePolicy = () => {
  return (
    <div className="w-full flex flex-col">
      <NewNavbar />
      <MobileNav present={2} />
      <TermHero current={3} />
      <PrivacyBody />
      <RequestDemo />
      <NewFooter />
    </div>
  );
};

export default CookiePolicy;
