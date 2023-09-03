import React, { useState } from "react";
import "../css/contact_content.css";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BsWhatsapp } from "react-icons/bs";

import alvaroImage from '../images/alvaro.png';
import constanzaImage from '../images/constanza.png';
import pabloImage from '../images/pablo.png';

const doctorsData = [
  {
    name: 'Dr. Alvaro Moraga',
    image: alvaroImage,
    number: '+56994044224',
  },
  {
    name: 'Dra. Constanza Nuñez',
    image: constanzaImage,
    number: '+56966415463',
  },
  {
    name: 'Dr. Pablo Sarce',
    image: pabloImage,
    number: '+56995432254',
  },
];

function Contact_content() {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    phoneNumber: '',
    rut: '',
    email: '',
    procedure: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (doctor) => {
    const { name, lastName, phoneNumber, rut, email, procedure } = formData;
    
    const whatsappMessage = `Hola ${doctor.name}, estoy interesado en el procedimiento de ${procedure}. Mis datos son los siguientes:\n\nNombre y apellido: ${name} ${lastName}\nNúmero de teléfono: ${phoneNumber}\nRUT: ${rut}\nCorreo: ${email}`;
    
    const whatsappURL = `https://wa.me/${doctor.number}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, '_blank');
  };

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
                <Form>
                  <Form.Group controlId={`name-${index}`}>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Nombre"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group controlId={`lastName-${index}`}>
                    <Form.Control
                      type="text"
                      name="lastName"
                      placeholder="Apellido"
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group controlId={`phoneNumber-${index}`}>
                    <Form.Control
                      type="text"
                      name="phoneNumber"
                      placeholder="Número de teléfono"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group controlId={`rut-${index}`}>
                    <Form.Control
                      type="text"
                      name="rut"
                      placeholder="RUT"
                      value={formData.rut}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group controlId={`email-${index}`}>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Correo electrónico"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group controlId={`procedure-${index}`}>
                    <Form.Control
                      type="text"
                      name="procedure"
                      placeholder="Procedimiento de interés"
                      value={formData.procedure}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Button
                    variant="primary"
                    onClick={() => handleSubmit(doctor)}
                    className="whatsapp-button"
                  >
                    Contactar por WhatsApp <BsWhatsapp />
                  </Button>
                </Form>
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
