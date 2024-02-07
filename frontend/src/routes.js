import Finance from "views/Finance";
import Index from "views/Index.js";
import NewCompany from "views/NewCompany";
import NewCustomer from "views/NewCustomer";
import NewEmployee from "views/NewEmployee";
import NewProduct from "views/NewProduct";
import NewService from "views/NewService";
import NewMeasurement from "views/NewUnitMeasure";
import ShowCompanies from "views/ShowCompanies";
import ShowCustomers from "views/ShowCustomers";
import ShowEmployees from "views/ShowEmployees";
import ShowProducts from "views/ShowProducts";
import ShowServices from "views/ShowServices";
import ShowMeasurements from "views/ShowUnitMeasure";

var routes = [
  /**
   * Início da Aplicação
   */
  {
    path: "/home",
    name: "Home",
    icon: "ni ni-tv-2 text-white",
    component: <Index />,
    layout: "/admin",
    show: true
  },
  /**
   * Cadastro e visualização de EMPRESAS
   */
  {
    path: "/companies",
    name: "Empresas",
    icon: "ni ni-building text-pink",
    component: <ShowCompanies />,
    layout: "/admin",
    show: true
  },
  {
    path: "/companies/new",
    name: "Nova Empresa",
    icon: "ni ni-single-02 text-yellow",
    component: <NewCompany />,
    layout: "/admin",
    show: false
  },
  /**
   * Cadastro e visualização de SERVIÇOS
   */
  {
    path: "/services",
    name: "Serviços",
    icon: "ni ni-settings text-red",
    component: <ShowServices />,
    layout: "/admin",
    show: true
  },
  {
    path: "/services/new",
    name: "Novo Serviço",
    icon: "ni ni-settings text-red",
    component: <NewService />,
    layout: "/admin",
    show: false
  },
  /**
   * Cadastro e visualização de FUNCIONÁRIOS
   */
  {
    path: "/employees",
    name: "Funcionários",
    icon: "ni ni-badge text-yellow",
    component: <ShowEmployees />,
    layout: "/admin",
    show: true
  },
  {
    path: "/employees/new",
    name: "Novo Funcionário",
    icon: "ni ni-single-02 text-yellow",
    component: <NewEmployee />,
    layout: "/admin",
    show: false
  },
  /**
   * Cadastro e visualização de CLIENTES
   */
  {
    path: "/customers",
    name: "Clientes",
    icon: "ni ni-satisfied text-orange",
    component: <ShowCustomers />,
    layout: "/admin",
    show: true
  },
  {
    path: "/customers/new",
    name: "Novo Cliente",
    icon: "ni ni-satisfied text-green",
    component: <NewCustomer />,
    layout: "/admin",
    show: false
  },
  /**
   * Cadastro e visualização de CLIENTES
   */
  {
    path: "/products",
    name: "Produtos",
    icon: "ni ni-shop text-blue",
    component: <ShowProducts />,
    layout: "/admin",
    show: true
  },
  {
    path: "/products/new",
    name: "Novo Produto",
    icon: "ni ni-satisfied text-green",
    component: <NewProduct />,
    layout: "/admin",
    show: false
  },
  
  /**
   * Cadastro e visualização de CLIENTES
   */
  {
    path: "/measurements",
    name: "Unidades de Medida",
    icon: "ni ni-chart-bar-32 text-purple",
    component: <ShowMeasurements />,
    layout: "/admin",
    show: true
  },
  {
    path: "/measurements/new",
    name: "Nova Unidade de Medida",
    icon: "ni ni-satisfied text-green",
    component: <NewMeasurement />,
    layout: "/admin",
    show: false
  },
  {
    path: "/finances",
    name: "Financeiro",
    icon: "ni ni-money-coins text-green",
    component: <Finance />,
    layout: "/admin",
    show: true
  },
  
];
export default routes;
