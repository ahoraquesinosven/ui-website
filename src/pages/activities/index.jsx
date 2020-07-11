import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Head from 'next/head';
import CardForList from '../../components/cardForList';
import { fetchActivities, fetchActivityCategory } from '../../data/activities';

const SectionBanner = ({ category }) => (
  <div className="section-header">
    <h2>{category ? category.title : 'Actividades'}</h2>
  </div>
);

const Activities = ({ activities, category }) => (
  <>
    <Head>
      <title>AHORA QUE SI NOS VEN - Actividades</title>
    </Head>
    <SectionBanner category={category} />
    <Container className="mt-2">
      <Row lg={3} md={2} sm={1}>
        {activities.map((activity) => (
          <Col key={activity.id} className="mb-5">
            <CardForList content={activity} kind="activity" mainDate={activity.dateTime} badge={activity.category.title} />
          </Col>
        ))}
      </Row>
    </Container>
  </>
);

export default Activities;

export async function getServerSideProps({ query }) {
  const category = await fetchActivityCategory(query.category);
  const activities = await fetchActivities({
    category: category ? category.slug : null,
  });

  return {
    props: {
      activities,
      category,
    },
  };
}
