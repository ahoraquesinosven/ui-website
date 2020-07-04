import Markdown from 'react-markdown';
import Image from 'react-bootstrap/Image';

const customRenderers = {
  image: (props) => (
    <Image {...props} fluid rounded className="content-image" />
  ),
  html: ({ value }) => (
    <div
      className="embed-responsive embed-responsive-16by9"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: value,
      }}
    />
  ),
};

const CustomMarkdownRenderer = (props) => (
  <Markdown {...props} escapeHtml={false} renderers={customRenderers} />
);

export default CustomMarkdownRenderer;
