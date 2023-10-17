import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import foto_1 from '../images/dentista.jpg';
import blanqueamiento from '../images/blanqueamiento.jpg';
import limpieza_dentales from '../images/limpieza_dental.jpg';
import restauracion from '../images/restauracion.png';
import bichetomia from '../images/bichetomia.png';
import radiografia from '../images/radiografia.jpg';
import pediatria from '../images/pediatria.png';
import corona from '../images/corona.png';
import conducto from '../images/conducto.png';
import protesis from '../images/protesis.png';
import periodoncia from '../images/periodoncia.png';
import extraccion from '../images/extraccion.jpg';
import toxina from '../images/toxina.png';
import text_blanq from '../images/text_blanq.png';
import text_rest from '../images/text_rest.png';
import text_coro from '../images/text_coro.png';
import text_pedia from '../images/text_pedia.png';
import text_conduc from '../images/text_conduc.png';
import text_radio from '../images/text_radio.png';
import text_extr from '../images/text_extr.png';
import text_prot from '../images/text_prot.png';
import text_limp from '../images/text_limp.png';
import text_biche from '../images/text_biche.png';
import text_toxi from '../images/text_toxi.png';
import text_perio from '../images/text_perio.png';
import '../css/new_service.css';

const cardStyle = {
  minWidth: '320px', // Ancho mínimo para evitar que los componentes sean demasiado delgados
  maxWidth: '500px', // Ancho máximo para controlar el tamaño
  margin: '20px', // Margen entre los componentes (ajusta según tus necesidades)
};


function Blanqueamiento_dental() {
  return (
    <MDBContainer className="py-5 h-100">
      <MDBRow className="justify-content-center align-items-center h-100">
        <MDBCol lg="10" xl="10">
          <MDBCard className="card-container" style={cardStyle}>
            <div className="rounded-top text-white d-flex flex-row justify-content-center align-items-center" style={{ backgroundColor: '#0281c9', height: '200px' }}>
              <div className="text-center">
                <MDBTypography tag="h5" style={{ fontSize: '30px' }}>Blanqueamiento dental</MDBTypography>
                <MDBCardText style={{ fontSize: '20px' }}></MDBCardText>
              </div>
            </div>
          
            <MDBCardBody className="text-black p-4">
              <div className="mb-5">
                <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                <MDBCardImage src={text_blanq} alt="Large image" className="w-100 rounded-3" />
                </div>
              </div>
              
              {/* Display a single large photo */}
              <MDBCardImage src={blanqueamiento} alt="Large image" className="w-100 rounded-3" />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

function Restauraciones_dentales() {
  return (
    <MDBContainer className="py-5 h-100">
      <MDBRow className="justify-content-center align-items-center h-100">
        <MDBCol lg="10" xl="10">
          <MDBCard className="card-container" style={cardStyle}>
            <div className="rounded-top text-white d-flex flex-row justify-content-center align-items-center" style={{ backgroundColor: '#0281c9', height: '200px' }}>
              <div className="text-center">
                <MDBTypography tag="h5" style={{ fontSize: '30px' }}>Restauraciones dentales</MDBTypography>
                <MDBCardText style={{ fontSize: '20px' }}></MDBCardText>
              </div>
            </div>
          
            <MDBCardBody className="text-black p-4">
              <div className="mb-5">
                <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                <MDBCardImage src={text_rest} alt="Large image" className="w-100 rounded-3" />
                </div>
              </div>
              
              {/* Display a single large photo */}
              <MDBCardImage src={restauracion} alt="Large image" className="w-100 rounded-3" />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

function Coronas_dentales() {
  return (
    <MDBContainer className="py-5 h-100">
      <MDBRow className="justify-content-center align-items-center h-100">
        <MDBCol lg="10" xl="10">
          <MDBCard className="card-container" style={cardStyle}>
            <div className="rounded-top text-white d-flex flex-row justify-content-center align-items-center" style={{ backgroundColor: '#0281c9', height: '200px' }}>
              <div className="text-center">
                <MDBTypography tag="h5" style={{ fontSize: '30px' }}>Coronas dentales</MDBTypography>
                <MDBCardText style={{ fontSize: '20px' }}></MDBCardText>
              </div>
            </div>
          
            <MDBCardBody className="text-black p-4">
              <div className="mb-5">
                <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                <MDBCardImage src={text_coro} alt="Large image" className="w-100 rounded-3" />
                </div>
              </div>
              
              {/* Display a single large photo */}
              <MDBCardImage src={corona} alt="Large image" className="w-100 rounded-3" />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

function Pediatria() {
  return (
    <MDBContainer className="py-5 h-100">
      <MDBRow className="justify-content-center align-items-center h-100">
        <MDBCol lg="10" xl="10">
        <MDBCard className="card-container" style={cardStyle}>
            <div className="rounded-top text-white d-flex flex-row justify-content-center align-items-center" style={{ backgroundColor: '#0281c9', height: '200px' }}>
              <div className="text-center">
                <MDBTypography tag="h5" style={{ fontSize: '30px' }}>Pediatría</MDBTypography>
                <MDBCardText style={{ fontSize: '20px' }}></MDBCardText>
              </div>
            </div>
          
            <MDBCardBody className="text-black p-4">
              <div className="mb-5">
                <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                <MDBCardImage src={text_pedia} alt="Large image" className="w-100 rounded-3" />
                </div>
              </div>
              
              {/* Display a single large photo */}
              <MDBCardImage src={pediatria} alt="Large image" className="w-100 rounded-3" />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

function Tratamiento_de_conducto() {
  return (
    <MDBContainer className="py-5 h-100">
      <MDBRow className="justify-content-center align-items-center h-100">
        <MDBCol lg="10" xl="10">
        <MDBCard className="card-container" style={cardStyle}>
            <div className="rounded-top text-white d-flex flex-row justify-content-center align-items-center" style={{ backgroundColor: '#0281c9', height: '200px' }}>
              <div className="text-center">
                <MDBTypography tag="h5" style={{ fontSize: '30px' }}>Tratamiento de conducto</MDBTypography>
                <MDBCardText style={{ fontSize: '20px' }}></MDBCardText>
              </div>
            </div>
          
            <MDBCardBody className="text-black p-4">
              <div className="mb-5">
                <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                <MDBCardImage src={text_conduc} alt="Large image" className="w-100 rounded-3" />
                </div>
              </div>
              
              {/* Display a single large photo */}
              <MDBCardImage src={conducto} alt="Large image" className="w-100 rounded-3" />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

function Radiografia() {
  return (
    <MDBContainer className="py-5 h-100">
      <MDBRow className="justify-content-center align-items-center h-100">
        <MDBCol lg="10" xl="10">
          <MDBCard className="card-container" style={cardStyle}>
            <div className="rounded-top text-white d-flex flex-row justify-content-center align-items-center" style={{ backgroundColor: '#0281c9', height: '200px' }}>
              <div className="text-center">
                <MDBTypography tag="h5" style={{ fontSize: '30px' }}>Radiografía</MDBTypography>
                <MDBCardText style={{ fontSize: '20px' }}>Bitewing y retroalveolar</MDBCardText> {/* Agrega el subtítulo aquí */}
              </div>
            </div>
          
            <MDBCardBody className="text-black p-4">
              <div className="mb-5">
                <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                  <MDBCardImage src={text_radio} alt="Large image" className="w-100 rounded-3" />
                </div>
              </div>
              
              {/* Display a single large photo */}
              <MDBCardImage src={radiografia} alt="Large image" className="w-100 rounded-3" />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}


function Extracciones() {
  return (
    <MDBContainer className="py-5 h-100">
      <MDBRow className="justify-content-center align-items-center h-100">
        <MDBCol lg="10" xl="10">
        <MDBCard className="card-container" style={cardStyle}>
            <div className="rounded-top text-white d-flex flex-row justify-content-center align-items-center" style={{ backgroundColor: '#0281c9', height: '200px' }}>
              <div className="text-center">
                <MDBTypography tag="h5" style={{ fontSize: '30px' }}>Extracciones</MDBTypography>
                <MDBCardText style={{ fontSize: '20px' }}></MDBCardText>
              </div>
            </div>
          
            <MDBCardBody className="text-black p-4">
              <div className="mb-5">
                <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                <MDBCardImage src={text_extr} alt="Large image" className="w-100 rounded-3" />
                </div>
              </div>
              
              {/* Display a single large photo */}
              <MDBCardImage src={extraccion} alt="Large image" className="w-100 rounded-3" />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

function Protesis() {
  return (
    <MDBContainer className="py-5 h-100">
      <MDBRow className="justify-content-center align-items-center h-100">
        <MDBCol lg="10" xl="10">
        <MDBCard className="card-container" style={cardStyle}>
            <div className="rounded-top text-white d-flex flex-row justify-content-center align-items-center" style={{ backgroundColor: '#0281c9', height: '200px' }}>
              <div className="text-center">
                <MDBTypography tag="h5" style={{ fontSize: '30px' }}>Prótesis</MDBTypography>
                <MDBCardText style={{ fontSize: '20px' }}></MDBCardText>
              </div>
            </div>
          
            <MDBCardBody className="text-black p-4">
              <div className="mb-5">
                <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                <MDBCardImage src={text_prot} alt="Large image" className="w-100 rounded-3" />
                </div>
              </div>
              
              {/* Display a single large photo */}
              <MDBCardImage src={protesis} alt="Large image" className="w-100 rounded-3" />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

function Limpiezas_dentales() {
  return (
    <MDBContainer className="py-5 h-100">
      <MDBRow className="justify-content-center align-items-center h-100">
        <MDBCol lg="10" xl="10">
        <MDBCard className="card-container" style={cardStyle}>
            <div className="rounded-top text-white d-flex flex-row justify-content-center align-items-center" style={{ backgroundColor: '#0281c9', height: '200px' }}>
              <div className="text-center">
                <MDBTypography tag="h5" style={{ fontSize: '30px' }}>Limpiezas dentales</MDBTypography>
                <MDBCardText style={{ fontSize: '20px' }}></MDBCardText>
              </div>
            </div>
          
            <MDBCardBody className="text-black p-4">
              <div className="mb-5">
                <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                <MDBCardImage src={text_limp} alt="Large image" className="w-100 rounded-3" />
                </div>
              </div>
              
              {/* Display a single large photo */}
              <MDBCardImage src={limpieza_dentales} alt="Large image" className="w-100 rounded-3" />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

function Periodoncia() {
  return (
    <MDBContainer className="py-5 h-100">
      <MDBRow className="justify-content-center align-items-center h-100">
        <MDBCol lg="10" xl="10">
        <MDBCard className="card-container" style={cardStyle}>
            <div className="rounded-top text-white d-flex flex-row justify-content-center align-items-center" style={{ backgroundColor: '#0281c9', height: '200px' }}>
              <div className="text-center">
                <MDBTypography tag="h5" style={{ fontSize: '30px' }}>Periodoncia</MDBTypography>
                <MDBCardText style={{ fontSize: '20px' }}></MDBCardText>
              </div>
            </div>
          
            <MDBCardBody className="text-black p-4">
              <div className="mb-5">
                <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                <MDBCardImage src={text_perio} alt="Large image" className="w-100 rounded-3" />
                </div>
              </div>
              
              {/* Display a single large photo */}
              <MDBCardImage src={periodoncia} alt="Large image" className="w-100 rounded-3" />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

function Bichectomia() {
  return (
    <MDBContainer className="py-5 h-100">
      <MDBRow className="justify-content-center align-items-center h-100">
        <MDBCol lg="10" xl="10">
        <MDBCard className="card-container" style={cardStyle}>
            <div className="rounded-top text-white d-flex flex-row justify-content-center align-items-center" style={{ backgroundColor: '#0281c9', height: '200px' }}>
              <div className="text-center">
                <MDBTypography tag="h5" style={{ fontSize: '30px' }}>Bichectomia</MDBTypography>
                <MDBCardText style={{ fontSize: '20px' }}></MDBCardText>
              </div>
            </div>
          
            <MDBCardBody className="text-black p-4">
              <div className="mb-5">
                <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                <MDBCardImage src={text_biche} alt="Large image" className="w-100 rounded-3" />
                </div>
              </div>
              
              {/* Display a single large photo */}
              <MDBCardImage src={bichetomia} alt="Large image" className="w-100 rounded-3" />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

function Toxina_botulinica() {
  return (
    <MDBContainer className="py-5 h-100">
      <MDBRow className="justify-content-center align-items-center h-100">
        <MDBCol lg="10" xl="10">
        <MDBCard className="card-container" style={cardStyle}>
            <div className="rounded-top text-white d-flex flex-row justify-content-center align-items-center" style={{ backgroundColor: '#0281c9', height: '200px' }}>
              <div className="text-center">
                <MDBTypography tag="h5" style={{ fontSize: '30px' }}>Toxina Botulínica</MDBTypography>
                <MDBCardText style={{ fontSize: '20px' }}></MDBCardText>
              </div>
            </div>
          
            <MDBCardBody className="text-black p-4">
              <div className="mb-5">
                <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                <MDBCardImage src={text_toxi} alt="Large image" className="w-100 rounded-3" />
                </div>
              </div>
              
              {/* Display a single large photo */}
              <MDBCardImage src={toxina} alt="Large image" className="w-100 rounded-3" />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}


export { Blanqueamiento_dental, Restauraciones_dentales, Coronas_dentales, Pediatria, Tratamiento_de_conducto, Radiografia,
   Extracciones, Protesis, Limpiezas_dentales, Periodoncia, Bichectomia, Toxina_botulinica};