import Markdown from 'react-markdown';
import Image from 'react-bootstrap/Image';

const components = {
  img: (props) => (
    <Image {...props} fluid rounded className="content-image" />
  ),
  iframe: ({ value }) => (
    <div
      className="embed-responsive embed-responsive-16by9"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: value,
      }}
    />
  ),
};

const CustomMarkdownRenderer = ({ children, ...props }) => (
  <Markdown {...props} components={components}>
    {children}
  </Markdown>
);

export default CustomMarkdownRenderer;
