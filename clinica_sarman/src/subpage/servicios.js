import React from "react";
import { Navigation_bar} from "../components/navbar";
import { Banner} from "../components/banner";
import { Footer} from "../components/footer";
import { ContServ } from "../components/cont_serv";

//Home page content
function Services() {
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