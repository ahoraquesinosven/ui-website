import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Link from 'next/link';
import fetchHomeImages from '../data/home-images';

import fetchFeaturedContent from '../data/featured-content';
import LatestNews from '../components/index/latest-news';


const Intro = ({ homeImages }) => (
  <Carousel className="intro-carousel">
    {homeImages.map((home) => (
      <Carousel.Item key={home.id}>
        <img src={home.mainImage.url} className="d-block w-100 " alt={home.mainImageTitle} />
        <Link href={home.URL} passHref>
          <Carousel.Caption>
            <h2 className="display-1">{home.mainImageTitle}</h2>
            <p>{home.mainImageSubTitle}</p>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>
    ))}
  </Carousel>
);

const ProperLink = ({ linkUrl, children }) => {
  if (linkUrl.startsWith('http')) {
    return (
      <a href={linkUrl} rel="noopener noreferrer" target="_blank">
        {children}
      </a>
    );
  }
  return (
    <Link href={linkUrl}>
      <a>{children}</a>
    </Link>
  );
};

const ImportantSectionColumn = ({
  imageUrl, title, description, linkUrl,
}) => (
  <Col md={4} className="d-flex flex-column align-items-center">
    <div className="important-section-icon rounded-circle">
      <ProperLink linkUrl={linkUrl}>
        <Image src={imageUrl} roundedCircle fluid />
      </ProperLink>
    </div>
    <h4 className="font-weight-bold">{title}</h4>
    <p className="flex-grow-1 mb-0">{description}</p>
    <ProperLink linkUrl={linkUrl}>
      <span>Leer más</span>
    </ProperLink>
  </Col>
);

const ImportantSections = () => (
  <section name="important-sections" className="text-center mt-2 mt-md-5">
    <Row>
      <ImportantSectionColumn
        imageUrl="/images/informe-1.jpg"
        title="Femicidios en 2020"
        description="Registro de femicidios durante el año actual, elaborado a partir del análisis de medios gráficos y digitales de todo el país."
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
        description="Modo Glitter es nuestro programa de radio. Todos los sábados 16hs en FM Tribu 88.7"
        linkUrl="https://www.youtube.com/c/modoglitter?utm_source=sitio-observatorio&utm_medium=home-page&utm_campaign=link-home-page-observatorio"
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
