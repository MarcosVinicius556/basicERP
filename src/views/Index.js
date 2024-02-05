// javascipt plugin for creating charts
import Chart from "chart.js";
// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
} from "variables/charts.js";

import Header from "components/Headers/Header.js";

const Index = (props) => {

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>       
        <Row className="mt-5">
        <Col className="mb-5 mb-xl-0" xl="8">
            <h1 className="text-white">Olá Seja Bem Vindo!</h1>
            <p>Aqui será a página de HOME, ainda será decidido o que irá ficar aqui</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
