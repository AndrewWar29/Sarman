import React, { useState } from 'react';
import '../css/aboutus_content.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import equipo from '../images/equipo.png';
import kids from '../images/kids.jpg';
import local from '../images/local.jpg';
import { BsWhatsapp } from 'react-icons/bs';
import "../css/home_content.css";
import CardGroup from 'react-bootstrap/CardGroup';
import { LiaToothSolid } from "react-icons/lia";
import alvaroImage from '../images/Alvaro1.jpg';
import constanzaImage from '../images/Constanza1.jpg';
import pabloImage from '../images/Pablo1.png';
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
import BrunoImage from '../images/Bruno.jpg';
import ConsaludImage from '../images/Consalud.jpg';
import FonasaImage from '../images/Fonasa.jpg';
import KratosImage from '../images/Kratos.jpg';
import PolesportImage from '../images/PoleSport.jpg';
import ProfesoresImage from '../images/Profesores.jpg';
import RegionalImage from '../images/Regional.jpg';


const AboutCard = () => {
  const [formData, setFormData] = useState({
    company: '',
    reason: '',
  });
  const [submitting, setSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { company, reason } = formData;

    if (company && reason) {
      setSubmitting(true);
      const doctor = 'Dr. Alvaro';
      const phoneNumber='+56994044224'
      const whatsappMessage = `Hola ${doctor}, como representante de ${company} me interesa crear un convenio con Clinica Sarman porque ${reason}.`;
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

      setTimeout(() => {
        window.open(whatsappURL, '_blank');
        setSubmitting(false);
      }, 1500);
    } else {
      alert('Por favor, complete todos los campos antes de enviar el mensaje de WhatsApp.');
    }
  };

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
            Contamos con 6 excelentes profesionales y especialistas
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

      <div style={{ borderBottom: '20px solid #0281c9' }}></div>

      <Card style={{ backgroundColor: '#f5f5f5' }}>
      <Card.Body >
        <Card.Text className="aboutus-text1 text-center"> Dentistas <LiaToothSolid /> </Card.Text>
        <Card.Text className="aboutus-text2 text-center">
          Conoce mejor a los dentistas de nuestra clínica
        </Card.Text>
        </Card.Body>
        <div className="centered-container">
      <CardGroup>
        <Card className="card_pro">
          <Card.Img variant="top" src={alvaroImage} />
        </Card>
        <Card className="card_pro">
          <Card.Img variant="top" src={constanzaImage} />
        </Card>
        <Card className="card_pro">
          <Card.Img variant="top" src={pabloImage} />
        </Card>
      </CardGroup>
      </div>
      </Card>

      <div style={{ borderBottom: '20px solid #0281c9' }}></div>

      <Card>
      <Card.Body className="aboutus-card1">
      <Card.Text className="aboutus-text1 text-center">
          Nuestros Convenios
        </Card.Text>
        <Card.Text className="aboutus-text2 text-center"  style={{ marginBottom: '35px' }}>
          Conoce los convenios disponibles en nuestra clínica
        </Card.Text>
        <div className="row">
          <div className="col-lg-6" style={{ height: '100%' }}>
            <ListGroup style={{ height: '100%', marginBottom: '35px'}}>
              <ListGroup.Item className="list-text" action href="https://www.instagram.com/p/CvuVTwnAU5Z/">Colegio de profesores de Atacama</ListGroup.Item>
              <ListGroup.Item className="list-text">Academia Amanda en Vivo</ListGroup.Item>
              <ListGroup.Item className="list-text" action href="https://www.instagram.com/p/CmXgmnisr6W/">Academia Polesport</ListGroup.Item>
              <ListGroup.Item className="list-text" action href="https://www.instagram.com/p/CmfmDX7smGj/">Escuela de fútbol Bruno Romo</ListGroup.Item>
              <ListGroup.Item className="list-text">DGAC</ListGroup.Item>
              <ListGroup.Item className="list-text" action href="https://www.instagram.com/p/CTpn--ILvGV/">Gobierno regional</ListGroup.Item>
              <ListGroup.Item className="list-text" action href="https://www.instagram.com/p/CtsTy0YM_uq/">Gym Kratos Box</ListGroup.Item>
              <ListGroup.Item className="list-text" action href="https://www.instagram.com/p/CTpn--ILvGV/">Minera La Condesa</ListGroup.Item>
              <ListGroup.Item className="list-text">Copiapó Voley Club</ListGroup.Item>
              <ListGroup.Item className="list-text" action href="https://www.instagram.com/p/CTpn--ILvGV/">Isapre Consalud</ListGroup.Item>
            </ListGroup>
          </div>

        <div className="col-lg-6" style={{ height: '100%' }}>
        <Carousel style={{ height: '100%'}}>  
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={BrunoImage}
              alt="Imagen 1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ConsaludImage}
              alt="Imagen 1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={FonasaImage}
              alt="Imagen 1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={KratosImage}
              alt="Imagen 1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={PolesportImage}
              alt="Imagen 1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ProfesoresImage}
              alt="Imagen 1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={RegionalImage}
              alt="Imagen 1"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
      </Card.Body>
    </Card>

      <Card>
      <Card.Body className="aboutus-card1">
        <Card.Text className="aboutus-text1 text-center"> Crear convenio </Card.Text>
        <Card.Text className="aboutus-text2 text-center">
          ¿Interesado en crear un convenio? Contáctanos vía WhatsApp📲
        </Card.Text>
          <Form>
            <div className="form-group-spacing">
              <Form.Group controlId="company">
                <Form.Control
                  type="text"
                  name="company"
                  placeholder="Nombre de la empresa"
                  value={formData.company}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </div>
            <div className="form-group-spacing">
              <Form.Group controlId="reason">
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="reason"
                  placeholder="¿Por qué quieres crear un convenio con nosotros?"
                  value={formData.reason}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </div>
            <Button
              variant="primary"
              onClick={handleSubmit}
              className="whatsapp-button"
              style={{ marginTop: '10px' }}
              disabled={submitting}
            >
              {submitting ? 'Enviando...' : 'Enviar Mensaje'} <BsWhatsapp />
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Text className="aboutus-text1-1">
            ¡La prevención es tu mejor tratamiento!
          </Card.Text>
        </Card.Body>
      </Card>










    </>
  );
};

export { AboutCard };
