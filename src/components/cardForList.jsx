import Link from 'next/link';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Date from './date';

const contentBaseUrls = {
  activity: '/activities',
  media_presence: '/media-presence',
  report: '/reports',
  campaign: '/campaigns',
};

const contentRouting = (content, kind) => {
  const baseUrl = contentBaseUrls[kind];
  return {
    href: `${baseUrl}/[slug]`,
    as: `${baseUrl}/${content.slug}`,
  };
};


const contentKindTranslation = {
  activity: 'Activity',
  media_presence: 'En los medios',
  report: 'Informe',
  campaign: 'Campaña',
};

const categoryByKind = {
  activity: 'category',
  media_presence: null,
  report: 'category',
  campaign: null,
};

const GetBadge = ({ content, kind, isHome }) => {
  let badge = null;
  if (isHome) {
    badge = contentKindTranslation[kind];
  } else if (categoryByKind[kind]) {
    badge = content.category.title;
  }
  return <Badge variant="primary">{badge}</Badge>;
};

const CardForList = ({ content, kind, mainDate, isHome }) => {

  let cardImage = null;
  if (content.mainImageUrl) {
    cardImage = <Card.Img variant="top" src={content.mainImageUrl} className="mb-1 fluid rounded" />;
  } else {
    cardImage = <Card.Img variant="top" src={content.mainImage.url} className="mb-1 fluid rounded" />;
  }

  return (
    <Link {...contentRouting(content, kind)}>
      <a className="text-primary text-decoration-none">
        <Card className="shadow p-3 bg-white rounded" style={{ height: '100%' }}>
          {cardImage}
          <Card.Body>
            <Card.Title className="text-uppercase">{content.title}</Card.Title>
            <p>
              <GetBadge content={content} kind={kind} isHome={isHome} />
              &nbsp;|
              <Badge>
                <Date className="text-muted" date={mainDate} format={(date) => date.fromNow()} />
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


export default CardForList;
