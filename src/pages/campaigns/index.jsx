import Link from 'next/link';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Date from '../../components/date';
import OptionalImage from '../../components/optional-image';
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


const Campaign = ({ campaign }) => (
  <article>
    <Link href="/campaigns/[slug]" as={`/campaigns/${campaign.slug}`}>
      <a className="text-primary text-decoration-none">
        <h3>{campaign.title}</h3>
        <Date className="text-muted" date={campaign.created_at} format={(date) => date.fromNow()} />
        <OptionalImage image={campaign.mainImage} fluid rounded className="mb-1" />
        <p className="text-dark">{campaign.summary}</p>
      </a>
    </Link>
  </article>
);

const Campaigns = ({ campaigns }) => (
  <Container className="mt-2">
    <CampaignsBreadcrumb />
    <h2 className="mt-2">Campañas</h2>
    <Row lg={3} md={2} sm={1}>
      {campaigns.map((campaign) => (
        <Col key={campaign.id}>
          <Campaign campaign={campaign} />
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
