import Hero from "../components/Home/Hero";
import Portfolio from "../components/Home/portfolio";
import Services from "../components/Home/Services";
import AboutUs from "../components/Home/AboutUs";
import Faqs from "../components/Home/Faqs";
import Team from "../components/Home/Team";
import Cta from "../components/Home/Cta";

export default function Home() {
  

  return (
    <div className="min-h-screen font-sans">
      <Hero />
      <Services />
      <Portfolio />
      <AboutUs />
      <Faqs />
      <Team />
      <Cta />
    </div>
  );
}
