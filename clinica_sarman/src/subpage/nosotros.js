import React, { useEffect } from "react";
import ReactGA from 'react-ga4';
import { Navigation_bar} from "../components/navbar";
import { Banner} from "../components/banner";
import { Footer} from "../components/footer";
import { AboutCard} from "../components/aboutus_content";

//Home page content
function About_us() {
    useEffect(() => {
      ReactGA.send('pageview', '/nosotros');
    }, []);
    return (
      <React.Fragment>
      <Banner/>
      <Navigation_bar/>
      <AboutCard/>
      <Footer/>
      </React.Fragment>
    );
  }

export {About_us};