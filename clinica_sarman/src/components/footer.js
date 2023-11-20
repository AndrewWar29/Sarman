import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiClinic } from "react-icons/bi";
import "../css/footer.css";
import foto_1 from '../images/clinica_dental_sarman.png';
import { AiOutlineHome } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

//#04b4ff
function Footer() {
  return (
    <MDBFooter style={{ backgroundColor: '#0281c9' }} className='text-center text-lg-start text-white'>
      <section className='d-flex justify-content-center align-items-center p-2'>
        <div className='text-center me-3'>
          <span>Contáctanos mediante nuestras redes sociales:</span>
        </div>
        <div className='d-flex'>
          <a href='https://www.facebook.com/profile.php?id=100064182994993' className='me-3 text-reset'>
            <AiFillFacebook className='icon-large' />
          </a>
          <a href='https://www.instagram.com/clinicadentalsarman/' className='text-reset'>
            <AiOutlineInstagram className='icon-large' />
          </a>
        </div>
      </section>


      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
          <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <div className="d-flex justify-content-center align-items-center" style={{ height: "100%" }}>
                <img src={foto_1} alt="Local" className="img-fluid"style={{ maxHeight: "100%", maxWidth: "100%" }} />
              </div>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contacto</h6>
              <p><a><AiOutlineHome className='icon-large'/></a>
              <MDBIcon icon="phone" className="me-3" /> Colipi 570, Edificio Valle de Copiapó, Oficina 221, Copiapó, Atacama
              </p>
              <p><a><BsTelephone className='icon-large'/></a>
              <MDBIcon icon="phone" className="me-3" />
                <a href='reserva' className='text-reset'>
                  Contacto profesionales
                </a>
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Horarios</h6>
              <p className='text-justify'>
                Lunes a jueves de 09:15 a 13:00 hrs. y de 16:00 a 19:00 hrs. <br />
                Viernes de 09:15 a 13:00 hrs.
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Información</h6>
              <p>
                <a href='/nosotros' className='text-reset'>
                  Nosotros
                </a>
              </p>
              <p>
                <a href='/servicios' className='text-reset'>
                  Servicios
                </a>
              </p>
              <p>
                <a href='/consejos' className='text-reset'>
                  Consejos
                </a>
              </p>
            </MDBCol>

          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        ©Copyright: 
        <a className='text-reset fw-bold' href='https://clinicasarman.cl/'>
        https://ClinicaSarman.cl
        </a>
      </div>
    </MDBFooter>
  );
}

export {Footer};