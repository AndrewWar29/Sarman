import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../css/carousel_serv.css';
import { Blanqueamiento_dental } from '../components/new_service_1';
import { Service_wrapper_1, Service_wrapper_2, Service_wrapper_3, Service_wrapper_4} from '../components/service_wrapper';

function Carousel_serv() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className="carousel_serv carousel-fade" // Add the "carousel-fade" class here
    >
      <Carousel.Item>
        <Service_wrapper_1/>
      </Carousel.Item>
      <Carousel.Item>
        <Service_wrapper_2 />
      </Carousel.Item>
      <Carousel.Item>
        <Service_wrapper_3 />
      </Carousel.Item>
      <Carousel.Item>
        <Service_wrapper_4 />
      </Carousel.Item>
    </Carousel>
  );
}

export { Carousel_serv };
