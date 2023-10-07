import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import equipo from '../images/equipo.jpg';
import horario from '../images/horario.jpg';
import pago from '../images/pago.jpg';
import comentarios from '../images/comentarios.jpg';
import "../css/home_content.css";

function Boxes() {
    return (
      <div className="centered-container">
      <CardGroup>
        <Card className="card_pro">
          <Card.Img variant="top" src={pago} />
          <Card.Body>
            <Card.Text className="home_content-text1">
            Si tienes que realizarte algun tratamiento , no te preocupes porque contamos con distintas formas de pago para ti 😍🤩🦷 
            puedes pagar con los siguientes medios: efectivo, débito, crédito o transferencia electrónica . Reserva tu hora 😱
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card_pro">
          <Card.Img variant="top" src={horario} />
          <Card.Body>
            <Card.Text>
            ¡Nuestros horarios de atención! 🤩 Todas las horas puedes agendarlas con anticipación, escríbenos por interno. Si tienes una emergencia dental no dudes en avisarnos
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card_pro">
          <Card.Img variant="top" src={comentarios} />
          <Card.Body>
            <Card.Text>
            Siempre estamos al servicio de ustedes para entregarles la mejor atención posible 🥳 
            y ¡seguiremos mejorando porque ustedes lo merecen!Estos mensajitos nos alegran el día 😁 
            porque sabemos que después de su visita en nuestra clínica se van felices a sus casa 😇
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      </div>
    );
  }
  
  export {Boxes};
