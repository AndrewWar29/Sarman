import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Navigation_bar } from "../components/navbar";
import { Carrusel } from "../components/carrusel";
import { Banner } from "../components/banner";
import { Footer } from "../components/footer";
import { Boxes } from "../components/home_content";
import ReactGA from 'react-ga';

// Home page content
function Home() {
  useEffect(() => {
    // Track a pageview for the Home component
    ReactGA.pageview('/home');

    // You can replace '/home' with any other path that is relevant to your website's structure.
  }, []);

  return (
    <React.Fragment>
      <Banner />
      <Navigation_bar />
      <Carrusel />
      <Boxes />
      <Footer />
    </React.Fragment>
  );
}

export { Home };
