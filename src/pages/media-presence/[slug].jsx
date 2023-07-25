import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import Head from 'next/head';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Markdown from '../../components/markdown-renderer';
import OptionalImage from '../../components/optional-image';
import { fetchMediaPresence } from '../../data/media-presence';

const MediaPresenceDetails = ({ mediaPresence }) => (
  <div className="text-center mb-5">
    <b className="pr-1">Publicación:</b>
    {moment(mediaPresence.publicationDate).format('L')}
    <b className="pr-1 pl-5">Medio:</b>
    {mediaPresence.source}
    <a className="pr-1 pl-5" rel="noopener noreferrer" target="_blank" href={mediaPresence.sourceLink}>
      <FontAwesomeIcon icon={faExternalLinkAlt} fixedWidth className="mr-2" />
      Ir a la nota
    </a>
  </div>
);

const MediaPresence = ({ mediaPresence }) => (
  <>
    <Head>
      <title>
        AHORA QUE SI NOS VEN - En los medios -
        {mediaPresence.title}
      </title>
      <meta name="description" content={mediaPresence.summary} />
    </Head>
    <Container className="mt-2">
      <div className="detail-header">
        <h1 className="pb-1">{mediaPresence.title}</h1>
        <Link href="/media-presence" passHref>
          En los medios
        </Link>
      </div>
      <OptionalImage image={mediaPresence.mainImage} fluid rounded className="mt-3 mb-3 content-image" />
      <MediaPresenceDetails mediaPresence={mediaPresence} />
      <Markdown>
        {mediaPresence.content}
      </Markdown>
    </Container>
  </>
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
