import { faBullhorn } from '@fortawesome/free-solid-svg-icons';
import { faInstagramSquare, faTwitterSquare, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Link from 'next/link';

const FooterIcon = ({
  icon, linkUrl, size,
}) => (
  <a href={linkUrl} rel="noopener noreferrer" target="_blank" className="bg-dark flex">
    <FontAwesomeIcon icon={icon} size={size} />
  </a>
);


const Footer = () => (
  <div className="bg-dark">
    <Container as="footer" className="mt-5">
      <Row>
        <Col xs="4" lg="6" className="text-left">
          <Image src="/images/LogoAQSNV.svg" fluid height="80px" width="180px" />
        </Col>
        <Col>
          <Link href="/reports?category=registro-femicidios" passHref>
            <a>Femicidios</a>
          </Link>
          <br />
          <Link href="/reports" passHref>
            <a>Informes</a>
          </Link>
          <br />
          <Link href="/campaigns" passHref>
            <a>Campañas</a>
          </Link>
        </Col>
        <Col className="text-right">
          <div>
            <Image src="./images/marea.png" height="30px" />
          </div>
          <FooterIcon
            className="mt-1"
            icon={faInstagramSquare}
            linkUrl="https://www.instagram.com/somosmarea_/"
            size="2x"
          />
          &nbsp;
          <FooterIcon
            className="mt-1"
            icon={faFacebookSquare}
            linkUrl="https://www.facebook.com/MAREA-Feminismo-Popular-y-Disidente-295569761292674/"
            size="2x"
          />
        </Col>
      </Row>
      <Row className="mt-1">
        <Col xs="4" lg="6" className="text-left">
          <FooterIcon
            icon={faInstagramSquare}
            linkUrl="https://www.instagram.com/ahoraquesinosvenok/"
            size="3x"
          />
          &nbsp;
          &nbsp;
          <FooterIcon
            icon={faTwitterSquare}
            linkUrl="https://twitter.com/ahoraquesinosv4"
            size="3x"
          />
          &nbsp;
          &nbsp;
          <FooterIcon
            icon={faFacebookSquare}
            linkUrl="https://www.facebook.com/ahoraquesinosven/"
            size="3x"
          />
        </Col>
        <Col>
          <Link href="/media-presence" passHref>
            <a>En Los Medios</a>
          </Link>
          <br />
          <Link href="/activities" passHref>
            <a>Actividades</a>
          </Link>
        </Col>
      </Row>
      <Row className="mt-1">
        <Col>
          <a href="https://www.instagram.com/modoglitter/" rel="noopener noreferrer" target="_blank" className="text-light">
            <FontAwesomeIcon icon={faBullhorn} size="2x" className="mr-2" />
          </a>
          <p className="mb-3 text-light"> Nuestra Radio Modo Glitter</p>
        </Col>
        <Col>
          <Link href="/about" passHref>
            <a>Quiénes Somos</a>
          </Link>
        </Col>
      </Row>
      <div className="mb-3 text-center text-muted">
        Copyright 2020
      </div>

    </Container>
  </div>
);

export default Footer;
