import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Markdown from '../../components/markdown-renderer';
import OptionalImage from '../../components/optional-image';
import { fetchMediaPresence } from '../../data/media-presence';

moment.locale('es');

const MediaPresenceDetails = ({ mediaPresence }) => (
  <div className="text-center mb-2">
    <h8 className="pr-1"><b>Publicación:</b></h8>
    {moment(mediaPresence.publicationDate).format('L')}
    <h8 className="pr-1 pl-5"><b>Medio:</b></h8>
    {mediaPresence.source}
    <a className="pr-1 pl-5" rel="noopener noreferrer" target="_blank" href={mediaPresence.sourceLink}>
      <FontAwesomeIcon icon={faExternalLinkAlt} fixedWidth className="mr-2" />
      Ir a la nota
    </a>
  </div>
);

const MediaPresence = ({ mediaPresence }) => (
  <Container className="mt-2">
    <div className="detail-header">
      <h1 className="pb-1">{mediaPresence.title}</h1>
      <Link href="/media-presence" passHref>
        <a>En los medios</a>
      </Link>
    </div>
    <OptionalImage image={mediaPresence.mainImage} fluid rounded className="mt-3 mb-3 content-image" />
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
