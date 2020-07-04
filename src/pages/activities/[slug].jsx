import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Markdown from '../../components/markdown-renderer';
import OptionalImage from '../../components/optional-image';
import { fetchActivity } from '../../data/activities';

moment.locale('es');

const ActivityDetails = ({ activity }) => {
  const encodedLocation = encodeURIComponent(activity.location);
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`;
  return (
    <div className="text-center mb-2">
      <h8 className="pr-1"><b>Lugar:</b></h8>
      <a rel="noopener noreferrer" target="_blank" href={mapUrl}>
        <FontAwesomeIcon icon={faMapMarkedAlt} fixedWidth className="mr-2" />
        {activity.location}
      </a>
      <h8 className="pr-1 pl-4"><b>Fecha:</b></h8>
      {moment(activity.dateTime).format('LLL')}
    </div>
  );
};

const Activity = ({ activity }) => (
  <Container className="mt-2">
    <div className="detail-header">
      <h1 className="pb-1">{activity.title}</h1>
      <Link href={{ pathname: '/activities', query: { category: activity.category.slug } }} passHref>
        <a><h7 className="text-secondary">{activity.category.title}</h7></a>
      </Link>
    </div>
    <OptionalImage image={activity.mainImage} fluid rounded className="mt-3 mb-3 content-image" />
    <ActivityDetails activity={activity} />
    <Markdown source={activity.content} />
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
