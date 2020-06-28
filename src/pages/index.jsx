import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import fetchHomeImages from '../data/home-images';

import fetchFeaturedContent from '../data/featured-content';
import LatestNews from '../components/index/latest-news';


const Intro = ({ homeImages }) => (
  <Carousel className="intro-carousel">
    {homeImages.map((home) => (
      <Carousel.Item key={home.id}>
        <Link href={home.URL} passHref>
          <img src={home.mainImage.url} className="d-block w-100 " alt={home.mainImageTitle} />
        </Link>
        <Carousel.Caption>
          <h2 className="display-1">{home.mainImageTitle}</h2>
          <p>{home.mainImageSubTitle}</p>
        </Carousel.Caption>
      </Carousel.Item>
    ))}
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
  <section name="important-sections" className="text-center mt-2 mt-md-5">
    <Row>
      <ImportantSectionColumn
        imageUrl="/images/informe-1.jpg"
        title="Femicidios en 2020"
        description="Registro de femicidios durante el año actual"
        linkUrl="reports?category=registro-femicidios&fromDate=2020-01-01"
      />
      <ImportantSectionColumn
        imageUrl="/images/iconos-01.jpg"
        title="Recursos"
        description="Descarga distintas herramientas para realizar actividades y talleres relacionados con género"
        linkUrl="reports?category=recursos"
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

const Index = ({ featuredContent, homeImages }) => (
  <>
    <Intro homeImages={homeImages} />
    <Container className="">
      <ImportantSections />
      <hr className="w-50 mx-auto my-5" />
      <LatestNews featuredContent={featuredContent} />
    </Container>
  </>
);

export default Index;

export async function getServerSideProps() {
  const featuredContent = await fetchFeaturedContent();
  const homeImages = await fetchHomeImages();
  return {
    props: {
      featuredContent,
      homeImages,
    },
  };
}
