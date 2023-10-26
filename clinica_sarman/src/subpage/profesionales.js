import React, { useEffect } from "react";
import ReactGA from 'react-ga4';
import { Navigation_bar} from "../components/navbar";
import { Banner} from "../components/banner";
import { Footer} from "../components/footer";
import {Card_pro_1} from "../components/card_pro_1";
//Home page content
function Doctors() {
    useEffect(() => {
      ReactGA.send('pageview', '/profesionales');
    }, []);
    return (
      <React.Fragment>
      <Banner/>
      <Navigation_bar/>
      <Card_pro_1/>
      <Footer/>
      </React.Fragment>
    );
  }

export {Doctors};