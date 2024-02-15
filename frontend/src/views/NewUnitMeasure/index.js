
// reactstrap components
import Header from "components/Headers/Header";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";

const NewMeasurement = () => {
  return (
    <>
      <Header />
      <Container className="mt--5 vh-100 blue-background" fluid>
        <Row className="justify-content-center">
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
              <Row className="align-items-center">
                  <Col xs="8">
                    <Link to="/admin/measurements">Voltar</Link>
                  </Col>
                </Row>
                <Row className="align-items-center justify-content-center">
                  <Col xs="13">
                    <h3 className="mb-0">Cadastro de Unidade de Medida</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Código
                          </label>
                          <Input
                            className="form-control-alternative"
                            placeholder="Digite o código da unidade de medida"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                      <FormGroup>
                          <label
                            className="form-control-label"
                          >
                            Descrição
                          </label>
                          <Input
                            className="form-control-alternative"
                            placeholder="Digite a descrição da Unidade de Medida"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NewMeasurement;
