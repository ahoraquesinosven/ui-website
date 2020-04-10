import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

config.autoAddCss = false;


const Header = () => (
  <Navbar bg="dark" variant="dark" expand="md" sticky="top">
    <Container>
      <Link href="/" passHref>
        <Navbar.Brand>Observatorio</Navbar.Brand>
      </Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav>
          <Link href="/reports" passHref>
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

const Footer = () => (
  <Container as="footer">
    <strong>TODO</strong>
    : Implement this footer
  </Container>
);

const Application = ({ Component, pageProps }) => (
  <div className="d-flex flex-column min-vh-100">
    <Header />
    <section name="main" className="flex-grow-1">
      <Component {...pageProps} />
    </section>
    <Footer />
  </div>
);

export default Application;
