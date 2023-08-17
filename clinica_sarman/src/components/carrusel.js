import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import foto_1 from '../images/dentista.jpg';
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
            <h5 className="pdecarrusel"> "Your friendly neighborhood Spider-Man 🕸🕷</h5>
            <p className="pdecarrusel">Mascara replica de Spider-Man basado en la pelicula "Infinity War".</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={foto_1}
            alt="Third slide"
            />
            <Carousel.Caption>
            <h5 className="pdecarrusel">I am Groot!</h5>
            <p className="pdecarrusel">
                Figura impresa en 3d de Baby Groot.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    );
}

export {Carrusel};