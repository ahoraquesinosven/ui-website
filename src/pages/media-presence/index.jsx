import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Head from 'next/head';
import CardForList from '../../components/cardForList';
import { fetchMediaPresences } from '../../data/media-presence';

const MediaPresences = ({ mediaPresences }) => (
  <>
    <Head>
      <title>AHORA QUE SI NOS VEN - En los medios</title>
    </Head>
    <div className="section-header">
      <h2>En los Medios</h2>
    </div>
    <Container className="mt-2">
      <Row lg={3} md={2} sm={1}>
        {mediaPresences.map((mediaPresence) => (
          <Col key={mediaPresence.id} className="mb-5">
            <CardForList content={mediaPresence} kind="media_presence" mainDate={mediaPresence.publicationDate} />
          </Col>
        ))}
      </Row>
    </Container>
  </>
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
