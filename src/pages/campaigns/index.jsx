import Link from 'next/link';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CardForList from '../../components/cardForList';
import { fetchCampaigns } from '../../data/campaigns';

const CampaignsBreadcrumb = () => (
  <Breadcrumb>
    <Link href="/" passHref>
      <Breadcrumb.Item>Inicio</Breadcrumb.Item>
    </Link>
    <Link href="/activities" passHref>
      <Breadcrumb.Item>Campañas</Breadcrumb.Item>
    </Link>
  </Breadcrumb>
);

const Campaigns = ({ campaigns }) => (
  <Container className="mt-2">
    <CampaignsBreadcrumb />
    <h2 className="mt-2">Campañas</h2>
    <Row lg={3} md={2} sm={1}>
      {campaigns.map((campaign) => (
        <Col key={campaign.id} className="mb-5">
          <CardForList content={campaign} kind="campaign" mainDate={campaign.launchDate} />
        </Col>
      ))}
    </Row>
  </Container>
);

export default Campaigns;

export async function getServerSideProps() {
  const campaigns = await fetchCampaigns();

  return {
    props: {
      campaigns,
    },
  };
}
