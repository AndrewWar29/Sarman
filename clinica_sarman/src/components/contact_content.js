import React from "react";
import "../css/contact_content.css";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'; // Import the Bootstrap button component
import { BsWhatsapp} from "react-icons/bs";

import alvaroImage from '../images/alvaro.png';
import constanzaImage from '../images/constanza.png';
import pabloImage from '../images/pablo.png';

// Define WhatsApp numbers and data for each doctor
const doctorsData = [
  {
    name: 'Dr. Alvaro Moraga',
    image: alvaroImage,
    number: '+56994044224', // Replace with the actual number
    message: 'Hello Alvaro, I would like to make an appointment.'
  },
  {
    name: 'Dra. Constanza Nuñez',
    image: constanzaImage,
    number: '+56966415463', // Replace with the actual number
    message: 'Hi Constanza, I have some questions about your services.'
  },
  {
    name: 'Dr. Pablo Sarce',
    image: pabloImage,
    number: '+56995432254', // Replace with the actual number
    message: 'Hi Pablo, can you help me with a health concern?'
  },
];

function Contact_content() {
  return (
    <>
      <Card>
        <Card.Body className="aboutus-card1">
          <Card.Text className="aboutus-text1">Contacto</Card.Text>
          <Card.Text className="aboutus-text2">
            Reserva tu hora con alguno de nuestros tres especialistas vía WhatsApp📲
          </Card.Text>
        </Card.Body>
      </Card>

      <Row xs={1} md={3} className="g-4">
        {doctorsData.map((doctor, index) => (
          <Card className="aboutus-box" key={index}>
            <div className="center-content">
              <Card.Img variant="top" src={doctor.image} className="doctor-image" />
              <Card.Body>
                <Card.Text className="card-text1 text-center">
                  {doctor.name}
                </Card.Text>
                <Button
                  variant="primary" // You can change the variant as needed
                  href={`https://wa.me/${doctor.number}?text=${encodeURIComponent(doctor.message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-button"
                >
                  Contactar por WhatsApp <BsWhatsapp/>
                </Button>
              </Card.Body>
            </div>
          </Card>
        ))}
      </Row>
      <Card>
        <Card.Body className="aboutus-card1">
          <Card.Text className="aboutus-text1">Ubicación</Card.Text>
          <Card.Text className="aboutus-text2">
            Edificio VALLE DE COPIAPO - Colipi 570, Edificio VALLE DE COPIAPO, Oficina 221, Copiapó, Atacama
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export { Contact_content };
