import NewFooter from "../../../components/footer/new-footer";
import RequestDemo from "../../../components/footer/request-demo";
import Head from "next/head";
import UseHero from "../../../components/use-cases/use-hero";
import CustomCarousel from "../../../components/LandingPage/CustomCarousel";
import Benefits from "../../../components/use-cases/benefits";
import UseHow from "../../../components/use-cases/use-how";
import { useRouter } from "next/router";
import { useCaseData } from "../../../utils/use-case-data";
const ViewUseCase = () => {
       const router = useRouter();
    const { id } = router.query;
    const idValue = Number(id);
     const item = useCaseData[idValue];
    
  return (
    <div className="w-full flex flex-col relative">
      <Head>
        <title>Brand Visibility</title>
        <meta
          name="description"
          content="Leverage advanced data-collecting technology and numerous field agents to access and track data for various projects."
        />
        <link rel="icon" href="/we-logo.png" />
      </Head>

      <UseHero heroInfo={item?.heroInfo} />
      <Benefits benefits={item?.benefits}  />
      <UseHow howInfo={item?.howInfo}  />
      <div className="mb-32 w-full h-32 lg:hidden flex"></div>
      <CustomCarousel />
      <RequestDemo />
      <NewFooter />
    </div>
  );
};

export default ViewUseCase;
