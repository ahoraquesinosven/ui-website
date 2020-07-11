import moment from 'moment';
import Head from 'next/head';
import Link from 'next/link';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        <b className="pr-1 pl-4">Ley:</b>
        {report.lawNumber}
      </>
    );
  }
  if (report.attachment) {
    resultForAttachment = (
      <div className="text-center mb-5 mt-2">
        <Button variant="primary" href={report.attachment.url} rel="noopener noreferrer" target="_blank">
          <FontAwesomeIcon icon={faDownload} fixedWidth className="mr-2" />
          <a>Descargar</a>
        </Button>
      </div>
    );
  }

  return (
    <>
      <div className="text-center mb-2">
        <b className="pr-1">Inicio:</b>
        {moment(report.fromDate).format('L')}
        <b className="pr-1 pl-4">Fin:</b>
        {moment(report.toDate).format('L')}
        {resultForLaw}
      </div>
      {resultForAttachment}
    </>
  );
};

const Report = ({ report }) => (
  <>
    <Head>
      <title>AHORA QUE SI NOS VEN - Informes - {report.title}</title>
      <meta name="description" content={report.summary} />
    </Head>
    <Container className="mt-5">
      <div className="detail-header">
        <h1 className="pb-1">{report.title}</h1>
        <Link href={{ pathname: '/reports', query: { category: report.category.slug } }} passHref>
          <a>{report.category.title}</a>
        </Link>
      </div>
      <OptionalImage image={report.mainImage} fluid rounded className="mt-3 mb-3 content-image" />
      <ReportDetails report={report} />
      <Markdown source={report.content} />
      <AdditionalImagesCarousel images={report.additionalImages} />
    </Container>
  </>
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
