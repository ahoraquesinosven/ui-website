import Link from 'next/link';
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
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
  activity: 'Actividad',
  media_presence: 'En los medios',
  report: 'Informe',
  campaign: 'Campaña',
};

const Content = ({ content }) => {
  const badge = contentKindTranslation[content.kind];
  let cardImage = null;
  if (content.mainImageUrl) {
    cardImage = <Card.Img variant="top" src={content.mainImageUrl} fluid rounded className="mb-1" width="400" height="250" />;
  }
  return (
    <Link {...contentRouting(content)}>
      <a className="text-primary text-decoration-none">
        <Card className="mb-4  shadow p-3 mb-5 bg-white rounded">
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
            <Card.Text>
              <p className="text-dark">{content.summary}</p>
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
        <Col key={`${content.kind}-${content.id}`}>

          <Content content={content} />
        </Col>
      ))}
    </Row>
  </section>
);

export default LatestNews;
