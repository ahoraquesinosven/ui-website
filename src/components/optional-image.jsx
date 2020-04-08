import Image from 'react-bootstrap/Image';

const OptionalImage = ({ image, ...rest }) => {
  if (image) {
    return (
      <Image {...rest} src={image.url} />
    );
  }

  return null;
};

export default OptionalImage;
