import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Head from 'next/head';
import CardForList from '../../components/cardForList';
import { fetchCampaigns } from '../../data/campaigns';


const Campaigns = ({ campaigns }) => (
  <>
    <Head>
      <title>AHORA QUE SI NOS VEN - Campañas</title>
    </Head>
    <div className="section-header">
      <h2>Campañas</h2>
    </div>
    <Container className="mt-2">
      <Row lg={3} md={2} sm={1}>
        {campaigns.map((campaign) => (
          <Col key={campaign.id} className="mb-5">
            <CardForList content={campaign} kind="campaign" mainDate={campaign.launchDate} />
          </Col>
        ))}
      </Row>
    </Container>
  </>
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
