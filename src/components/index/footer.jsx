import { faBullhorn } from '@fortawesome/free-solid-svg-icons';
import { faInstagramSquare, faTwitterSquare, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const FooterCol = ({
  icon, linkUrl, size,
}) => (
  <Col>
    <a href={linkUrl} rel="noopener noreferrer" target="_blank" className="text-light">
      <FontAwesomeIcon icon={icon} size={size} />
    </a>
  </Col>
);


const Footer = () => (
  <div className="text-light bg-dark text-center">
    <Container as="footer" className="mt-5">
      <Image src="./images/AQSNV-logo.jpg" thumbnail className="w-50" />
      <Row className="mt-2">
        <FooterCol
          icon={faInstagramSquare}
          linkUrl="https://www.instagram.com/ahoraquesinosvenok/"
          size="3x"
        />
        <FooterCol
          icon={faTwitterSquare}
          linkUrl="https://twitter.com/ahoraquesinosv4"
          size="3x"
        />
        <FooterCol
          icon={faFacebookSquare}
          linkUrl="https://www.facebook.com/ahoraquesinosven/"
          size="3x"
        />
      </Row>
      <a href="https://www.instagram.com/modoglitter/" rel="noopener noreferrer" target="_blank" className="text-light">
        <FontAwesomeIcon icon={faBullhorn} size="3x" className="mr-2" />
        Nuestra Radio
        <em className="mb-8"> Modo Glitter</em>
      </a>
      <div>
        <Image src="./images/marea.png" thumbnail className="w-25 mt-5" />
      </div>
      <Row>
        <FooterCol
          icon={faInstagramSquare}
          linkUrl="https://www.instagram.com/somosmarea_/"
          size="2x"
        />
        <FooterCol
          icon={faFacebookSquare}
          linkUrl="https://www.facebook.com/MAREA-Feminismo-Popular-y-Disidente-295569761292674/"
          size="2x"
        />
      </Row>
      <div className="text-muted mt-2">Copyright 2020</div>
    </Container>
  </div>
);

export default Footer;
