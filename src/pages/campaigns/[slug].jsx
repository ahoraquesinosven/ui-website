import { faCalendarDay, faGavel } from '@fortawesome/free-solid-svg-icons';
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
    <Breadcrumb.Item active>{campaign.Title}</Breadcrumb.Item>
  </Breadcrumb>
);

const CampaignDetails = ({ campaign }) => {
  let listGroupResult;
  if (campaign.LawNumber) {
    listGroupResult = (
      <ListGroup.Item>
        <h6>Número de Ley</h6>
        <FontAwesomeIcon icon={faGavel} fixedWidth className="mr-2" />
        {campaign.LawNumber}
      </ListGroup.Item>
    );
  }

  return (
    <ListGroup variant="flush">
      <ListGroup.Item>
        <h6>Fecha de Lanzamiento</h6>
        <FontAwesomeIcon icon={faCalendarDay} fixedWidth className="mr-2" />
        {moment(campaign.LaunchDate).format('LL')}
      </ListGroup.Item>
      {listGroupResult}
    </ListGroup>
  );
};


const Campaign = ({ campaign }) => (
  <Container className="mt-2">
    <CampaignBreadcrumbs campaign={campaign} />
    <h1>{campaign.Title}</h1>
    <Row>
      <Col lg={3}>
        <CampaignDetails campaign={campaign} />
      </Col>
      <Col>
        <OptionalImage image={campaign.MainImage} fluid rounded className="mb-3" />
        <Markdown source={campaign.Summary} />
      </Col>
    </Row>
    <Row>
      <p>TODO: Implement the campaigns carrousel</p>
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
