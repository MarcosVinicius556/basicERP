
// reactstrap components
import Header from "components/Headers/Header";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  Container,
  Row,
  Col,
  Button,
  Table,
} from "reactstrap";

const ShowMeasurements = () => {
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--5 vh-100 blue-background" fluid>       
        <Row className="justify-content-center">
        <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Unidades de Medida</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      tag={Link}
                      color="primary"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      <Link className="text-white"
                      to="/admin/measurements/new" color="#fff">
                        Cadastrar nova Unidade de Medida
                      </Link>
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <Table className="table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Código</th>
                    <th scope="col">Descrição</th>
                    <th scope="col">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">UN</th>
                    <td>Unidade</td>
                    <td>
                      <Link className="text">Editar</Link> | <Link className="text-red">Excluir</Link>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ShowMeasurements;
