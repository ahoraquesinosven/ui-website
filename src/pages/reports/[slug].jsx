import { faCalendarDay, faDownload, faGavel } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Markdown from '../../components/markdown-renderer';
import OptionalImage from '../../components/optional-image';
import AdditionalImagesCarousel from '../../components/additional-images-carousel';
import { fetchReport } from '../../data/reports';

moment.locale('es');


const ReportDetails = ({ report }) => {
  let listGroupResultForLaw;
  let listGroupResultForAttachment;
  if (report.lawNumber) {
    listGroupResultForLaw = (
      <ListGroup.Item>
        <h5>Ley</h5>
        <FontAwesomeIcon icon={faGavel} fixedWidth className="mr-2" />
        {report.lawNumber}
      </ListGroup.Item>
    );
  }
  if (report.attachment) {
    listGroupResultForAttachment = (
      <ListGroup.Item>
        <h5>Descargar Archivo</h5>
        <a rel="noopener noreferrer" target="_blank" href={report.attachment.url}>
          <FontAwesomeIcon icon={faDownload} fixedWidth className="mr-2" />
          {report.attachment.name}
        </a>

      </ListGroup.Item>
    );
  }

  return (
    <ListGroup variant="flush">
      <ListGroup.Item>
        <h5>Inicio del Informe</h5>
        <FontAwesomeIcon icon={faCalendarDay} fixedWidth className="mr-2" />
        {moment(report.fromDate).format('LL')}
      </ListGroup.Item>
      <ListGroup.Item>
        <h5>Fin del Informe</h5>
        <FontAwesomeIcon icon={faCalendarDay} fixedWidth className="mr-2" />
        {moment(report.toDate).format('LL')}
      </ListGroup.Item>
      {listGroupResultForLaw}
      {listGroupResultForAttachment}
    </ListGroup>
  );
};

const Report = ({ report }) => (
  <Container className="mt-5">
    <Row>
      <Col className="detail-header">
        <h1 className="pl-2 pb-2 pt-2">{report.title}</h1>
      </Col>
    </Row>
    <Row>
      <Col lg={3}>
        <ReportDetails report={report} />
      </Col>
      <Col>
        <OptionalImage image={report.mainImage} fluid rounded className="mb-3 content-image" />
        <Markdown source={report.content} />
        <AdditionalImagesCarousel images={report.additionalImages} />
      </Col>
    </Row>
  </Container>
);

export default Report;

export async function getServerSideProps({ params }) {
  const report = await fetchReport(params.slug);

  return {
    props: {
      report,
    },
  };
}
