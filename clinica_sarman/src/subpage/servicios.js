import React, { useEffect } from "react";
import ReactGA from 'react-ga4';
import { Navigation_bar} from "../components/navbar";
import { Banner} from "../components/banner";
import { Footer} from "../components/footer";
import { ContServ } from "../components/cont_serv";

//Home page content
function Services() {
  useEffect(() => {
    ReactGA.send('pageview', '/servicios');
  }, []);
    return (
      <React.Fragment>
      <Banner/>
      <Navigation_bar/>
      <ContServ/>
      <Footer/>
      </React.Fragment>
    );
  }

export {Services};