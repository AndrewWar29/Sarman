import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import foto_1 from '../images/dentista.jpg';
import blanqueamiento from '../images/blanqueamiento.jpg';
import cepillo from '../images/cepillo.jpg';
import hilo_dental from '../images/hilo_dental.jpg';
import enjuague from '../images/enjuague.jpg';
import buen_cepillo from "../videos/buen_cepillo.mp4";
import cepillado from "../videos/cepillado.mp4";
import cuidado_cepillo from "../videos/cuidado_cepillo.mp4";
import sugar from "../images/sugar.jpeg";
import calcio from "../images/calcio.jpg";
import water from "../images/water.jpg";
import emergencia from "../images/emergencia.jpg";
import sangrado from "../images/sangrado.jpg";
import roto from "../images/roto.jpg";
import cons_1 from "../images/cons_1.png";
import cons_2 from "../images/cons_2.png";
import cons_3 from "../images/cons_3.png";
import cons_4 from "../images/cons_1.png";
import cons_5 from "../images/cons_2.png";
import cons_6 from "../images/cons_3.png";
import cons_7 from "../images/cons_1.png";
import cons_8 from "../images/cons_2.png";
import cons_9 from "../images/cons_3.png";
import '../css/new_service.css';


function Cepillado_dientes() {
  return (
    <MDBContainer className="py-5 h-100">
      <MDBRow className="justify-content-center align-items-center h-100">
        <MDBCol lg="10" xl="10">
          <MDBCard className="card-container h-100">
            <div className="rounded-top text-white d-flex flex-row justify-content-center align-items-center" style={{ backgroundColor: '#0281c9', height: '200px' }}>
              <div className="text-center">
                <MDBTypography tag="h5" style={{ fontSize: '30px' }}>1. Cepíllate los dientes al menos dos veces al día: </MDBTypography>
              </div>
            </div>
          
            <MDBCardBody className="text-black p-4">
              <div className="mb-5">
                <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                <MDBCardImage src={cons_1} alt="Large image" className="w-100 rounded-3" />
                </div>
              </div>
              
              {/* Display a single large photo */}
              <MDBCardImage src={cepillo} alt="Large image" className="w-100 rounded-3" />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

function Hilo_dental() {
    return (
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="10" xl="10">
            <MDBCard className="card-container h-100">
              <div className="rounded-top text-white d-flex flex-row justify-content-center align-items-center" style={{ backgroundColor: '#0281c9', height: '200px' }}>
                <div className="text-center">
                  <MDBTypography tag="h5" style={{ fontSize: '30px' }}>2.Utiliza hilo dental diariamente para limpiar entre los dientes: </MDBTypography>
                </div>
              </div>
            
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                  <MDBCardImage src={cons_2} alt="Large image" className="w-100 rounded-3" />
                  </div>
                </div>
                
                {/* Display a single large photo */}
                <MDBCardImage src={hilo_dental} alt="Large image" className="w-100 rounded-3" />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }

  function Enjuague_bucal() {
    return (
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="10" xl="10">
            <MDBCard className="card-container h-100">
              <div className="rounded-top text-white d-flex flex-row justify-content-center align-items-center" style={{ backgroundColor: '#0281c9', height: '200px' }}>
                <div className="text-center">
                  <MDBTypography tag="h5" style={{ fontSize: '30px' }}>3.Enjuaga con enjuague bucal después del cepillado: </MDBTypography>
                </div>
              </div>
            
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                  <MDBCardImage src={cons_3} alt="Large image" className="w-100 rounded-3" />
                  </div>
                </div>
                
                {/* Display a single large photo */}
                <MDBCardImage src={enjuague} alt="Large image" className="w-100 rounded-3" />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }

  

  function Buen_cepillo() {
    return (
<MDBContainer className="py-5 h-100">
      <MDBRow className="justify-content-center align-items-center h-100">
        <MDBCol lg="10" xl="10">
          <MDBCard className="card-container h-100">
            <div className="rounded-top text-white d-flex flex-row justify-content-center align-items-center" style={{ backgroundColor: '#0281c9', height: '200px' }}>
              <div className="text-center">
                <MDBTypography tag="h5" style={{ fontSize: '30px' }}>1. Características de un buen cepillo: </MDBTypography>
              </div>
            </div>
            <MDBCardBody className="text-black p-4">
              <div className="mb-5">
                <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                  <video width="100%" height="auto" controls>
                    <source src={buen_cepillo} type="video/mp4" />
                    Tu navegador no admite la reproducción de videos.
                  </video>
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    );
  }

  function Tecnica_cepillo() {
    return (
<MDBContainer className="py-5 h-100">
      <MDBRow className="justify-content-center align-items-center h-100">
        <MDBCol lg="10" xl="10">
          <MDBCard className="card-container h-100">
            <div className="rounded-top text-white d-flex flex-row justify-content-center align-items-center" style={{ backgroundColor: '#0281c9', height: '200px' }}>
              <div className="text-center">
                <MDBTypography tag="h5" style={{ fontSize: '30px' }}>2. ¿Te sabes cepillar los dientes?: </MDBTypography>
              </div>
            </div>
            <MDBCardBody className="text-black p-4">
              <div className="mb-5">
                <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                  <video width="100%" height="auto" controls>
                    <source src={cepillado} type="video/mp4" />
                    Tu navegador no admite la reproducción de videos.
                  </video>
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    );
  }

  function Cuidado_cepillo() {
    return (
<MDBContainer className="py-5 h-100">
      <MDBRow className="justify-content-center align-items-center h-100">
        <MDBCol lg="10" xl="10">
          <MDBCard className="card-container h-100">
            <div className="rounded-top text-white d-flex flex-row justify-content-center align-items-center" style={{ backgroundColor: '#0281c9', height: '200px' }}>
              <div className="text-center">
                <MDBTypography tag="h5" style={{ fontSize: '30px' }}>3. Cuidado cepillo: </MDBTypography>
              </div>
            </div>
            <MDBCardBody className="text-black p-4">
              <div className="mb-5">
                <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                  <video width="100%" height="auto" controls>
                    <source src={cuidado_cepillo} type="video/mp4" />
                    Tu navegador no admite la reproducción de videos.
                  </video>
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    );
  }

  function Azucar() {
    return (
        <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="10" xl="10">
            <MDBCard className="card-container h-100">
              <div className="rounded-top text-white d-flex flex-row justify-content-center align-items-center" style={{ backgroundColor: '#0281c9', height: '200px' }}>
                <div className="text-center">
                  <MDBTypography tag="h5" style={{ fontSize: '30px' }}>1.Limita el consumo de azúcares y alimentos procesados: </MDBTypography>
                </div>
              </div>
            
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                  <MDBCardImage src={cons_4} alt="Large image" className="w-100 rounded-3" />
                  </div>
                </div>
                
                {/* Display a single large photo */}
                <MDBCardImage src={sugar} alt="Large image" className="w-100 rounded-3" />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }

  function Calcio() {
    return (
        <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="10" xl="10">
            <MDBCard className="card-container h-100">
              <div className="rounded-top text-white d-flex flex-row justify-content-center align-items-center" style={{ backgroundColor: '#0281c9', height: '200px' }}>
                <div className="text-center">
                  <MDBTypography tag="h5" style={{ fontSize: '30px' }}>2. Aumenta el consumo de alimentos ricos en calcio: </MDBTypography>
                </div>
              </div>
            
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                  <MDBCardImage src={cons_5} alt="Large image" className="w-100 rounded-3" />
                  </div>
                </div>
                
                {/* Display a single large photo */}
                <MDBCardImage src={calcio} alt="Large image" className="w-100 rounded-3" />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }

  function Bebidas() {
    return (
        <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="10" xl="10">
            <MDBCard className="card-container h-100">
              <div className="rounded-top text-white d-flex flex-row justify-content-center align-items-center" style={{ backgroundColor: '#0281c9', height: '200px' }}>
                <div className="text-center">
                  <MDBTypography tag="h5" style={{ fontSize: '30px' }}>3. Bebe agua y limita las bebidas azucaradas: </MDBTypography>
                </div>
              </div>
            
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                  <MDBCardImage src={cons_6} alt="Large image" className="w-100 rounded-3" />
                  </div>
                </div>
                
                {/* Display a single large photo */}
                <MDBCardImage src={water} alt="Large image" className="w-100 rounded-3" />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }

  function Emergencia() {
    return (
        <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="10" xl="10">
            <MDBCard className="card-container h-100">
              <div className="rounded-top text-white d-flex flex-row justify-content-center align-items-center" style={{ backgroundColor: '#0281c9', height: '200px' }}>
                <div className="text-center">
                  <MDBTypography tag="h5" style={{ fontSize: '30px' }}>1. Contacta a un dentista de emergencia de inmediato: </MDBTypography>
                </div>
              </div>
            
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                  <MDBCardImage src={cons_7} alt="Large image" className="w-100 rounded-3" />
                  </div>
                </div>
                
                {/* Display a single large photo */}
                <MDBCardImage src={emergencia} alt="Large image" className="w-100 rounded-3" />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
  
  function Sangrado() {
    return (
        <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="10" xl="10">
            <MDBCard className="card-container h-100">
              <div className="rounded-top text-white d-flex flex-row justify-content-center align-items-center" style={{ backgroundColor: '#0281c9', height: '200px' }}>
                <div className="text-center">
                  <MDBTypography tag="h5" style={{ fontSize: '30px' }}>2. Mantén la calma y controla el sangrado: </MDBTypography>
                </div>
              </div>
            
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                  <MDBCardImage src={cons_8} alt="Large image" className="w-100 rounded-3" />
                  </div>
                </div>
                
                {/* Display a single large photo */}
                <MDBCardImage src={sangrado} alt="Large image" className="w-100 rounded-3" />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }

  
  function Roto() {
    return (
        <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="10" xl="10">
            <MDBCard className="card-container h-100">
              <div className="rounded-top text-white d-flex flex-row justify-content-center align-items-center" style={{ backgroundColor: '#0281c9', height: '200px' }}>
                <div className="text-center">
                  <MDBTypography tag="h5" style={{ fontSize: '30px' }}>3. Preserva cualquier pieza dental perdida o dañada: </MDBTypography>
                </div>
              </div>
            
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                  <MDBCardImage src={cons_9} alt="Large image" className="w-100 rounded-3" />
                  </div>
                </div>
                
                {/* Display a single large photo */}
                <MDBCardImage src={roto} alt="Large image" className="w-100 rounded-3" />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }


export { Cepillado_dientes,Hilo_dental,Enjuague_bucal, Buen_cepillo, Tecnica_cepillo, Cuidado_cepillo, Azucar, Calcio, Bebidas, Emergencia, Sangrado, Roto};