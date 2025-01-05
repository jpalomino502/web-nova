import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import Home from "./pages/Home";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import NotFound from "./pages/404";

function App() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleString("es-ES", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
          timeZoneName: "short",
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Impulsa tu negocio con las soluciones tecnológicas de WebNova. Desarrollo web, aplicaciones móviles y marketing digital."
        />
        <meta name="robots" content="index, follow" />
        <title>WebNova - Soluciones Tecnológicas en Bucaramanga</title>
        <link rel="canonical" href="https://webnova.com.co" />
        <meta
          name="keywords"
          content="WebNova, soluciones tecnológicas, desarrollo web, marketing digital, aplicaciones móviles"
        />
      </Helmet>

      <Router>
        <Header currentTime={currentTime} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Helmet>
                  <title>Inicio - WebNova</title>
                  <meta
                    name="description"
                    content="Descubre las mejores soluciones tecnológicas en Bucaramanga con WebNova."
                  />
                </Helmet>
                <Home />
              </>
            }
          />

          <Route
            path="*"
            element={
              <>
                <Helmet>
                  <title>Página no encontrada - WebNova</title>
                  <meta
                    name="description"
                    content="Lo sentimos, la página que buscas no está disponible."
                  />
                </Helmet>
                <NotFound />
              </>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
