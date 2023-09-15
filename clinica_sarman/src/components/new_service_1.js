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
import '../css/new_service.css';


function Blanqueamiento_dental() {
  return (
    <MDBContainer className="py-5 h-100">
      <MDBRow className="justify-content-center align-items-center h-100">
        <MDBCol lg="10" xl="10">
          <MDBCard className="card-container">
            <div className="rounded-top text-white d-flex flex-row justify-content-center align-items-center" style={{ backgroundColor: '#0281c9', height: '200px' }}>
              <div className="text-center">
                <MDBTypography tag="h5" style={{ fontSize: '30px' }}>Blanqueamiento dental</MDBTypography>
                <MDBCardText style={{ fontSize: '20px' }}>Estético</MDBCardText>
              </div>
            </div>
          
            <MDBCardBody className="text-black p-4">
              <div className="mb-5">
                <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                  <MDBCardText  tag="h2" style={{ fontSize: '20px', textAlign: "justify",  height: '100px', overflow: 'hidden' }}>
                    Es un tratamiento estético el cual busca dar un aspecto más blanco a los dientes. 
                    Para este se aplica un gel el cual reacciona con las zonas más oscuras del diente, 
                    dando así al diente un color más claro.
                  </MDBCardText>
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
          <MDBCard className="card-container">
            <div className="rounded-top text-white d-flex flex-row justify-content-center align-items-center" style={{ backgroundColor: '#0281c9', height: '200px' }}>
              <div className="text-center">
                <MDBTypography tag="h5" style={{ fontSize: '30px' }}>Restauraciones dentales</MDBTypography>
                <MDBCardText style={{ fontSize: '20px' }}>Estético</MDBCardText>
              </div>
            </div>
          
            <MDBCardBody className="text-black p-4">
              <div className="mb-5">
                <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                  <MDBCardText  tag="h2" style={{ fontSize: '20px', textAlign: "justify",  height: '100px', overflow: 'hidden' }}>
                  Es una reconstrucción parcial o total de un diente debido a la destrucción y/o desgaste del diente.
                 En este tratamiento se intenta recuperar en lo posible la forma original del diente además de su 
                 funcionalidad mediante la utilización de materiales artificiales.
                  </MDBCardText>
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
          <MDBCard className="card-container">
            <div className="rounded-top text-white d-flex flex-row justify-content-center align-items-center" style={{ backgroundColor: '#0281c9', height: '200px' }}>
              <div className="text-center">
                <MDBTypography tag="h5" style={{ fontSize: '30px' }}>Coronas dentales</MDBTypography>
                <MDBCardText style={{ fontSize: '20px' }}>Estético</MDBCardText>
              </div>
            </div>
          
            <MDBCardBody className="text-black p-4">
              <div className="mb-5">
                <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                  <MDBCardText  tag="h2" style={{ fontSize: '20px', textAlign: "justify",  height: '100px', overflow: 'hidden' }}>
                  Es una prótesis dental, la cual se ubica sobre algún diente dañado. Esta busca proteger el diente 
                al cubrirlo por completo. Imita de una manera exacta al diente original al hacerse a medida del 
                cliente, por lo que cada corona es única.
                  </MDBCardText>
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
          <MDBCard className="card-container">
            <div className="rounded-top text-white d-flex flex-row justify-content-center align-items-center" style={{ backgroundColor: '#0281c9', height: '200px' }}>
              <div className="text-center">
                <MDBTypography tag="h5" style={{ fontSize: '30px' }}>Pediatría</MDBTypography>
                <MDBCardText style={{ fontSize: '20px' }}>Estético</MDBCardText>
              </div>
            </div>
          
            <MDBCardBody className="text-black p-4">
              <div className="mb-5">
                <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                  <MDBCardText  tag="h2" style={{ fontSize: '20px', textAlign: "justify",  height: '100px', overflow: 'hidden'}}>
                  Es una rama de la odontología que se especializa en la atención dental de niños y adolescentes desde la infancia hasta la adolescencia.
                   Los odontólogos pediátricos se dedican a proporcionar cuidados dentales específicamente adaptados a las necesidades y etapas de desarrollo de los pacientes jóvenes
                  </MDBCardText>
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
          <MDBCard className="card-container">
            <div className="rounded-top text-white d-flex flex-row justify-content-center align-items-center" style={{ backgroundColor: '#0281c9', height: '200px' }}>
              <div className="text-center">
                <MDBTypography tag="h5" style={{ fontSize: '30px' }}>Tratamiento de conducto</MDBTypography>
                <MDBCardText style={{ fontSize: '20px' }}>Estético</MDBCardText>
              </div>
            </div>
          
            <MDBCardBody className="text-black p-4">
              <div className="mb-5">
                <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                  <MDBCardText  tag="h2" style={{ fontSize: '20px', textAlign: "justify",  height: '100px', overflow: 'hidden' }}>
                  Este se lleva a cabo cuando se presenta una infección dental que afectara negativamente al diente. 
                En este procedimiento se remueve tejido muerto y/o infectado del interior del diente con el motivo 
                de salvarlo.
                  </MDBCardText>
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
          <MDBCard className="card-container">
            <div className="rounded-top text-white d-flex flex-row justify-content-center align-items-center" style={{ backgroundColor: '#0281c9', height: '200px' }}>
              <div className="text-center">
                <MDBTypography tag="h5" style={{ fontSize: '30px' }}>Radiografía</MDBTypography>
                <MDBCardText style={{ fontSize: '20px' }}>Estético</MDBCardText>
              </div>
            </div>
          
            <MDBCardBody className="text-black p-4">
              <div className="mb-5">
                <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                  <MDBCardText  tag="h2" style={{ fontSize: '20px', textAlign: "justify",  height: '100px', overflow: 'hidden' }}>
                  Es una imagen médica que se utiliza en odontología para diagnosticar y evaluar la salud bucal de un paciente. Son una herramienta valiosa, 
                  ya que proporcionan información detallada sobre los dientes, las encías, las raíces dentales y las estructuras óseas circundantes.
                  </MDBCardText>
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
          <MDBCard className="card-container">
            <div className="rounded-top text-white d-flex flex-row justify-content-center align-items-center" style={{ backgroundColor: '#0281c9', height: '200px' }}>
              <div className="text-center">
                <MDBTypography tag="h5" style={{ fontSize: '30px' }}>Extracciones</MDBTypography>
                <MDBCardText style={{ fontSize: '20px' }}>Estético</MDBCardText>
              </div>
            </div>
          
            <MDBCardBody className="text-black p-4">
              <div className="mb-5">
                <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                  <MDBCardText  tag="h2" style={{ fontSize: '20px', textAlign: "justify",  height: '100px', overflow: 'hidden' }}>
                  Usualmente conocido como sacar el diente. Este procedimiento se suele llevar a cabo por la necesidad 
                de otros tratamientos o por la incapacidad de poder salvar el diente. Este suele llevarse a cabo por 
                un dentista general.
                  </MDBCardText>
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
          <MDBCard className="card-container">
            <div className="rounded-top text-white d-flex flex-row justify-content-center align-items-center" style={{ backgroundColor: '#0281c9', height: '200px' }}>
              <div className="text-center">
                <MDBTypography tag="h5" style={{ fontSize: '30px' }}>Prótesis</MDBTypography>
                <MDBCardText style={{ fontSize: '20px' }}>Estético</MDBCardText>
              </div>
            </div>
          
            <MDBCardBody className="text-black p-4">
              <div className="mb-5">
                <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                  <MDBCardText  tag="h2" style={{ fontSize: '20px', textAlign: "justify",  height: '100px', overflow: 'hidden' }}>
                  Tratamiento por el cual se busca que el paciente pueda volver a tener un esquema normal de su 
                dentadura, generando que vuelva a masticar y llevar una vida dental normal. En este caso se inserta 
                un dispositivo dental artificial el cual reemplaza algún diente perdido o dañado.
                  </MDBCardText>
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
          <MDBCard className="card-container">
            <div className="rounded-top text-white d-flex flex-row justify-content-center align-items-center" style={{ backgroundColor: '#0281c9', height: '200px' }}>
              <div className="text-center">
                <MDBTypography tag="h5" style={{ fontSize: '30px' }}>Limpiezas dentales</MDBTypography>
                <MDBCardText style={{ fontSize: '20px' }}>Estético</MDBCardText>
              </div>
            </div>
          
            <MDBCardBody className="text-black p-4">
              <div className="mb-5">
                <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                  <MDBCardText  tag="h2" style={{ fontSize: '20px', textAlign: "justify",  height: '100px', overflow: 'hidden' }}>
                  En este tratamiento se elimina la capa y sarro que se acumula en el diente al pasar el tiempo. La 
                capa es una sustancia viscosa con bacterias y restos de comida que puede dañar los dientes. Al mismo
                 tiempo al sarro al acumularse en encía puede llevar a contraer diversas infecciones por lo que debe
                  ser un procedimiento regular.
                  </MDBCardText>
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
          <MDBCard className="card-container">
            <div className="rounded-top text-white d-flex flex-row justify-content-center align-items-center" style={{ backgroundColor: '#0281c9', height: '200px' }}>
              <div className="text-center">
                <MDBTypography tag="h5" style={{ fontSize: '30px' }}>Periodoncia</MDBTypography>
                <MDBCardText style={{ fontSize: '20px' }}>Estético</MDBCardText>
              </div>
            </div>
          
            <MDBCardBody className="text-black p-4">
              <div className="mb-5">
                <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                  <MDBCardText  tag="h2" style={{ fontSize: '20px', textAlign: "justify",  height: '100px', overflow: 'hidden' }}>
                  Serie de tratamientos que se especializan en preservar y restaurar una buena salud dental. Esta 
                se centra en las encías al ser una parte demasiado susceptible a diversas afecciones.
                  </MDBCardText>
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
          <MDBCard className="card-container">
            <div className="rounded-top text-white d-flex flex-row justify-content-center align-items-center" style={{ backgroundColor: '#0281c9', height: '200px' }}>
              <div className="text-center">
                <MDBTypography tag="h5" style={{ fontSize: '30px' }}>Bichectomia</MDBTypography>
                <MDBCardText style={{ fontSize: '20px' }}>Estético</MDBCardText>
              </div>
            </div>
          
            <MDBCardBody className="text-black p-4">
              <div className="mb-5">
                <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                  <MDBCardText  tag="h2" style={{ fontSize: '20px', textAlign: "justify",  height: '100px', overflow: 'hidden' }}>
                  Operación en la cual se extrae las bolsas de Bichat, la cual son una seria de bolas de grasa que 
                están ubicadas debajo de las mejillas. Con esta operación se busca mejorar el aspecto del rostro. 
                Esta no deja cicatrices al realizarse por la parte interior de la boca además de ser ambulatoria.
                  </MDBCardText>
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
          <MDBCard className="card-container">
            <div className="rounded-top text-white d-flex flex-row justify-content-center align-items-center" style={{ backgroundColor: '#0281c9', height: '200px' }}>
              <div className="text-center">
                <MDBTypography tag="h5" style={{ fontSize: '30px' }}>Toxina Botulínica</MDBTypography>
                <MDBCardText style={{ fontSize: '20px' }}>Estético</MDBCardText>
              </div>
            </div>
          
            <MDBCardBody className="text-black p-4">
              <div className="mb-5">
                <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                  <MDBCardText  tag="h2" style={{ fontSize: '20px', textAlign: "justify",  height: '100px', overflow: 'hidden' }}>
                  Se utiliza en medicina y en procedimientos estéticos para tratar una variedad de afecciones y trastornos, así como para reducir
                   temporalmente la apariencia de las arrugas faciales. Los productos comerciales más conocidos que contienen toxina botulínica incluyen Botox, Dysport y Xeomin
                  </MDBCardText>
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