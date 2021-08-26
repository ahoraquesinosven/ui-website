import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import Head from 'next/head';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Markdown from '../../components/markdown-renderer';
import OptionalImage from '../../components/optional-image';
import { fetchActivity } from '../../data/activities';

const ActivityDetails = ({ activity }) => {
  const encodedLocation = encodeURIComponent(activity.location);
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`;
  return (
    <div className="text-center mb-5">
      <b className="pr-1">Lugar:</b>
      <a rel="noopener noreferrer" target="_blank" href={mapUrl}>
        <FontAwesomeIcon icon={faMapMarkedAlt} fixedWidth className="mr-2" />
        {activity.location}
      </a>
      <b className="pr-1 pl-4">Fecha:</b>
      {moment(activity.dateTime).format('LLL')}
    </div>
  );
};

const Activity = ({ activity }) => (
  <>
    <Head>
      <title>
        AHORA QUE SI NOS VEN - Actividades -
        {activity.title}
      </title>
      <meta name="description" content={activity.summary} />
    </Head>
    <Container className="mt-2">
      <div className="detail-header">
        <h1 className="pb-1">{activity.title}</h1>
        <Link href={{ pathname: '/activities', query: { category: activity.category.slug } }} passHref>
          <a>{activity.category.title}</a>
        </Link>
      </div>
      <OptionalImage image={activity.mainImage} fluid rounded className="mt-3 mb-3 content-image" />
      <ActivityDetails activity={activity} />
      <Markdown source={activity.content} />
    </Container>
  </>
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
