import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Navigation_bar} from "../components/navbar";
import { Carrusel} from "../components/carrusel";
import { Banner} from "../components/banner";
import { Footer} from "../components/footer";
import { Contact_content } from "../components/contact_content";
import React, { useEffect } from "react";
import ReactGA from 'react-ga4';

//Home page content
function Contact() {
  useEffect(() => {
    // Track a pageview for the Home component
    ReactGA.send('pageview', '/contacto');  
  }, []);
    return (
      <React.Fragment>
      <Banner/>
      <Navigation_bar/>
      <Contact_content/>
      <Footer/>
      </React.Fragment>
    );
  }

export {Contact};