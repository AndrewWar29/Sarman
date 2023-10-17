import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Navigation_bar} from "../components/navbar";
import { Banner} from "../components/banner";
import { Footer} from "../components/footer";
import React from "react";

//Home page content
function Cases() {
    return (
      <React.Fragment>
      <Banner/>
      <Navigation_bar/>
      <h>Aca van a ir los casos clinicos!</h>
      <Footer/>
      </React.Fragment>
    );
  }

export {Cases};

