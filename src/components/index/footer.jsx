import {
  faInstagramSquare, faTwitterSquare, faFacebookSquare, faYoutubeSquare,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Link from 'next/link';

const FooterIcon = ({
  icon, linkUrl, size, network,
}) => (
  <a href={linkUrl} rel="noopener noreferrer" target="_blank" className="bg-dark mr-2 footer-icon" aria-label={network}>
    <FontAwesomeIcon icon={icon} size={size} />
  </a>
);

const Footer = () => (
  <div className="bg-dark">
    <Container as="footer" className="mt-5">
      <Row>
        <Col xs={12} md={4} className="text-md-left text-center mb-5">
          <Image src="/images/LogoAQSNV.svg" fluid height="90px" width="185px" alt="Logo del Observatorio de las violencias de Género Ahora Que Si Nos Ven" />
          <div className="mt-2 mb-2">
            <FooterIcon
              icon={faInstagramSquare}
              linkUrl="https://www.instagram.com/ahoraquesinosvenok/"
              size="3x"
              network="Cuenta de Instagram del observatorio ahora que si nos ven"
            />
            <FooterIcon
              icon={faTwitterSquare}
              linkUrl="https://twitter.com/ahoraquesinosv4"
              size="3x"
              network="Cuenta de Twitter del observatorio ahora que si nos ven"
            />
            <FooterIcon
              icon={faFacebookSquare}
              linkUrl="https://www.facebook.com/ahoraquesinosven/"
              size="3x"
              network="Cuenta de Facebook del observatorio ahora que si nos ven"
            />
            <FooterIcon
              icon={faYoutubeSquare}
              linkUrl="https://www.youtube.com/channel/UCt6qbrrlGd9BSjDqANOdh8g"
              size="3x"
              network="Cuenta de YouTube del observatorio ahora que si nos ven"
            />
          </div>

        </Col>
        <Col xs={12} md={4} className="text-center mb-5">
          <h5 className="text-primary"><strong>SECCIONES</strong></h5>
          <Link href="/reports?category=registro-femicidios" passHref>
            Femicidios
          </Link>
          <br />
          <Link href="/reports?categoryExcluded=registro-femicidios" passHref>
            Informes
          </Link>
          <br />
          <Link href="/campaigns" passHref>
            Campañas
          </Link>
          <br />
          <Link href="/articles" passHref>
            Artículos
          </Link>
          <br />
          <Link href="/media-presence" passHref>
            En Los Medios
          </Link>
          <br />
          <Link href="/activities" passHref>
            Actividades
          </Link>
          <br />
          <Link href="/about" passHref>
            Quiénes Somos
          </Link>
        </Col>
        <Col xs={12} md={4} className="text-md-right text-center mb-5">
          <a href="https://www.instagram.com/modoglitter/" rel="noopener noreferrer" target="_blank" className="mt-2">
            <Image src="/images/modo-glitter-logo.png" height="70px" alt="Megáfono de nuestra Radio Modo Glitter" />
          </a>
        </Col>
      </Row>
      <div className="mb-3 text-center text-muted footer-line">
        <div className="mt-3">Copyright 2020</div>
      </div>
    </Container>
  </div>
);

export default Footer;
