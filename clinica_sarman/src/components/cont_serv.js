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
    <div className="cont-serv">
        <Card>
          <Card.Body className="aboutus-card1">
            <Card.Text className="aboutus-text1"> <MdOutlineMedicalServices className="cont-serv-icon" /> Servicios dentales</Card.Text>
            <Card.Text className="aboutus-text2">
              Aqui una descripción y casos clinicos de los servicios que ofrece nuestra clinica.
            </Card.Text>
          </Card.Body>
        </Card>

      <Carousel_serv></Carousel_serv> 
     
    
        
 
    </div>
  )
}

export { ContServ };