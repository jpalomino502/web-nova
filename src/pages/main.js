import { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Hero from "../components/Home/Hero";
import Services from "../components/Home/Services";

export default function Main() {
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
    </div>
  );
}
