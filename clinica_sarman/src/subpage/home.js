import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Navigation_bar} from "../components/navbar";
import { Carrusel} from "../components/carrusel";
import { Banner} from "../components/banner";
import { Footer} from "../components/footer";
import { Boxes} from "../components/home_content";


//Home page content
function Home() {
    return (
      <React.Fragment>
      <Banner/>
      <Navigation_bar/>
      <Carrusel/>
      <Boxes/>
      <Footer/>
      </React.Fragment>
    );
  }

export {Home};