
// reactstrap components
import Header from "components/Headers/Header";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
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
              <h1>Aqui será a página do financeiro</h1>
            </CardHeader>
            <CardBody>
              <p>lorem ipsun</p>
            </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Finance;
