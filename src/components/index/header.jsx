import Link from 'next/link';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Header = () => (
  <Navbar bg="light" expand="md" sticky="top" className="shadow">
    <Container fluid>
      <Link href="/" passHref>
        <Navbar.Brand>
          <img src="/images/LogoAQSNV.svg" height="90px" width="195" alt="Observatorio de las Violencias de Género Ahora que si nos ven" />
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <Link href="/reports?category=registro-femicidios" passHref>
            <Nav.Link>Femicidios</Nav.Link>
          </Link>
          <Link href="/reports?categoryExcluded=registro-femicidios" passHref>
            <Nav.Link>Informes</Nav.Link>
          </Link>
          <Link href="/campaigns" passHref>
            <Nav.Link>Campañas</Nav.Link>
          </Link>
          <Link href="/media-presence" passHref>
            <Nav.Link>En Los Medios</Nav.Link>
          </Link>
          <Link href="/activities" passHref>
            <Nav.Link>Actividades</Nav.Link>
          </Link>
          <Link href="/about" passHref>
            <Nav.Link>Quiénes Somos</Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
