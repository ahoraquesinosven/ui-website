import { faCalendarDay, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import Link from 'next/link';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Markdown from '../../components/markdown-renderer';
import OptionalImage from '../../components/optional-image';
import { fetchActivity } from '../../data/activities';

moment.locale('es');

const ActivityBreadcrumbs = ({ activity }) => (
  <Breadcrumb>
    <Link href="/" passHref>
      <Breadcrumb.Item>Inicio</Breadcrumb.Item>
    </Link>
    <Link href="/activities" passHref>
      <Breadcrumb.Item>Actividades</Breadcrumb.Item>
    </Link>
    <Link href={{ pathname: '/activities', query: { category: activity.category.slug } }} passHref>
      <Breadcrumb.Item>{activity.category.title}</Breadcrumb.Item>
    </Link>
    <Breadcrumb.Item active>{activity.title}</Breadcrumb.Item>
  </Breadcrumb>
);

const ActivityDetails = ({ activity }) => {
  const encodedLocation = encodeURIComponent(activity.location);
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`;
  return (
    <ListGroup variant="flush">
      <ListGroup.Item>
        <h5>¿Dónde?</h5>
        <a rel="noopener noreferrer" target="_blank" href={mapUrl}>
          <FontAwesomeIcon icon={faMapMarkedAlt} fixedWidth className="mr-2" />
          {activity.location}
        </a>
      </ListGroup.Item>
      <ListGroup.Item>
        <h5>¿Cuándo?</h5>
        <FontAwesomeIcon icon={faCalendarDay} fixedWidth className="mr-2" />
        {moment(activity.activityDateTime).format('LLL')}
      </ListGroup.Item>
    </ListGroup>
  );
};

const Activity = ({ activity }) => (
  <Container className="mt-2">
    <ActivityBreadcrumbs activity={activity} />
    <h1>{activity.title}</h1>
    <p>{activity.summary}</p>
    <Row>
      <Col lg={3}>
        <ActivityDetails activity={activity} />
      </Col>
      <Col>
        <OptionalImage image={activity.mainImage} fluid rounded className="mb-3 content-image" />
        <Markdown source={activity.content} />
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
