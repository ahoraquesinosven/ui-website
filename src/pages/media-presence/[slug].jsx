import { faCalendarDay, faNewspaper, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Markdown from '../../components/markdown-renderer';
import OptionalImage from '../../components/optional-image';
import { fetchMediaPresence } from '../../data/media-presence';

moment.locale('es');

const MediaPresenceDetails = ({ mediaPresence }) => (
  <ListGroup variant="flush">
    <ListGroup.Item>
      <h5>Publicación</h5>
      <FontAwesomeIcon icon={faCalendarDay} fixedWidth className="mr-2" />
      {moment(mediaPresence.publicationDate).format('LL')}
    </ListGroup.Item>
    <ListGroup.Item>
      <h5>Medio</h5>
      <FontAwesomeIcon icon={faNewspaper} fixedWidth className="mr-2" />
      {mediaPresence.source}
    </ListGroup.Item>
    <ListGroup.Item>
      <h5>Nota Original</h5>
      <a rel="noopener noreferrer" target="_blank" href={mediaPresence.sourceLink}>
        <FontAwesomeIcon icon={faExternalLinkAlt} fixedWidth className="mr-2" />
        Ir a la nota
      </a>
    </ListGroup.Item>
  </ListGroup>
);

const MediaPresence = ({ mediaPresence }) => (
  <Container className="mt-2">
    <div className="detail-header">
      <h1 className="pb-1">{mediaPresence.title}</h1>
      <Link href="/media-presence" passHref>
        <a>En los medios</a>
      </Link>
    </div>
    <OptionalImage image={mediaPresence.mainImage} fluid rounded className="mb-3 content-image" />
    <MediaPresenceDetails mediaPresence={mediaPresence} />
    <Markdown source={mediaPresence.content} />
  </Container>
);

export default MediaPresence;

export async function getServerSideProps({ params }) {
  const mediaPresence = await fetchMediaPresence(params.slug);

  return {
    props: {
      mediaPresence,
    },
  };
}
