import React from 'react';
import "../css/aboutus_content.css";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import equipo from '../images/equipo.png';
import kids from '../images/kids.jpg';
import local from '../images/local.jpg';
import foto1 from '../images/banner2.jpg';

function AboutCard() {
  return (
    <>
      <Card>
        <Card.Body className="aboutus-card1">
          <Card.Text className="aboutus-text1">
          Clínica Dental Sarman
          </Card.Text>
          <Card.Text className="aboutus-text2">
          Somos un centro dental con años de experiencia en el mercado de la región de Atacama, que entrega soluciones odontológicas a cientos de personas, consolidándose como una clínica que presta servicios de calidad en el área de salud dental y estética oral.
          </Card.Text>
        </Card.Body>
      </Card>


    <Row xs={1} md={3} className="g-4">
      <Card className="aboutus-box">
        <Card.Img variant="top" src={equipo} />
        <Card.Body>
          <Card.Text className="card-text1">
            Contamos con 5 excelentes profesionales y especialistas
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="aboutus-box">
        <Card.Img variant="top" src={local} />
        <Card.Body>
          <Card.Text className="card-text1">
          11 especialidades en nuestro centro
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="aboutus-box">
        <Card.Img variant="top" src={kids} />
        <Card.Body>
          <Card.Text className="card-text1">
          Atención personalizada para niños y adultos
          </Card.Text>
        </Card.Body>
      </Card>
      </Row>

      <Card>
        <Card.Body>
          <Card.Text className="aboutus-text1-1">
            ¡La prevención es tu mejor tratamiento!
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export {AboutCard};