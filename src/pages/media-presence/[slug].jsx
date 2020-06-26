import { faCalendarDay, faNewspaper, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
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
import { fetchMediaPresence } from '../../data/media-presence';

moment.locale('es');

const MediaPresenceBreadcrumbs = ({ mediaPresence }) => (
  <Breadcrumb>
    <Link href="/" passHref>
      <Breadcrumb.Item>Inicio</Breadcrumb.Item>
    </Link>
    <Link href="/media-presence" passHref>
      <Breadcrumb.Item>En los medios</Breadcrumb.Item>
    </Link>
    <Breadcrumb.Item active>{mediaPresence.title}</Breadcrumb.Item>
  </Breadcrumb>
);

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
    <MediaPresenceBreadcrumbs mediaPresence={mediaPresence} />
    <h1>{mediaPresence.title}</h1>
    <Row>
      <Col lg={3}>
        <MediaPresenceDetails mediaPresence={mediaPresence} />
      </Col>
      <Col>
        <OptionalImage image={mediaPresence.mainImage} fluid rounded className="mb-3 content-image" />
        <Markdown source={mediaPresence.content} />
      </Col>
    </Row>
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
