import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';

const IntroItem = ({ caption, message }) => (
  <>
    <svg width="100%" height="800px" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
      <rect width="100%" height="100%" fill="#777" />
    </svg>
    <Carousel.Caption>
      <h2>{ caption }</h2>
      <p>{ message }</p>
    </Carousel.Caption>
  </>
);

const Intro = () => (
  <Carousel>
    <Carousel.Item>
      <IntroItem caption="First image" message="TODO: Complete with first image" />
    </Carousel.Item>

    <Carousel.Item>
      <IntroItem caption="Second image" message="TODO: Complete with second image" />
    </Carousel.Item>

    <Carousel.Item>
      <IntroItem caption="Third image" message="TODO: Complete with third image" />
    </Carousel.Item>
  </Carousel>
);


const ImportantSections = () => (
  <section name="important-sections" className="text-center mb-2 mt-mb-5">
    <Row>
      <Col md={4}>
        <Image src="/images/informe-1.jpg" roundedCircle fluid />
        <h4>Registro de Femicidios</h4>
        <p>Morbi leo risus, porta ac consectetur ac, vestibulum. Praesent commodo cursus magna.</p>
        <Link href="/reports" passHref>
          <Button variant="dark">Ver detalles »</Button>
        </Link>
      </Col>
      <Col md={4}>
        <Image src="/images/iconos-01.jpg" roundedCircle fluid />
        <h4>Ultima Campaña</h4>
        <p>Morbi leo risus, porta ac consectetur ac, vestibulum. Praesent commodo cursus magna.</p>
        <Link href="/campaigns" passHref>
          <Button variant="dark">Ver detalles »</Button>
        </Link>
      </Col>
      <Col md={4}>
        <Image src="/images/radio-1.jpg" roundedCircle fluid />
        <h4>Escuchanos</h4>
        <p>Modo Glitter....nuestra radio.....asdasdasdasdsadasd</p>
        <a href="https://www.instagram.com/modoglitter/" rel="noopener">
          <Button variant="dark">Ver detalles »</Button>
        </a>
      </Col>
    </Row>
  </section>
);

const LatestNews = () => (
  <section name="latest-news">
    TODO: Implement this `latest news` section
  </section>
);

const Index = () => (
  <>
    <Intro />
    <Container className="mt-2 mt-md-5">
      <ImportantSections />
      <LatestNews />
    </Container>
  </>
);

export default Index;
