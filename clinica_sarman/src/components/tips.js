import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import "../css/tips.css";
import { Cepillado_dientes, Hilo_dental, Enjuague_bucal, Buen_cepillo, Tecnica_cepillo, Cuidado_cepillo, Azucar, Calcio, Bebidas, Emergencia, Sangrado, Roto } from "../components/consejos_contenido";
import Dientes from "../images/banner2.jpg";
import Urgencia from "../videos/Video.mp4";

const categoryContent = {
  'Cuidado dental': (
    <div>
      <Row xs={1} md={3} className="g-1">
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
      <Row xs={1} md={3} className="g-1">
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
      <Row xs={1} md={3} className="g-1">
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
      <Row xs={1} md={3} className="g-1">
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
  const [selectedCategory, setSelectedCategory] = useState(null);

  const selectCategory = (category) => {
    // Toggle the selection if the same category is clicked again
    setSelectedCategory((prevCategory) =>
      prevCategory === category ? null : category
    );
  };

  return (
    <div>
      <div>
        <Card>
          <Card.Body className="aboutus-card1">
            <Card.Text className="aboutus-text1">Consejos</Card.Text>
            <Card.Text className="aboutus-text2">
              Selecciona el botón que corresponde al tipo de consejo que deseas recibir.
            </Card.Text>
          </Card.Body>
        </Card>
        <ul className="category-list">
          {dentalTipsData.map((categoryData, index) => (
            <li key={index}>
              <button onClick={() => selectCategory(categoryData.category)}>
                {/* Remove the title below the buttons */}
                {categoryData.category}
              </button>
            </li>
          ))}
        </ul>
        {selectedCategory && (
          <div className="selected-category">
            {categoryContent[selectedCategory]}
          </div>
        )}
      </div>
    </div>
  );
}

export { Consejos };
