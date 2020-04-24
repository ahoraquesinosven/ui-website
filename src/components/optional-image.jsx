import Image from 'react-bootstrap/Image';

const OptionalImage = ({ image, url, ...rest }) => {
  if (url || image) {
    return (
      <Image {...rest} src={url || image.url} />
    );
  }

  return null;
};

export default OptionalImage;
