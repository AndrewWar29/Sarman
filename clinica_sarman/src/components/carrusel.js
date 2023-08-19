import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import foto_1 from '../images/banner3.png';
import foto_2 from '../images/banner2.jpg';
import second_slide from '../images/second_slide.png';
import "../css/carrusel.css";

function Carrusel() {
    return (
    <Carousel className="carousel-inner" variant="ligth">
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={second_slide}
            alt="First slide"
            />
            <Carousel.Caption>
            <h5 className="pdecarrusel"></h5>
            <p className="pdecarrusel"></p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={foto_1}
            alt="Second slide"
            />
            <Carousel.Caption>
            <h5 className="pdecarrusel"> </h5>
            <p className="pdecarrusel"></p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={foto_2}
            alt="Third slide"
            />
            <Carousel.Caption>
            <h5 className="pdecarrusel"></h5>
            <p className="pdecarrusel">
            </p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    );
}

export {Carrusel};