
// reactstrap components
import Header from "components/Headers/Header";
import {
  Container,
  Row,
  Col,
} from "reactstrap";

const Finance = () => {
  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-1" xl="8">
            <h1>Aqui será a página do financeiro</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Finance;
