import moment from 'moment';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Markdown from '../../components/markdown-renderer';
import OptionalImage from '../../components/optional-image';
import AdditionalImagesCarousel from '../../components/additional-images-carousel';
import { fetchReport } from '../../data/reports';

moment.locale('es');


const ReportDetails = ({ report }) => {
  let resultForLaw;
  let resultForAttachment;
  if (report.lawNumber) {
    resultForLaw = (
      <>
        <h8 className="pr-1 pl-4"><b>Ley:</b></h8>
        {report.lawNumber}
      </>
    );
  }
  if (report.attachment) {
    resultForAttachment = (
      <div className="text-center mb-2 mt-2">
        <Button variant="primary" href={report.attachment.url} rel="noopener noreferrer" target="_blank">
          <h8 text-color="warning">Descargar</h8>
        </Button>
      </div>
    );
  }

  return (
    <>
      <div className="text-center mb-2">
        <h8 className="pr-1"><b>Inicio:</b></h8>
        {moment(report.fromDate).format('L')}
        <h8 className="pr-1 pl-4"><b>Fin:</b></h8>
        {moment(report.toDate).format('L')}
        {resultForLaw}
      </div>
      {resultForAttachment}
    </>
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
    <OptionalImage image={report.mainImage} fluid rounded className="mt-3 mb-3 content-image" />
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
