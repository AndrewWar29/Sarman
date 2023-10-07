import React from "react";
import "../css/cont_serv.css"; 
import foto_1 from '../images/dentista.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { MdOutlineMedicalServices } from "react-icons/md";
import { Carousel_serv } from "./carousel_serv";

function ContServ() {

  return (

    <div>
    <div>
      <Card>
    <Card.Body className="aboutus-card1">
      <Card.Text className="aboutus-text1 text-center">
      Servicios dentales
      </Card.Text>
      <Card.Text className="aboutus-text2 text-center">
        Aquí una descripción y casos clínicos de los servicios que ofrece nuestra clínica.
      </Card.Text>
    </Card.Body>
  </Card>

    
    <div className="cont-serv">

      <Carousel_serv></Carousel_serv> 
 
    </div>
    </div>
    </div>
  )
}

export { ContServ };
