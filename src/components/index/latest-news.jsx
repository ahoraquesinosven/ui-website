import Link from 'next/link';
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Date from '../date';
import OptionalImage from '../optional-image';

const contentBaseUrls = {
  activity: '/activities',
  media_presence: '/media-presence',
  report: '/reports',
  campaign: '/campaigns',
};

const contentRouting = (content) => {
  const baseUrl = contentBaseUrls[content.kind];
  return {
    href: `${baseUrl}/[slug]`,
    as: `${baseUrl}/${content.slug}`,
  };
};

const contentKindTranslation = {
  activity: 'actividad',
  media_presence: 'en los medios',
  report: 'informe',
  campaign: 'campaña',
};

const Content = ({ content }) => {
  const badge = contentKindTranslation[content.kind];

  return (
    <Link {...contentRouting(content)}>
      <a className="text-primary text-decoration-none">
        <h3>{content.title}</h3>
        <Date className="text-muted" date={content.mainDate} format={(date) => date.fromNow()} />
        <OptionalImage url={content.mainImageUrl} fluid rounded className="mb-1" />
        <div>
          <Badge variant="primary">{badge}</Badge>
        </div>
        <p className="text-dark">{content.summary}</p>
      </a>
    </Link>
  );
};


const LatestNews = ({ featuredContent }) => (
  <section name="latest-news">
    <h2>Últimas noticias</h2>
    <Row lg={3} md={2} sm={1}>
      {featuredContent.map((content) => (
        <Col key={`${content.kind}-${content.id}`}>
          <Content content={content} />
        </Col>
      ))}
    </Row>
  </section>
);

export default LatestNews;
