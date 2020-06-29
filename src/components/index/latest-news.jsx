import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardForList from '../cardForList';

const contentKindTranslation = {
  activity: 'Actividad',
  media_presence: 'En los medios',
  report: 'Informe',
  campaign: 'Campaña',
};


const LatestNews = ({ featuredContent }) => (
  <section name="latest-news">
    <h2>Últimas noticias</h2>
    <Row lg={3} md={2} sm={1}>
      {featuredContent.map((content) => (
        <Col key={`${content.kind}-${content.id}`} className="mb-5">
          <CardForList
            content={content}
            kind={content.kind}
            mainDate={content.mainDate}
            badge={contentKindTranslation[content.kind]}
          />
        </Col>
      ))}
    </Row>
  </section>
);

export default LatestNews;
