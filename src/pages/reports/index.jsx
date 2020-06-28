import Link from 'next/link';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CardForList from '../../components/cardForList';
import { fetchReports, fetchReportCategory } from '../../data/reports';

const ReportsBreadcrumb = ({ category }) => {
  let categoryBreadcrumb = null;
  if (category) {
    categoryBreadcrumb = (
      <Link href={{ pathname: '/reports', query: { category: category.slug } }} passHref>
        <Breadcrumb.Item>{category.title}</Breadcrumb.Item>
      </Link>
    );
  }
  return (
    <Breadcrumb>
      <Link href="/" passHref>
        <Breadcrumb.Item>Inicio</Breadcrumb.Item>
      </Link>
      <Link href="/reports" passHref>
        <Breadcrumb.Item>Informes</Breadcrumb.Item>
      </Link>
      {categoryBreadcrumb}
    </Breadcrumb>
  );
};

const Reports = ({ reports, category }) => (
  <Container className="mt-2">
    <ReportsBreadcrumb category={category} />
    <h2 className="mt-2">Informes</h2>
    <Row lg={3} md={2} sm={1}>
      {reports.map((report) => (
        <Col key={report.id} className="mb-5">
          <CardForList content={report} kind="report" mainDate={report.toDate} badge={report.category.title} />
        </Col>
      ))}
    </Row>
  </Container>
);

export default Reports;

export async function getServerSideProps({ query }) {
  const category = await fetchReportCategory(query.category);
  const reports = await fetchReports({
    category: category ? category.slug : null,
    fromDate: query.date,
  });
  return {
    props: {
      reports,
      category,
    },
  };
}
