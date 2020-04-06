import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';

import fetchFeaturedContent from '../data/featured-content';
import LatestNews from '../components/index/latest-news';

const IntroItem = ({ caption, message }) => (
  <>
    <svg width="100%" height="600px" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
      <rect width="100%" height="100%" fill="#777" />
    </svg>
    <Carousel.Caption>
      <h2>{caption}</h2>
      <p>{message}</p>
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
        linkUrl="/reports"
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
    <Intro />
    <Container className="mt-2 mt-md-5">
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
