
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

const NewProduct = () => {
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
                    <Link to="/admin/products">Voltar</Link>
                  </Col>
                </Row>
                <Row className="align-items-center justify-content-center">
                  <Col xs="13">
                    <h3 className="mb-0">Cadastro de Produtos</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6" sm="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                          >
                            Código
                          </label>
                          <Input
                            className="form-control-alternative"
                            placeholder="Digite o código do produto"
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
                            placeholder="Digite a descrição do produto"
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
                            Descrição Reduzida
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-email"
                            placeholder="Digite a descrição reduzida do produto"
                            type="email"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6" sm="6">
                        <FormGroup>
                          <label className="form-control-label" >
                              Unidade de Medida
                          </label>
                          <Input type="select" value={1}>
                            <option value="UN">Unidade</option>
                            <option value="M">Metro</option>
                            <option value="PC">Peça</option>
                          </Input>  
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6" sm="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                          >
                            Valor
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-valor"
                            placeholder="Digite o valor do produto"
                            type="number"
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
                            Observação
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-valor"
                            placeholder="Digite alguma observação sobre o produto"
                            type="textarea"
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

export default NewProduct;
