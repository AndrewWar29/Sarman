import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import{ Blanqueamiento_dental, Restauraciones_dentales, Coronas_dentales, Pediatria, Tratamiento_de_conducto, Radiografia,
  Extracciones, Protesis, Limpiezas_dentales, Periodoncia, Bichectomia } from "../components/new_service_1";

function Service_wrapper_1() {
        return (
          <Row xs={1} md={3} className="g-1"> {/* Use 'md={3}' to show 3 columns on medium screens */}
            <Col>
              <Blanqueamiento_dental/>
            </Col>
            <Col>
              <Restauraciones_dentales/>
            </Col>
            <Col>
              <Coronas_dentales/> {/* Replace with your third component */}
            </Col>
          </Row>
        );
}
function Service_wrapper_2() {
  return (
    <Row xs={1} md={3} className="g-1"> {/* Use 'md={3}' to show 3 columns on medium screens */}
      <Col>
        <Pediatria/>
      </Col>
      <Col>
        <Tratamiento_de_conducto/>
      </Col>
      <Col>
        <Radiografia/> {/* Replace with your third component */}
      </Col>
    </Row>
  );
}
function Service_wrapper_3() {
  return (
    <Row xs={1} md={3} className="g-1"> {/* Use 'md={3}' to show 3 columns on medium screens */}
      <Col>
        <Extracciones/>
      </Col>
      <Col>
        <Protesis/>
      </Col>
      <Col>
        <Limpiezas_dentales/> {/* Replace with your third component */}
      </Col>
    </Row>
  );
}
function Service_wrapper_4() {
  return (
    <Row xs={1} md={3} className="g-1"> {/* Use 'md={3}' to show 3 columns on medium screens */}
      <Col>
        <Periodoncia/>
      </Col>
      <Col>
        <Bichectomia/>
      </Col>
      <Col>
      </Col>
    </Row>
  );
}




export { Service_wrapper_1, Service_wrapper_2, Service_wrapper_3, Service_wrapper_4};