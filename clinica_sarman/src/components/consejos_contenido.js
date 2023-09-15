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
import '../css/new_service.css';


function Cepillado_dientes() {
  return (
    <MDBContainer className="py-5 h-100">
      <MDBRow className="justify-content-center align-items-center h-100">
        <MDBCol lg="10" xl="10">
          <MDBCard className="card-container">
            <div className="rounded-top text-white d-flex flex-row justify-content-center align-items-center" style={{ backgroundColor: '#0281c9', height: '200px' }}>
              <div className="text-center">
                <MDBTypography tag="h5" style={{ fontSize: '30px' }}>1. Cepíllate los dientes al menos dos veces al día: </MDBTypography>
              </div>
            </div>
          
            <MDBCardBody className="text-black p-4">
              <div className="mb-5">
                <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                  <MDBCardText  tag="h2" style={{ fontSize: '20px', textAlign: "justify",  height: '100px', overflow: 'hidden' }}>
                  Para mantener una buena higiene bucal, cepíllate los dientes dos veces al día con un cepillo de cerdas 
                  suaves y pasta dental con flúor. Asegúrate de cepillar todas las superficies de tus dientes para prevenir
                   caries y problemas de encías.
                  </MDBCardText>
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
            <MDBCard className="card-container">
              <div className="rounded-top text-white d-flex flex-row justify-content-center align-items-center" style={{ backgroundColor: '#0281c9', height: '200px' }}>
                <div className="text-center">
                  <MDBTypography tag="h5" style={{ fontSize: '30px' }}>2.Utiliza hilo dental diariamente para limpiar entre los dientes: </MDBTypography>
                </div>
              </div>
            
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                    <MDBCardText  tag="h2" style={{ fontSize: '20px', textAlign: "justify",  height: '100px', overflow: 'hidden' }}>
                    El uso diario de hilo dental es esencial para eliminar 
                    restos de alimentos y placa bacteriana que se acumulan entre los dientes y a lo largo de las encías, reduciendo el riesgo de caries
                     interdentales y enfermedades de las encías.
                    </MDBCardText>
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
            <MDBCard className="card-container">
              <div className="rounded-top text-white d-flex flex-row justify-content-center align-items-center" style={{ backgroundColor: '#0281c9', height: '200px' }}>
                <div className="text-center">
                  <MDBTypography tag="h5" style={{ fontSize: '30px' }}>3.Enjuaga con enjuague bucal después del cepillado: </MDBTypography>
                </div>
              </div>
            
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                    <MDBCardText  tag="h2" style={{ fontSize: '20px', textAlign: "justify",  height: '100px', overflow: 'hidden' }}>
                    Complementa tu rutina de cuidado bucal con un enjuague bucal adecuado después del cepillado y el uso del hilo dental. 
                    Busca uno con flúor para fortalecer el esmalte dental y ayudar a mantener un aliento fresco, aunque recuerda que
                     el enjuague no debe reemplazar el cepillado y el uso del hilo dental.
                    </MDBCardText>
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
          <MDBCard className="card-container">
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
          <MDBCard className="card-container">
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
          <MDBCard className="card-container">
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
            <MDBCard className="card-container">
              <div className="rounded-top text-white d-flex flex-row justify-content-center align-items-center" style={{ backgroundColor: '#0281c9', height: '200px' }}>
                <div className="text-center">
                  <MDBTypography tag="h5" style={{ fontSize: '30px' }}>1.Limita el consumo de azúcares y alimentos procesados: </MDBTypography>
                </div>
              </div>
            
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                    <MDBCardText  tag="h2" style={{ fontSize: '20px', textAlign: "justify",  height: '100px', overflow: 'hidden' }}>
                    Reducir la ingesta de azúcares y alimentos altamente procesados es fundamental para prevenir la formación de caries dentales. Los azúcares alimentan
                     las bacterias en la boca que producen ácidos que dañan el esmalte dental. Opta por alimentos bajos en azúcares y elige opciones naturales, como frutas y verduras, en lugar de productos altamente 
                     procesados y azucarados.
                    </MDBCardText>
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
            <MDBCard className="card-container">
              <div className="rounded-top text-white d-flex flex-row justify-content-center align-items-center" style={{ backgroundColor: '#0281c9', height: '200px' }}>
                <div className="text-center">
                  <MDBTypography tag="h5" style={{ fontSize: '30px' }}>2. Aumenta el consumo de alimentos ricos en calcio: </MDBTypography>
                </div>
              </div>
            
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                    <MDBCardText  tag="h2" style={{ fontSize: '20px', textAlign: "justify",  height: '100px', overflow: 'hidden' }}>
                    El calcio es esencial para mantener dientes y encías fuertes. Incorpora alimentos ricos en calcio en tu dieta,
                     como productos lácteos bajos en grasa, verduras de hojas verdes, almendras y pescado enlatado con huesos comestibles, como el salmón y las sardinas.
                    </MDBCardText>
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
            <MDBCard className="card-container">
              <div className="rounded-top text-white d-flex flex-row justify-content-center align-items-center" style={{ backgroundColor: '#0281c9', height: '200px' }}>
                <div className="text-center">
                  <MDBTypography tag="h5" style={{ fontSize: '30px' }}>3. Bebe agua y limita las bebidas azucaradas: </MDBTypography>
                </div>
              </div>
            
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                    <MDBCardText  tag="h2" style={{ fontSize: '20px', textAlign: "justify",  height: '100px', overflow: 'hidden' }}>
                    El agua es la mejor bebida para tu salud dental. Ayuda a mantener la boca hidratada y enjuaga los restos de comida y ácidos dañinos. Evita 
                    las bebidas azucaradas, como refrescos y jugos de frutas, ya que pueden contribuir a la formación de caries. Si consumes bebidas azucaradas ocasionalmente,
                     utiliza una pajita para reducir el contacto con tus dientes.
                    </MDBCardText>
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
            <MDBCard className="card-container">
              <div className="rounded-top text-white d-flex flex-row justify-content-center align-items-center" style={{ backgroundColor: '#0281c9', height: '200px' }}>
                <div className="text-center">
                  <MDBTypography tag="h5" style={{ fontSize: '30px' }}>1. Contacta a un dentista de emergencia de inmediato: </MDBTypography>
                </div>
              </div>
            
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                    <MDBCardText  tag="h2" style={{ fontSize: '20px', textAlign: "justify",  height: '100px', overflow: 'hidden' }}>
                    Si experimentas una emergencia dental, como un diente roto, una lesión en la boca o un dolor intenso, es fundamental comunicarte con un dentista de emergencia
                     lo antes posible. Busca atención dental urgente para evaluar y tratar adecuadamente el problema. Los dentistas de emergencia están preparados para manejar situaciones
                      críticas y proporcionar el tratamiento necesario.
                    </MDBCardText>
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
            <MDBCard className="card-container">
              <div className="rounded-top text-white d-flex flex-row justify-content-center align-items-center" style={{ backgroundColor: '#0281c9', height: '200px' }}>
                <div className="text-center">
                  <MDBTypography tag="h5" style={{ fontSize: '30px' }}>2. Mantén la calma y controla el sangrado: </MDBTypography>
                </div>
              </div>
            
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                    <MDBCardText  tag="h2" style={{ fontSize: '20px', textAlign: "justify",  height: '100px', overflow: 'hidden' }}>
                    En caso de un traumatismo dental que cause sangrado, intenta mantener la calma. Enjuaga suavemente la boca con agua tibia para eliminar la sangre 
                    y evaluar la lesión. Si el sangrado es intenso y no se detiene después de unos minutos de presión con una gasa estéril o un pañuelo limpio, busca 
                    ayuda médica de emergencia o un dentista de inmediato.
                    </MDBCardText>
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
            <MDBCard className="card-container">
              <div className="rounded-top text-white d-flex flex-row justify-content-center align-items-center" style={{ backgroundColor: '#0281c9', height: '200px' }}>
                <div className="text-center">
                  <MDBTypography tag="h5" style={{ fontSize: '30px' }}>3. Preserva cualquier pieza dental perdida o dañada: </MDBTypography>
                </div>
              </div>
            
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                    <MDBCardText  tag="h2" style={{ fontSize: '20px', textAlign: "justify",  height: '100px', overflow: 'hidden' }}>
                    Si has perdido un diente o tienes una pieza dental rota, intenta preservarla. Lava la pieza dental con agua tibia y, si es posible,
                     intenta colocarla nuevamente en su lugar con cuidado. Si no puedes hacerlo, coloca la pieza dental en un recipiente con leche o saliva,
                      y lleva todo el material dental dañado contigo al dentista de emergencia. Cuanto más rápido tomes medidas, mayores serán las posibilidades de salvar el diente.
                    </MDBCardText>
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