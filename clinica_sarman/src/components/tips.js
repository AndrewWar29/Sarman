import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Select from 'react-select';
import "../css/tips.css";
import { FaUserDoctor } from "react-icons/fa6";
import { Cepillado_dientes, Hilo_dental, Enjuague_bucal, Buen_cepillo, Tecnica_cepillo, Cuidado_cepillo, Azucar, Calcio, Bebidas, Emergencia, Sangrado, Roto } from "../components/consejos_contenido";

const categoryOptions = [
  { value: 'Cuidado dental', label: '1. Cuidado dental' },
  { value: 'Cepillado', label: '2. Cepillado' },
  { value: 'Alimentación', label: '3. Alimentación' },
  { value: 'Emergencias dentales', label: '4. Emergencias dentales' },
];


const categoryContent = {
  'Cuidado dental': (
    <div>
      <Row xs={1} md={2} lg={3} className="g-4">
        <Col>
          <Cepillado_dientes />
        </Col>
        <Col>
          <Hilo_dental />
        </Col>
        <Col>
          <Enjuague_bucal />
        </Col>
      </Row>
    </div>
  ),
  'Cepillado': (
    <div>
      <Row xs={1} md={2} lg={3} className="g-4">
        <Col>
          <Buen_cepillo />
        </Col>
        <Col>
          <Tecnica_cepillo />
        </Col>
        <Col>
        <Cuidado_cepillo />
        </Col>
      </Row>
    </div>
  ),
  'Alimentación': (
    <div>
      <Row xs={1} md={2} lg={3} className="g-4">
        <Col>
          <Azucar />
        </Col>
        <Col>
        <Calcio />
        </Col>
        <Col>
        <Bebidas/>
        </Col>
      </Row>
    </div>
  ),
  'Emergencias dentales': (
    <div>
       <Row xs={1} md={2} lg={3} className="g-4">
        <Col>
          <Emergencia />
        </Col>
        <Col>
        <Sangrado />
        </Col>
        <Col>
        <Roto />
        </Col>
      </Row>
    </div>
  ),
};

const dentalTipsData = [
  {
    category: 'Cuidado dental',
  },
  {
    category: 'Cepillado',
  },
  {
    category: 'Alimentación',
  },
  {
    category: 'Emergencias dentales',
  },
];

function Consejos() {
  const [selectedCategory, setSelectedCategory] = useState(categoryOptions[0]);

  const selectCategory = (selectedOption) => {
    setSelectedCategory(selectedOption);
  };

  return (
    <div>
      <div>
        <Card>
          <Card.Body className="aboutus-card1">
            <Card.Text className="aboutus-text1 text-center">Consejos</Card.Text>
            <Card.Text className="aboutus-text2 text-center">
              Selecciona el tipo de consejo que deseas recibir.
            </Card.Text>
          </Card.Body>
        </Card>
        <div className="centered-select">
          <Select
            options={categoryOptions}
            value={selectedCategory}
            onChange={selectCategory}
            isSearchable={false}
            className="react-select-container"
            classNamePrefix="react-select"
          />
        </div>
        <div className="selected-category">
          {categoryContent[selectedCategory.value]}
        </div>
      </div>
    </div>
  );
}

export { Consejos };





