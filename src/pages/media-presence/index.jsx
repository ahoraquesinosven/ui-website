import Link from 'next/link';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Date from '../../components/date';
import OptionalImage from '../../components/optional-image';
import { fetchMediaPresences } from '../../data/media-presence';

const MediaPresencesBreadcrumb = () => (
  <Breadcrumb>
    <Link href="/" passHref>
      <Breadcrumb.Item>Inicio</Breadcrumb.Item>
    </Link>
    <Link href="/media-presence" passHref>
      <Breadcrumb.Item>En los Medios</Breadcrumb.Item>
    </Link>
  </Breadcrumb>
);


const MediaPresence = ({ mediaPresence }) => (
  <article>
    <Link href="/media-presence/[slug]" as={`/media-presence/${mediaPresence.slug}`}>
      <a className="text-primary text-decoration-none">
        <h3>{mediaPresence.title}</h3>
        <Date className="text-muted" date={mediaPresence.created_at} format={(date) => date.fromNow()} />
        <OptionalImage image={mediaPresence.mainImage} fluid rounded className="mb-1" />
        <p className="text-dark">{mediaPresence.summary}</p>
      </a>
    </Link>
  </article>
);

const MediaPresences = ({ mediaPresences }) => (
  <Container className="mt-2">
    <MediaPresencesBreadcrumb />
    <h2 className="mt-2">En los Medios</h2>
    <Row lg={3} md={2} sm={1}>
      {mediaPresences.map((mediaPresence) => (
        <Col key={mediaPresence.id}>
          <MediaPresence mediaPresence={mediaPresence} />
        </Col>
      ))}
    </Row>
  </Container>
);

export default MediaPresences;

export async function getServerSideProps() {
  const mediaPresences = await fetchMediaPresences();

  return {
    props: {
      mediaPresences,
    },
  };
}
