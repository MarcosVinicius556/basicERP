
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

const ShowServices = () => {
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>       
        <Row className="mt-5">
        <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Ordens de Serviço</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      tag={Link}
                      color="primary"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      <Link className="text-white"
                      to="/admin/services/new" color="#fff">
                        Cadastrar nova Ordem de Serviço
                      </Link>
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Cliente</th>
                    <th scope="col">Descrição</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Marcos Antônio</th>
                    <td>Manutenção</td>
                    <td>R$ 4,569</td>
                    <td>
                      <i className="badge-success" >CONCLUÍDO</i>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Rosa Maria</th>
                    <td>Instalação</td>
                    <td>R$ 100</td>
                    <td>
                      <i className="badge-primary" >EM PROCESSO</i>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Marcos Vinicius</th>
                    <td>Suporte</td>
                    <td>R$ 2,100</td>
                    <td>
                      <i className="badge-warning" >CANCELADO</i>
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

export default ShowServices;