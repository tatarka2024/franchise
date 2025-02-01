import About from "./components/main/Home/About/About";
import BusinessSteps from "./components/main/Home/BusinessSteps/BusinessSteps";
import ComingSoon from "./components/main/Home/ComingSoon/ComingSoon";
import FeedBackComponent from "./components/main/Home/FeedbackComponent/FeedBackComponent";
import FeedBackComponentScondary from "./components/main/Home/FeedBackComponentScondary/FeedBackComponentScondary";
import Format from "./components/main/Home/Format/Format";
import FranchiseBenefits from "./components/main/Home/FranchiseBenefits/FranchiseBenefits";
import Hero from "./components/main/Home/Hero/Hero";
import OurProducts from "./components/main/Home/OurProducts/OurProducts";
import OurSuperiority from "./components/main/Home/OurSuperiority/OurSuperiority";
import PlaceFormats from "./components/main/Home/PlaceFormats/PlaceFormats";
import ProfitCalculator from "./components/main/Home/ProfitCalculator/ProfitCalculator";
import StartWithUs from "./components/main/Home/StartWithUs/StartWithUs";
import WhyUs from "./components/main/Home/WhyUs/WhyUs";

export const metadata = {
  title: "Татарка",
  description: "«Татарка» чебуреки по-кримськи",
  keywords: "чебуреки, фрашиза, татарка, чебуреки по-кримськи",
  // metadataBase: new URL("https://"),
  openGraph: {
    title: "Татарка",
    description: "«Татарка» чебуреки по-кримськи",
    // url: "https://",
    images: [
      {
        url: "/images/og.png", //перед зображенням треба додати прод юрл,як і в url та metadataBase, інакше зображення опенграфу може не відображатись
        width: 800,
        height: 600,
        alt: "Татарка",
      },
    ],
    locale: "ua_UA",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhyUs />
      <FranchiseBenefits />
      <OurProducts />
      <Format />
      <FeedBackComponent />
      <PlaceFormats />
      <BusinessSteps />
      <OurSuperiority />
      <StartWithUs />
      <ProfitCalculator />
      <ComingSoon />
      <FeedBackComponentScondary />
    </>
  );
}
