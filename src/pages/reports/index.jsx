import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CardForList from '../../components/cardForList';
import { fetchReports, fetchReportCategory } from '../../data/reports';

const SectionBanner = ({ category }) => (
  <div className="section-header">
    <h2>{category ? category.title : 'Informes'}</h2>
  </div>
);

const Reports = ({ reports, category }) => (
  <>
    <SectionBanner category={category} />
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
  const category = await fetchReportCategory(query.category);
  const reports = await fetchReports({
    category: category ? category.slug : null,
    fromDate: query.fromDate,
  });
  return {
    props: {
      reports,
      category,
    },
  };
}
