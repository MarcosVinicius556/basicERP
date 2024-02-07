
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

const ShowCompanies = () => {
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
                    <h3 className="mb-0">Empresas Cadastradas</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      tag={Link}
                      color="primary"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      <Link className="text-white"
                      to="/admin/companies/new" color="#fff">
                        Cadastrar nova Empresa
                      </Link>
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <Table className="table-flush" responsive>
                <thead className="">
                  <tr>
                    <th scope="col">Razão Social</th>
                    <th scope="col">CNPJ</th>
                    <th scope="col">Telefone</th>
                    <th scope="col">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Plint - Plotagens</th>
                    <td>99.999.999/9999-99</td>
                    <td>(49) 9 9826-6688</td>
                    <td>
                      <Link className="text">Editar</Link>|<Link className="text-red">Excluir</Link>
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

export default ShowCompanies;
