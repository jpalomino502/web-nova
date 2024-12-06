import { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Hero from "../components/Home/Hero";
import Portfolio from "../components/Home/portfolio";
import Services from "../components/Home/Services";
import AboutUs from "../components/Home/AboutUs";
import Faqs from "../components/Home/Faqs";
import Team from "../components/Home/Team";
import Cta from "../components/Home/Cta";
import Footer from "../components/Home/Footer";

export default function Home() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZoneName: "short"
      }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen font-sans">
      <Header currentTime={currentTime} />
      <Hero />
      <Services />
      <Portfolio />
      <AboutUs />
      <Faqs />
      <Team />
      <Cta />
      <Footer />
    </div>
  );
}
