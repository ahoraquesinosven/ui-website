import Link from 'next/link';
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Date from '../date';

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
  activity: 'Actividad',
  media_presence: 'En los medios',
  report: 'Informe',
  campaign: 'Campaña',
};

const Content = ({ content }) => {
  const badge = contentKindTranslation[content.kind];
  let cardImage = null;
  if (content.mainImageUrl) {
    cardImage = <Card.Img variant="top" src={content.mainImageUrl} className="mb-1 fluid rounded" />;
  }
  return (
    <Link {...contentRouting(content)}>
      <a className="text-primary text-decoration-none">
        <Card className="shadow p-3 bg-white rounded" style={{ height: '100%' }}>
          {cardImage}
          <Card.Body>
            <Card.Title className="text-uppercase">{content.title}</Card.Title>
            <p>
              <Badge variant="primary">{badge}</Badge>
              &nbsp;|
              <Badge>
                <Date className="text-muted" date={content.mainDate} format={(date) => date.fromNow()} />
              </Badge>
            </p>
            <Card.Text className="text-dark">
              {content.summary}
            </Card.Text>
          </Card.Body>
        </Card>
      </a>
    </Link>
  );
};


const LatestNews = ({ featuredContent }) => (
  <section name="latest-news">
    <h2>Últimas noticias</h2>
    <Row lg={3} md={2} sm={1}>
      {featuredContent.map((content) => (
        <Col key={`${content.kind}-${content.id}`} className="mb-5">

          <Content content={content} />
        </Col>
      ))}
    </Row>
  </section>
);

export default LatestNews;
