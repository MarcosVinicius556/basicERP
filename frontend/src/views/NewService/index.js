
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
  Label,
  Badge,
  PaginationItem,
  PaginationLink,
  CardFooter,
  Pagination,
  Table,
} from "reactstrap";

const NewService = () => {
  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
              <Row className="align-items-center">
                  <Col xs="8">
                    <Link to="/admin/services">Voltar</Link>
                  </Col>
              </Row>
              <Row className="align-items-center justify-content-center">
                  <Col xs="13">
                    <h3 className="mb-0">Cadastro de Ordem de Serviço</h3>
                  </Col>
              </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <div className="pl-lg-4">
                    <Row>

                      <Col lg="6">
                        <FormGroup>
                          <label className="form-control-label" >
                              Empresa
                          </label>
                          <Input type="select" value={1}>
                            <option value="opcao1">Empresa 1</option>
                            <option value="opcao2">Empresa 2</option>
                            <option value="opcao3">Empresa 3</option>
                          </Input>  
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label className="form-control-label" >
                              Cliente
                          </label>
                          <Input type="select" value={1}>
                            <option value="opcao1">Cliente 1</option>
                            <option value="opcao2">Cliente 2</option>
                            <option value="opcao3">Cliente 3</option>
                          </Input>  
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label for="dataInicio">Data de Início</label>
                          <Input
                            type="date"
                            name="dataInicio"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label for="dataFinal">Data de Finalização</label>
                          <Input
                            type="date"
                            name="dataFinal"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="12">
                        <FormGroup check inline>
                          <Label check>
                            <Badge className="text-dark bg-yellow">
                            <Input
                              type="radio"
                              name="opcao"
                              value="opcao1"
                            />{' '}
                              Em Processamento
                            </Badge>
                          </Label>
                        </FormGroup>
                        <FormGroup check inline>
                          <Label check>
                            <Badge className="text-dark bg-green">
                              <Input
                                type="radio"
                                name="opcao"
                                value="opcao2"
                              />{' '}
                              Concluído
                            </Badge>
                          </Label>
                        </FormGroup>
                        <FormGroup check inline>
                          <Label check>
                            <Badge className="text-dark bg-orange">
                              <Input
                                type="radio"
                                name="opcao"
                                value="opcao3"
                              />{' '}
                              Cancelado
                            </Badge>
                          </Label>
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  <div className="pl-lg-4">
                  {/* Observações */}
                  <h6 className="heading-small text-muted mb-4">
                    Itens da OS
                  </h6>
                    <Row>
                      <Col lg="12">
                        <FormGroup>
                        <Card className="shadow">
                          <CardHeader className="border-0">
                            <h3 className="mb-0">Card tables</h3>
                          </CardHeader>
                          <Table className="align-items-center table-flush" responsive>
                            <thead className="thead-light">
                              <tr>
                                <th scope="col">Código</th>
                                <th scope="col">Descrição</th>
                                <th scope="col">Quantidade</th>
                                <th scope="col">Valor</th>
                                <th scope="col" >Ações</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">
                                  0101
                                </th>
                                <td>Arte Digital Personalizada</td>
                                <td>1 - UN</td>
                                <td>R$ 100,00</td>
                                <td> 
                                  <Link className="text">Editar</Link> | <Link className="text-red">Excluir</Link>
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                          <CardFooter className="py-4">
                            <nav aria-label="...">
                              <Pagination
                                className="pagination justify-content-end mb-0"
                                listClassName="justify-content-end mb-0"
                              >
                                <PaginationItem className="disabled">
                                  <PaginationLink
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                    tabIndex="-1"
                                  >
                                    <i className="fas fa-angle-left" />
                                    <span className="sr-only">Previous</span>
                                  </PaginationLink>
                                </PaginationItem>
                                <PaginationItem className="active">
                                  <PaginationLink
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                  >
                                    1
                                  </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                  <PaginationLink
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                  >
                                    2 <span className="sr-only">(current)</span>
                                  </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                  <PaginationLink
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                  >
                                    3
                                  </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                  <PaginationLink
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                  >
                                    <i className="fas fa-angle-right" />
                                    <span className="sr-only">Next</span>
                                  </PaginationLink>
                                </PaginationItem>
                              </Pagination>
                            </nav>
                          </CardFooter>
                        </Card>
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                        <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Total dos Itens
                          </label>
                          <Input
                            className="form-control-alternative"
                            type="text"
                            disabled={true}
                            value="R$ 100,00"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  <div className="pl-lg-4">
                  {/* Observações */}
                  <h6 className="heading-small text-muted mb-4">
                    Observações
                  </h6>
                    <Row>
                      <Col lg="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Observações
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-postal-code"
                            placeholder="Digite seu CEP"
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

export default NewService;
