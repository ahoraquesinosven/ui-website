import Carousel from 'react-bootstrap/Carousel';
import OptionalImage from './optional-image';

const AdditionalImagesCarousel = ({ images }) => {
  if (images) {
    return (
      <Carousel>
        {images.map((image) => (
          <Carousel.Item key={image.id}>
            <OptionalImage image={image} fluid rounded className="mb-3 content-image" />
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
  return null;
};

export default AdditionalImagesCarousel;
