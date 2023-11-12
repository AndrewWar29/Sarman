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
