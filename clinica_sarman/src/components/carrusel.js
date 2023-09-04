import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import first_slide from '../images/first_slide.png';
import second_slide from '../images/second_slide.png';
import third_slide from '../images/third_slide.png';
import "../css/carrusel.css";

function Carrusel() {
    return (
    <Carousel className="carousel-inner" variant="ligth">
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={first_slide}
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
            src={second_slide}
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
            src={third_slide}
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