// javascipt plugin for creating charts
import Chart from "chart.js";
// reactstrap components
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  Button,
  CardBody,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
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
      <Container className="mt--7 vh-100 blue-background" fluid>       
        <Row className="mt-5 justify-content-center">
          <Col className="mb-5 mb-xl-0" xl="8">
          
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
