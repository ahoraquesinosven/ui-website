import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { toHtml } from 'hast-util-to-html';
import Image from 'react-bootstrap/Image';

const rehypePlugins = [
  rehypeRaw,
];

const components = {
  img: (props) => (
    <Image {...props} fluid rounded className="content-image" />
  ),
  iframe: (element) => (
    <div
      className="embed-responsive embed-responsive-16by9 mb-3"
        // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: toHtml(element.node),
      }}
    />
  ),
};

const CustomMarkdownRenderer = ({ children, ...props }) => (
  <Markdown {...props} components={components} rehypePlugins={rehypePlugins}>
    {children}
  </Markdown>
);

export default CustomMarkdownRenderer;
