import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Head from 'next/head';
import CardForList from '../../components/cardForList';
import { fetchReports, fetchReportCategories } from '../../data/reports';

const pageTitle = (categories) => {
  if (categories && categories.length > 0) {
    return categories
      .map((category) => category.title)
      .join(' - ');
  }

  return 'Informes';
};

const SectionBanner = ({ categories }) => (
  <div className="section-header">
    <h2>{pageTitle(categories)}</h2>
  </div>
);

const Reports = ({ reports, categories }) => (
  <>
    <Head>
      <title>{`AHORA QUE SI NOS VEN - ${pageTitle(categories)}`}</title>
      <meta name="description" content="Desde el Observatorio AQSNV comenzamos a relevar los femicidios en la Argentina a partir del análisis de medios gráficos y digitales de todo el país luego de la gran movilización del 3 de junio del 2015 en la que la sociedad entera exigió Ni Una Menos. De igual manera realizamos monitoreo de leyes e investigaciones relativas a los distintos tipos de violencias que sufrimos las mujeres, trans, travestis, lesbianas y personas no binaries en todos los ámbitos en los que desarrollamos nuestras relaciones interpersonales: hogar, trabajo, espacio públicos, instituciones educativas, etc." />
    </Head>
    <SectionBanner categories={categories} />
    <Container className="mt-2">
      <Row lg={3} md={2} sm={1}>
        {reports.map((report) => (
          <Col key={report.id} className="mb-5">
            <CardForList content={report} kind="report" mainDate={report.toDate} badge={report.category.title} />
          </Col>
        ))}
      </Row>
    </Container>
  </>
);

export default Reports;

export async function getServerSideProps({ query }) {
  let categorySlugs;
  if (Array.isArray(query.category)) {
    categorySlugs = query.category;
  } else if (query.category) {
    categorySlugs = [query.category];
  }
  const categories = await fetchReportCategories(categorySlugs);

  let categoryExcludedSlugs;
  if (Array.isArray(query.categoryExcluded)) {
    categoryExcludedSlugs = query.categoryExcluded;
  } else if (query.categoryExcluded) {
    categoryExcludedSlugs = [query.categoryExcluded];
  }
  const categoriesExcluded = await fetchReportCategories(categoryExcludedSlugs);

  const reports = await fetchReports({
    categories: categories ? (categories.map((category) => category.slug)) : null,
    categoriesExcluded: categoriesExcluded
      ? (categoriesExcluded.map((categoryExcluded) => categoryExcluded.slug)) : null,
    fromDate: query.fromDate,
  });
  return {
    props: {
      reports,
      categories,
      categoriesExcluded,
    },
  };
}
