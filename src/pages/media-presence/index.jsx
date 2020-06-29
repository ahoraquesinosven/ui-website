import Link from 'next/link';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CardForList from '../../components/cardForList';
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

const MediaPresences = ({ mediaPresences }) => (
  <Container className="mt-2">
    <MediaPresencesBreadcrumb />
    <h2 className="mt-2">En los Medios</h2>
    <Row lg={3} md={2} sm={1}>
      {mediaPresences.map((mediaPresence) => (
        <Col key={mediaPresence.id} className="mb-5">
          <CardForList content={mediaPresence} kind="media_presence" mainDate={mediaPresence.publicationDate} />
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
