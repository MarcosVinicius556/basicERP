
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

const ShowProducts = () => {
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
                    <h3 className="mb-0">Produtos Cadastrados</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      tag={Link}
                      color="primary"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      <Link className="text-white"
                      to="/admin/products/new" color="#fff">
                        Cadastrar novo Produto
                      </Link>
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Código</th>
                    <th scope="col">Descrição</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">0101</th>
                    <td>Arte digital personalizada</td>
                    <td>R$ 100,00</td>
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

export default ShowProducts;
