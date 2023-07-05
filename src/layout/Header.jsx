import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../img/mandoblack.png';
import '../css/navbar.css';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href=".">
          <ul className="bran-icon">
            <li>
            <img
              src={logo}
              width="150"
              height="80"
              className="d-inline-block align-top"
              alt="mandologo"
            />
            </li>
          </ul>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="gap-5 m-5">
            <Nav.Link href="/">Welcome</Nav.Link>
          </Nav>
          <Nav className="gap-5 m-5">
            <Nav.Link href="products/list">Mandalore</Nav.Link>
          </Nav>
          <Nav className="gap-5 log">
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;