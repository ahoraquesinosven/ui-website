import Markdown from 'react-markdown';
import Image from 'react-bootstrap/Image';

const customRenderers = {
  image: (props) => <Image {...props} fluid rounded className="content-image" />,
};

const CustomMarkdownRenderer = (props) => (
  <Markdown {...props} renderers={customRenderers} />
);

export default CustomMarkdownRenderer;
