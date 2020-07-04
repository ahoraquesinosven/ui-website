import { faCalendarDay, faDownload, faGavel } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
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
    <div className="detail-header">
      <h1 className="pb-1">{report.title}</h1>
      <Link href={{ pathname: '/reports', query: { category: report.category.slug } }} passHref>
        <a><h7 className="text-secondary">{report.category.title}</h7></a>
      </Link>
    </div>
    <OptionalImage image={report.mainImage} fluid rounded className="mb-3 content-image" />
    <ReportDetails report={report} />
    <Markdown source={report.content} />
    <AdditionalImagesCarousel images={report.additionalImages} />
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
