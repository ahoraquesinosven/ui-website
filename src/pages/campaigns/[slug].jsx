import { faCalendarDay, faGavel, faDownload } from '@fortawesome/free-solid-svg-icons';
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
import AdditionalImagesCarousel from '../../components/additional-images-carousel';
import fetchCampaign from '../../data/campaigns';

moment.locale('es');

const CampaignBreadcrumbs = ({ campaign }) => (
  <Breadcrumb>
    <Link href="/" passHref>
      <Breadcrumb.Item>Inicio</Breadcrumb.Item>
    </Link>
    <Link href="/campaigns" passHref>
      <Breadcrumb.Item>Campañas</Breadcrumb.Item>
    </Link>
    <Breadcrumb.Item active>{campaign.title}</Breadcrumb.Item>
  </Breadcrumb>
);

const CampaignDetails = ({ campaign }) => {
  let listGroupResultForLaw;
  let listGroupResultForAttachment;
  if (campaign.lawNumber) {
    listGroupResultForLaw = (
      <ListGroup.Item>
        <h5>Ley</h5>
        <FontAwesomeIcon icon={faGavel} fixedWidth className="mr-2" />
        {campaign.lawNumber}
      </ListGroup.Item>
    );
  }
  if (campaign.attachment) {
    listGroupResultForAttachment = (
      <ListGroup.Item>
        <h5>Descargar Archivo</h5>
        <a rel="noopener noreferrer" target="_blank" href={campaign.attachment.url}>
          <FontAwesomeIcon icon={faDownload} fixedWidth className="mr-2" />
          {campaign.attachment.name}
        </a>

      </ListGroup.Item>
    );
  }

  return (
    <ListGroup variant="flush">
      <ListGroup.Item>
        <h5>Lanzamiento</h5>
        <FontAwesomeIcon icon={faCalendarDay} fixedWidth className="mr-2" />
        {moment(campaign.launchDate).format('LL')}
      </ListGroup.Item>
      {listGroupResultForLaw}
      {listGroupResultForAttachment}
    </ListGroup>
  );
};


const Campaign = ({ campaign }) => (
  <Container className="mt-2">
    <CampaignBreadcrumbs campaign={campaign} />
    <h1>{campaign.title}</h1>
    <p>{campaign.summary}</p>
    <Row>
      <Col lg={3}>
        <CampaignDetails campaign={campaign} />
      </Col>
      <Col>
        <OptionalImage image={campaign.mainImage} fluid rounded className="mb-3 content-image" />
        <Markdown source={campaign.content} />
        <AdditionalImagesCarousel images={campaign.additionalImages} />
      </Col>
    </Row>

  </Container>
);

export default Campaign;

export async function getServerSideProps({ params }) {
  const campaign = await fetchCampaign(params.slug);

  return {
    props: {
      campaign,
    },
  };
}
