import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';

import fetchFeaturedContent from '../data/featured-content';
import LatestNews from '../components/index/latest-news';

const IntroItem = ({ caption, message, imageUrl }) => (
  <>
    <img src={imageUrl} className="d-block w-100 " alt={caption} />
    <Carousel.Caption style={{ backgroundColor: 'rgba(0.25,0.25,0.25,0.4)' }}>
      <h2>{caption}</h2>
      <p>{message}</p>
    </Carousel.Caption>
  </>
);

const Intro = () => (
  <Carousel>
    <Carousel.Item>
      <IntroItem caption="Registro de Femicidios" message="Presentando el resumen 2015 a 2019 del registro de femicidios" imageUrl="/images/main-image1.jpg" />
    </Carousel.Item>

    <Carousel.Item>
      <IntroItem caption="Aborto Legal Seguro y Gratuito" message="Pañuelazo frente al Congreso en 2020" imageUrl="/images/main-image2.jpg" />
    </Carousel.Item>

    <Carousel.Item>
      <IntroItem caption="Ni Una Menos" message="Frente al Congreso 2020" imageUrl="/images/main-image3.jpg" />
    </Carousel.Item>
  </Carousel>
);

const ImportantSectionColumn = ({
  imageUrl, title, description, linkUrl,
}) => {
  let linkElement;
  if (linkUrl.startsWith('http')) {
    linkElement = (
      <Button href={linkUrl} rel="noopener noreferrer" target="_blank" variant="primary">Ver detalles »</Button>
    );
  } else {
    linkElement = (
      <Link href={linkUrl} passHref>
        <Button variant="primary">Ver detalles »</Button>
      </Link>
    );
  }

  return (
    <Col md={4} className="d-flex flex-column align-items-center">
      <Image src={imageUrl} roundedCircle fluid />
      <h4>{title}</h4>
      <p className="flex-grow-1">{description}</p>
      {linkElement}
    </Col>
  );
};

const ImportantSections = () => (
  <section name="important-sections" className="text-center">
    <Row>
      <ImportantSectionColumn
        imageUrl="/images/informe-1.jpg"
        title="Registro de Femicidios"
        description="Morbi leo risus, porta ac consectetur ac, vestibulum. Praesent commodo cursus magna."
        linkUrl="reports?category=registro-femicidios"
      />
      <ImportantSectionColumn
        imageUrl="/images/iconos-01.jpg"
        title="Ultima Campaña"
        description="Morbi leo risus, porta ac consectetur ac, vestibulum. Praesent commodo cursus magna."
        linkUrl="/campaigns"
      />
      <ImportantSectionColumn
        imageUrl="/images/radio-1.jpg"
        title="Escuchanos"
        description="Modo Glitter....nuestra radio.....asdasdasdasdsadasd."
        linkUrl="https://www.instagram.com/modoglitter/"
      />
    </Row>
  </section>
);

const Index = ({ featuredContent }) => (
  <>

    <Container className="">
      <Intro />
      <ImportantSections />
      <hr className="w-50 mx-auto my-5" />
      <LatestNews featuredContent={featuredContent} />
    </Container>
  </>
);

export default Index;

export async function getServerSideProps() {
  const featuredContent = await fetchFeaturedContent();
  return {
    props: {
      featuredContent,
    },
  };
}
