import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Navigation_bar} from "../components/navbar";
import { Carrusel} from "../components/carrusel";
import { Banner} from "../components/banner";
import { Footer} from "../components/footer";
import {Consejos} from "../components/tips"
import React from "react";

//Home page content
function Advice() {
    return (
      <React.Fragment>
      <Banner/>
      <Navigation_bar/>
      <Consejos />
      <Footer/>
      </React.Fragment>
    );
  }

export {Advice};