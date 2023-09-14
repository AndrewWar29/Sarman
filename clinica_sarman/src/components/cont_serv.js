import React from "react";
import "../css/cont_serv.css"; 
import foto_1 from '../images/dentista.jpg';
import { MdOutlineMedicalServices } from "react-icons/md";
import { Carousel_serv } from "./carousel_serv";

function ContServ() {

  return (
    <div className="cont-serv">
      <div className="cont-serv-header">
        <MdOutlineMedicalServices className="cont-serv-icon" />
        <h2>Servicios Dentales</h2>
      </div>
      <Carousel_serv></Carousel_serv> 
     
    
        
 
    </div>
  )
}

export { ContServ };