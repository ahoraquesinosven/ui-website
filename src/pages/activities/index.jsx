import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Head from 'next/head';
import CardForList from '../../components/cardForList';
import { fetchActivities, fetchActivityCategory } from '../../data/activities';

const pageTitle = (category) => (category ? category.title : 'Actividades');

const SectionBanner = ({ category }) => (
  <div className="section-header">
    <h2>{pageTitle(category)}</h2>
  </div>
);

const Activities = ({ activities, category }) => (
  <>
    <Head>
      <title>{`AHORA QUE SI NOS VEN - ${pageTitle(category)}`}</title>
      <meta name="description" content="El Observatorio pretende ser un espacio de producción de información, conocimiento y formación puesto al servivio de las grandes mayorias silenciadas de nuestro país. Lo integramos personas que provenimos de distintas experiencias de formación y participación, a su vez que es un espacio abierto a la incorporación de distintos saberes. Asumimos el feminismo popular como identidad desde la cual estructuramos nuestro pensamiento, trabajo y acción. Somos parte del movimiento Marea Feminista Popular y Disidente." />
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
