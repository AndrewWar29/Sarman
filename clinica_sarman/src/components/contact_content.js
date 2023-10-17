import React, { useState } from "react";
import "../css/contact_content.css";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BsWhatsapp } from "react-icons/bs";
import { TiContacts } from "react-icons/ti";

import alvaroImage from '../images/alvaro.png';
import constanzaImage from '../images/constanza.png';
import pabloImage from '../images/pablo.png';

const doctorsData = [
  {
    name: 'Dr. Alvaro Moraga',
    image: alvaroImage,
    number: '+56994044224',
    procedures: [
      'Endodoncias (incisivos, caninos y premolares)',
      'Pediatría',
      'Estética (bichectomía, toxina botulínica y rinomodelación)',
      'Restauraciones',
      'Radiografías',
      'Urgencias',
      'Extracciones dentales',
      'Limpieza dental',
      'Otro',
    ],
  },
  {
    name: 'Dra. Constanza Nuñez',
    image: constanzaImage,
    number: '+56966415463',
    procedures: [
      'Tratamientos periodontales (pulidos radiculares, alargamiento coronario, gingivectomía)',
      'Restauraciones',
      'Radiografías',
      'Urgencias',
      'Extracciones dentales',
      'Limpieza dental',
      'Atención por Fonasa',
      'Otro',
    ],
  },
  {
    name: 'Dr. Pablo Sarce',
    image: pabloImage,
    number: '+56995432254',
    procedures: [
      'Rehabilitaciones Complejas',
      'Coronas sobre dientes e implantes',
      'Prótesis Fija Plural (puentes)',
      'Incrustaciones',
      'Carillas',
      'Levantamiento de mordida',
      'Prótesis Removibles',
      'Restauraciones simples y complejas',
      'Radiografías retroalveolares',
      'Urgencias',
      'Extracciones dentales simples y complejas',
      'Limpieza dental',
      'Otro',
    ],
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

  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [submitting, setSubmitting] = useState(false); // Track form submission state

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDoctorSelect = (doctor) => {
    if (selectedDoctor === doctor) {
      // If the same doctor is clicked again, reset the form
      setSelectedDoctor(null);
      setFormData({
        name: '',
        lastName: '',
        phoneNumber: '',
        rut: '',
        email: '',
        procedure: '',
      });
    } else {
      setSelectedDoctor(doctor);
    }
  };

  const handleSubmit = () => {
    if (selectedDoctor) {
      const { name, lastName, phoneNumber, rut, email, procedure } = formData;

      // Verificar que todos los campos estén llenos
      if (name && lastName && phoneNumber && rut && email && procedure) {
        setSubmitting(true); // Set submitting state to true while sending message
        const doctor = selectedDoctor;
        const whatsappMessage = `Hola ${doctor.name}, estoy interesado en el procedimiento de ${procedure}. Mis datos son los siguientes:\n\nNombre y apellido: ${name} ${lastName}\nNúmero de teléfono: ${phoneNumber}\nRUT: ${rut}\nCorreo: ${email}`;
        const whatsappURL = `https://wa.me/${doctor.number}?text=${encodeURIComponent(whatsappMessage)}`;

        // Simulate a delay to show "Contactando a Dr. [Doctor's Name]..."
        setTimeout(() => {
          window.open(whatsappURL, '_blank');
          setSubmitting(false); // Reset submitting state
        }, 1500); // Adjust the delay time as needed
      } else {
        // Aquí puedes mostrar un mensaje de error o tomar la acción que desees
        alert('Por favor, complete todos los campos antes de enviar el mensaje de WhatsApp.');
      }
    }
  }

  return (
    <>
      <Card>
        <Card.Body className="aboutus-card1">
          <Card.Text className="aboutus-text1 text-center"> Contacto </Card.Text>
          <Card.Text className="aboutus-text2 text-center">
            Reserva tu hora con alguno de nuestros tres especialistas vía WhatsApp📲
          </Card.Text>
        </Card.Body>
      </Card>
  
      <Row xs={1} md={3} className="g-4">
        {doctorsData.map((doctor, index) => (
          <div className="centered-container">
            <Card className="aboutus-box-cont card_cont" key={index}>
              <div className="center-content">
                <Card.Img variant="top" src={doctor.image} className="doctor-image" />
                <Card.Body>
                  <Card.Text className="card-text1 text-center">
                    {doctor.name}
                  </Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => handleDoctorSelect(doctor)}
                    className="whatsapp-button"

                  >
                    Contactar por WhatsApp <BsWhatsapp />
                  </Button>
                </Card.Body>
              </div>
            </Card>
          </div>
        ))}
      </Row>
  
      {selectedDoctor && (
        <Card>
          <Card.Body className="aboutus-card1">
            <Card.Text className="aboutus-text1">
              Contactando a {selectedDoctor.name}
            </Card.Text>
            <Form>
              <div className="form-group-spacing">
                <Form.Group controlId="name">
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </div>
              <div className="form-group-spacing">
                <Form.Group controlId="lastName">
                  <Form.Control
                    type="text"
                    name="lastName"
                    placeholder="Apellido"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </div>
              <div className="form-group-spacing">
                <Form.Group controlId="phoneNumber">
                  <Form.Control
                    type="text"
                    name="phoneNumber"
                    placeholder="Número de teléfono"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </div>
              <div className="form-group-spacing">
                <Form.Group controlId="rut">
                  <Form.Control
                    type="text"
                    name="rut"
                    placeholder="RUT"
                    value={formData.rut}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </div>
              <div className="form-group-spacing">
                <Form.Group controlId="email">
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </div>
              <Form.Group controlId="procedure">
                <select
                  className="form-control"
                  name="procedure"
                  value={formData.procedure}
                  onChange={handleInputChange}
                >
                  <option value="">Selecciona un procedimiento</option>
                  {selectedDoctor &&
                    selectedDoctor.procedures.map((procedure, index) => (
                      <option key={index} value={procedure}>
                        {procedure}
                      </option>
                    ))}
                </select>
              </Form.Group>
              {submitting ? (
                <Button variant="primary" disabled>
                  Enviando <BsWhatsapp />
                </Button>
              ) : (
                <Button
                  variant="primary"
                  onClick={handleSubmit}
                  className="whatsapp-button"
                  style={{ marginTop: "10px" }}
                >
                  Enviar Mensaje <BsWhatsapp />
                </Button>
              )}
            </Form>
          </Card.Body>
        </Card>
      )}
    </>
  );
}

export { Contact_content };