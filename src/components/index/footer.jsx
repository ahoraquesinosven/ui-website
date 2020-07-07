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
  icon, linkUrl, size,
}) => (
  <a href={linkUrl} rel="noopener noreferrer" target="_blank" className="bg-dark mr-2 footer-icon">
    <FontAwesomeIcon icon={icon} size={size} />
  </a>
);


const Footer = () => (
  <div className="bg-dark">
    <Container as="footer" className="mt-5">
      <Row>
        <Col xs={12} md={4} className="text-md-left text-center mb-5">
          <Image src="/images/LogoAQSNV.svg" fluid height="90px" width="185px" />
          <div className="mt-2 mb-2">
            <FooterIcon
              icon={faInstagramSquare}
              linkUrl="https://www.instagram.com/ahoraquesinosvenok/"
              size="3x"
            />
            <FooterIcon
              icon={faTwitterSquare}
              linkUrl="https://twitter.com/ahoraquesinosv4"
              size="3x"
            />
            <FooterIcon
              icon={faFacebookSquare}
              linkUrl="https://www.facebook.com/ahoraquesinosven/"
              size="3x"
            />
            <FooterIcon
              icon={faYoutubeSquare}
              linkUrl="https://www.youtube.com/channel/UCt6qbrrlGd9BSjDqANOdh8g"
              size="3x"
            />
          </div>
          <a href="https://www.instagram.com/modoglitter/" rel="noopener noreferrer" target="_blank" className="mt-2">
            <Image src="/images/modo-glitter-logo.png" height="70px" />
          </a>
        </Col>
        <Col xs={12} md={4} className="text-center mb-5">
          <h5 className="text-primary"><b>SECCIONES</b></h5>
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
          <br />
          <Link href="/media-presence" passHref>
            <a>En Los Medios</a>
          </Link>
          <br />
          <Link href="/activities" passHref>
            <a>Actividades</a>
          </Link>
          <br />
          <Link href="/about" passHref>
            <a>Quiénes Somos</a>
          </Link>
        </Col>
        <Col xs={12} md={4} className="text-md-right text-center mb-5">
          <div className="mb-2">
            <Image src="/images/marea.png" height="35px" />
          </div>
          <FooterIcon
            icon={faInstagramSquare}
            linkUrl="https://www.instagram.com/somosmarea_/"
            size="2x"
          />
          <FooterIcon
            icon={faFacebookSquare}
            linkUrl="https://www.facebook.com/MAREA-Feminismo-Popular-y-Disidente-295569761292674/"
            size="2x"
          />
        </Col>
      </Row>
      <div className="mb-3 text-center text-muted footer-line">
        <div className="mt-3">Copyright 2020</div>
      </div>
    </Container>
  </div>
);

export default Footer;
