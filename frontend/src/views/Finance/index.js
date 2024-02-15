
// reactstrap components
import Header from "components/Headers/Header";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button,
} from "reactstrap";

const Finance = () => {
  return (
    <>
      <Header />
      <Container className="mt--5 vh-100 blue-background" fluid>
        <Row className="justify-content-center">
          <Col className="order-xl-1" xl="8">
            <Card>
            <CardHeader>
              <Row className="align-items-center">
                <Col xs="6">
                  <h1>Financeiro</h1>      
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <h6 className="heading-small text-muted mb-4">
                    Relatórios
                  </h6>
              <div className="pl-lg-4">
                <Row className="align-items-center mb-3">
                  <Col xs="6">
                    <Button
                        color="primary"
                        onClick={(e) => e.preventDefault()}
                        size="md"
                      >
                        Relatório de OS em aberto
                    </Button>
                  </Col>
                  <Col xs="6">
                    <Button
                        color="primary"
                        onClick={(e) => e.preventDefault()}
                        size="md"
                    >
                      Relatório de OS em andamento
                    </Button>
                  </Col>
                  </Row>
                  <Row className="align-items-center">
                  <Col xs="6">
                    <Button
                      color="primary"
                      onClick={(e) => e.preventDefault()}
                      size="md">
                      Relatório de OS finalizada
                    </Button>
                  </Col>
                  <Col xs="6">
                    <Button
                      color="primary"
                      onClick={(e) => e.preventDefault()}
                      size="md">
                      Relatório de OS finalizada
                    </Button>
                  </Col>
                </Row>
              </div>
              <hr className="my-4" />

              <h6 className="heading-small text-muted mb-4">
                    Outras Opcçoes...
                  </h6>
              <div className="pl-lg-4">
              <Row className="align-items-center mb-3">
                <Col xs="6">
                  <h5>Avaliar as opções que seriam necessárias</h5>
                </Col>
              </Row>
              </div>

            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  </>
  );
};

export default Finance;
