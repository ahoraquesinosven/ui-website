import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';

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
  <section name="important-sections">
    TODO: Implement this `important sections` section
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
    <Container>
      <ImportantSections />
      <LatestNews />
    </Container>
  </>
);

export default Index;
