import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

function App() {
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
    <div className="App">
      <Header currentTime={currentTime} />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
