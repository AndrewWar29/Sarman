import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { MdOutlineMedicalServices } from "react-icons/md";
import equipo from '../images/equipo.jpg';
import pago from '../images/pago.jpg';
import comentarios from '../images/comentarios.jpg';
import "../css/home_content.css";

function Boxes() {
    return (
        <div className="cont-serv">
            <div className="cont-serv-header">
                <h2></h2>
            </div>
            <Row>
                <Col md={4}>
                    <div className="service-box">
                        <div className="service">
                            <img src={pago} alt="Imagen" className="img-fluid" />
                            <p>
                            Si tienes que realizarte algun tratamiento , no te preocupes porque contamos con distintas formas de pago para ti 😍🤩🦷 puedes pagar con los siguientes medios: efectivo, débito, crédito o transferencia electrónica . Reserva tu hora 😱 
                            </p>
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="service-box">
                        <div className="service">
                            <img src={equipo} alt="Imagen" className="img-fluid" />
                            <p>
                            Nuestro equipo! 🤩 los cuales se encargarán de entregarte un servicio integral 🌟🦷. ¡Nos preocupamos por tu salud bucal! Agenda tu hora ¡te esperamos!
                            </p>
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="service-box">
                        <div className="service">
                            <img src={comentarios} alt="Imagen" className="img-fluid" />
                            <p>
                            Siempre estamos al servicio de ustedes para entregarles la mejor atención posible 🥳 y ¡seguiremos mejorando porque ustedes lo merecen!Estos mensajitos nos alegran el día 😁 porque sabemos que después de su visita en nuestra clínica se van felices a sus casa 😇
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export {Boxes};
