import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { fetchActivities } from '../../data/activities';
import Markdown from '../../components/markdown-renderer';

const Activities = ({ activities }) => (
  <Container>
    <h2 className="mt-2">Actividades</h2>
    {activities.map((activity) => (
      <article key={activity.id}>
        <h3>{activity.Title}</h3>
        <div style={{ overflow: "hidden", maxHeight: "30vh", textOverflow: "ellipsis" }}>
          <Markdown source={activity.Description} />
        </div>
      </article>
    ))}
  </Container>
);

export default Activities;

export async function getServerSideProps({ query }) {
  const activities = await fetchActivities({
    categoryId: query.category,
  });

  return {
    props: {
      activities: activities,
    },
  };
}
