import Link from 'next/link';
import Badge from 'react-bootstrap/Badge';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Date from '../../components/date';
import OptionalImage from '../../components/optional-image';
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

const Report = ({ report }) => (
  <article>
    <Link href="/reports/[slug]" as={`/reports/${report.slug}`}>
      <a className="text-primary text-decoration-none">
        <h3>{report.title}</h3>
        <Date className="text-muted" date={report.toDate} format={(date) => date.fromNow()} />
        <OptionalImage image={report.mainImage} fluid rounded className="mb-1" />
        <div>
          <Badge variant="primary">{report.category.title}</Badge>
        </div>
        <p className="text-dark">{report.summary}</p>
      </a>
    </Link>
  </article>
);

const Reports = ({ reports, category }) => (
  <Container className="mt-2">
    <ReportsBreadcrumb category={category} />
    <h2 className="mt-2">Informes</h2>
    <Row lg={3} md={2} sm={1}>
      {reports.map((report) => (
        <Col key={report.id}>
          <Report report={report} />
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
  });

  return {
    props: {
      reports,
      category,
    },
  };
}
