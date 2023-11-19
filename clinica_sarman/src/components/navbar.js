import React from "react";
import "../css/navbar.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineInfoCircle} from "react-icons/ai";
import { FaUserDoctor } from "react-icons/fa6";
import { MdOutlineMedicalServices } from "react-icons/md";
import { AiOutlineBulb } from "react-icons/ai";
import { TiContacts } from "react-icons/ti";
import { GiHealthNormal } from "react-icons/gi";


// <Navbar.Brand href="/"><img className="logo_de_marca" src={logo} alt="logo"/></Navbar.Brand>


const localName=localStorage.getItem("name")

function Navigation_bar() {
    return (
        <Nav class="py-0">
        <Navbar className="navegacion" collapseOnSelect expand="lg" variant="light">
            <Nav className="m-auto">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/"><a className="linkText"  href="/"><AiOutlineHome/> Home</a></Nav.Link>
                <Nav.Link href="/nosotros"><a className="linkText" href="/nosotros"><AiOutlineInfoCircle/> Nosotros</a></Nav.Link>
                <Nav.Link href="/servicios"><a className="linkText" href="/servicios"><MdOutlineMedicalServices/> Servicios </a></Nav.Link>
                <Nav.Link href="/consejos"><a className="linkText" href="/consejos"><AiOutlineBulb/> Consejos </a></Nav.Link>
                <Nav.Link href="/reserva"><a className="linkText" href="/reserva"><TiContacts/> Reserva</a></Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Nav>
    </Navbar>
    </Nav>
    );
}

export {Navigation_bar};