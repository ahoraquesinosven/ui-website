import Link from 'next/link';
import Badge from 'react-bootstrap/Badge';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Date from '../../components/date';
import OptionalImage from '../../components/optional-image';
import { fetchActivities, fetchActivityCategory } from '../../data/activities';

const ActivitiesBreadcrumb = ({ category }) => {
  let categoryBreadcrumb = null;
  if (category) {
    categoryBreadcrumb = (
      <Link href={{ pathname: '/activities', query: { category: category.slug } }} passHref>
        <Breadcrumb.Item>{category.title}</Breadcrumb.Item>
      </Link>
    );
  }
  return (
    <Breadcrumb>
      <Link href="/" passHref>
        <Breadcrumb.Item>Inicio</Breadcrumb.Item>
      </Link>
      <Link href="/activities" passHref>
        <Breadcrumb.Item>Actividades</Breadcrumb.Item>
      </Link>
      {categoryBreadcrumb}
    </Breadcrumb>
  );
};

const Activity = ({ activity }) => (
  <article>
    <Link href="/activities/[slug]" as={`/activities/${activity.slug}`}>
      <a className="text-primary text-decoration-none">
        <h3>{activity.title}</h3>
        <Date className="text-muted" date={activity.dateTime} format={(date) => date.fromNow()} />
        <OptionalImage image={activity.mainImage} fluid rounded className="mb-1" />
        <div>
          <Badge variant="primary">{activity.category.title}</Badge>
        </div>
        <p className="text-dark">{activity.summary}</p>
      </a>
    </Link>
  </article>
);

const Activities = ({ activities, category }) => (
  <Container className="mt-2">
    <ActivitiesBreadcrumb category={category} />
    <h2 className="mt-2">Actividades</h2>
    <Row lg={3} md={2} sm={1}>
      {activities.map((activity) => (
        <Col key={activity.id}>
          <Activity activity={activity} />
        </Col>
      ))}
    </Row>
  </Container>
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
