import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';
import moment from 'moment';

moment.locale('es');

const ContentUpdateTime = ({ content }) => {
  const updateTime = moment(content.AssociatedContent.updated_at);

  const updateTimeTooltip = (
    <Tooltip>
      {updateTime.calendar()}
    </Tooltip>
  );

  return (
    <OverlayTrigger placement="right" overlay={updateTimeTooltip}>
      <span className="text-muted">{updateTime.fromNow()}</span>
    </OverlayTrigger>
  );
};

const Content = ({ content }) => (
  <>
    <Link {...content.Routing}>
      <a className="text-primary text-decoration-none">
        <svg className="rounded img-fluid" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="#868e96" />
        </svg>
        <h3>{content.Title}</h3>
      </a>
    </Link>
    <ContentUpdateTime content={content} />
    <p>{content.Summary}</p>
  </>
);

const LatestNews = ({ featuredContent }) => (
  <section name="latest-news">
    <h2>Últimas noticias</h2>
    <Row lg={4} md={2} sm={1}>
      {featuredContent.map((content) => (
        <Col key={content.id}>
          <Content content={content} />
        </Col>
      ))}
    </Row>
  </section>
);

export default LatestNews;
