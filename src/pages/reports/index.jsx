import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Head from 'next/head';
import CardForList from '../../components/cardForList';
import { fetchReports, fetchReportCategories } from '../../data/reports';

const SectionBanner = ({ categories }) => (
  <div className="section-header">
    <h2>{categories && categories.length > 0 ? (categories.map((category) => category.title)).join(' - ') : 'Informes'}</h2>
  </div>
);

const Reports = ({ reports, categories }) => (
  <>
    <Head>
      <title>AHORA QUE SI NOS VEN - Informes</title>
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
