import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/main.css';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';
import { faInstagramSquare, faTwitterSquare, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
          <Link href="/reports?category=registro-femicidios" passHref>
            <Nav.Link>Femicidios</Nav.Link>
          </Link>
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

const FooterCol = ({
  icon, linkUrl,
}) => (
  <Col>
    <a href={linkUrl} rel="noopener noreferrer" target="_blank" className="text-light">
      <FontAwesomeIcon icon={icon} size="2x" />
    </a>
  </Col>
);


const Footer = () => (
  <div className="text-light bg-dark text-center">
    <Container as="footer" className="mt-3">
      <h5 className="text-muted">
        Observatorio de violencias de género
        <em style={{ display: 'block' }}>Ahora que sí nos ven</em>
      </h5>
      <Row className="mt-2">
        <FooterCol
          icon={faInstagramSquare}
          linkUrl="https://www.instagram.com/ahoraquesinosvenok/"
        />
        <FooterCol
          icon={faTwitterSquare}
          linkUrl="https://twitter.com/ahoraquesinosv4"
        />
        <FooterCol
          icon={faFacebookSquare}
          linkUrl="https://www.facebook.com/ahoraquesinosven/"
        />
      </Row>
      <a href="https://www.instagram.com/modoglitter/" rel="noopener noreferrer" target="_blank" className="text-light">
        <FontAwesomeIcon icon={faBullhorn} size="2x" className="mr-2" />
        Nuestra Radio
        <em> Modo Glitter</em>
      </a>
      <div className="text-muted mt-2">Copyright 2020</div>
    </Container>
  </div>
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
