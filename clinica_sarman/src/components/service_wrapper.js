import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import{ Blanqueamiento_dental, Restauraciones_dentales, Coronas_dentales, Pediatria, Tratamiento_de_conducto, Radiografia,
  Extracciones, Protesis, Limpiezas_dentales, Periodoncia, Bichectomia, Toxina_botulinica} from "../components/new_service_1";

function Service_wrapper_1() {
        return (
          <div>
          <Row xs={1} md={2} lg={3} className="g-4">
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
          </div>
        );
}
function Service_wrapper_2() {
  return (
    <div>
    <Row xs={1} md={2} lg={3} className="g-4">
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
    </div>
  );
}
function Service_wrapper_3() {
  return (
    <div>
    <Row xs={1} md={2} lg={3} className="g-4">
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
    </div>
  );
}
function Service_wrapper_4() {
  return (
    <div>
    <Row xs={1} md={2} lg={3} className="g-4">
      <Col>
        <Periodoncia/>
      </Col>
      <Col>
        <Bichectomia/>
      </Col>
      <Col>
      <Toxina_botulinica/>
      </Col>
    </Row>
    </div>
  );
}




export { Service_wrapper_1, Service_wrapper_2, Service_wrapper_3, Service_wrapper_4};