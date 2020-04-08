import moment from 'moment';
import Link from 'next/link';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import OptionalImage from '../../components/optional-image';
import Markdown from '../../components/markdown-renderer';
import fetchActivity from '../../data/activities';

moment.locale('es');

const ActivityBreadcrumbs = ({ activity }) => (
  <Breadcrumb>
    <Link href="/" passHref>
      <Breadcrumb.Item>Inicio</Breadcrumb.Item>
    </Link>
    <Link href="/activities" passHref>
      <Breadcrumb.Item>Actividades</Breadcrumb.Item>
    </Link>
    <Link href={{ pathname: '/activities', query: { category: activity.Category.id } }} passHref>
      <Breadcrumb.Item>{activity.Category.Title}</Breadcrumb.Item>
    </Link>
    <Breadcrumb.Item active>{activity.Title}</Breadcrumb.Item>
  </Breadcrumb>
);

const ActivityDetails = ({ activity }) => {
  const encodedLocation = encodeURIComponent(activity.Location);
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`;
  return (
    <ListGroup variant="flush">
      <ListGroup.Item>
        <h5>¿Dónde?</h5>
        <a rel="noopener noreferrer" target="_blank" href={mapUrl}>{activity.Location}</a>
      </ListGroup.Item>
      <ListGroup.Item>
        <h5>¿Cuándo?</h5>
        {moment(activity.ActivityDateTime).format('LLL')}
      </ListGroup.Item>
    </ListGroup>
  );
};

const Activity = ({ activity }) => (
  <Container className="mt-2">
    <ActivityBreadcrumbs activity={activity} />
    <h1>{activity.Title}</h1>
    <Row>
      <Col lg={3}>
        <ActivityDetails activity={activity} />
      </Col>
      <Col>
        <OptionalImage image={activity.MainImage} fluid rounded className="mb-3" />
        <Markdown source={activity.Description} />
      </Col>
    </Row>
  </Container>
);

export default Activity;

export async function getServerSideProps({ params }) {
  const activity = await fetchActivity(params.slug);

  return {
    props: {
      activity,
    },
  };
}
