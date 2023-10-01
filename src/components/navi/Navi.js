import { Button, Nav, NavItem, NavLink, Navbar } from "reactstrap";
import CartSummary from "../cart/CartSummary";

function Example() {
  return (
    <Navbar >
      <Nav >
        <NavItem className="me-5">
        <Button href="/" color="primary">Ana Sayfa</Button>
        </NavItem>

        <NavItem>
        <Button color="primary">Ürünler</Button>
        </NavItem>
      </Nav>
      <Nav>
        <CartSummary></CartSummary>
      </Nav>
    </Navbar>
  );
}

export default Example;
