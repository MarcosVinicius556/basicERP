
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

const NewEmployee = () => {
  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row className="justify-content-center">
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
              <Row className="align-items-center">
                  <Col xs="8">
                    <Link to="/admin/employees">Voltar</Link>
                  </Col>
                </Row>
                <Row className="align-items-center justify-content-center">
                  <Col xs="13">
                    <h3 className="mb-0">Cadastro de Funcionário </h3>
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
                            Razão Social
                          </label>
                          <Input
                            className="form-control-alternative"
                            placeholder="Digite o nome da empresa"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                      <FormGroup>
                          <label
                            className="form-control-label"
                          >
                            CNPJ
                          </label>
                          <Input
                            className="form-control-alternative"
                            placeholder="Digite o CNPJ da Empresa"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                          >
                            E-mail
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-email"
                            placeholder="Digite o e-mail da empresa"
                            type="email"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                          >
                            Telefone
                          </label>
                          <Input
                            className="form-control-alternative"
                            placeholder="Digite o telefone da empresa"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />

                  {/* Address */}
                  <h6 className="heading-small text-muted mb-4">
                    Informações de Endereço
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            CEP
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-postal-code"
                            placeholder="Digite seu CEP"
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                          >
                            Endereço
                          </label>
                          <Input
                            className="form-control-alternative"
                            placeholder="Digite seu endereço"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="2">
                        <FormGroup>
                          <label
                            className="form-control-label"
                          >
                            Número
                          </label>
                          <Input
                            className="form-control-alternative"
                            placeholder="Digite o número do local"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            Cidade
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-city"
                            placeholder="Digite o nome da sua cidade"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            Cidade
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-city"
                            placeholder="Digite o nome da sua cidade"
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

export default NewEmployee;
