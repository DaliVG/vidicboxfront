import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../img/mandoblack.png';
import '../css/navbar.css';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">
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
            <Nav.Link href="/products/list">Mandalorian list</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav className="gap-2 log">
            <Nav.Link href="/login">Log-in</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav>
    </Navbar>
  );
}

export default Header;