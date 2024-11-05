import NewFooter from "../components/footer/new-footer";
import RequestDemo from "../components/footer/request-demo";
import Head from "next/head";
import CustomCarousel from "../components/LandingPage/CustomCarousel";
import ProjectManagementHero from "../components/project-management/project-management-hero";
import ProjectManagementFeatures from "../components/project-management/project-features";
const ProjectDashboard = () => {
  return (
    <div className="w-full flex flex-col">
      <Head>
        <title>Project Management Dashboard </title>
        <meta
          name="description"
          content="Leverage advanced data-collecting technology and numerous field agents to access and track data for various projects."
        />
        <link rel="icon" href="/wecollect-new-logo.png" />
      </Head>

      <ProjectManagementHero />
      <ProjectManagementFeatures />
      {/* <OtherProject /> */}
      <div className="w-full mt-[200px] lg:mt-[-120px]">
        <CustomCarousel />
      </div>
      <RequestDemo />
      <NewFooter />
    </div>
  );
};

export default ProjectDashboard;
