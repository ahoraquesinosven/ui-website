import moment from 'moment';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Markdown from '../../components/markdown-renderer';
import OptionalImage from '../../components/optional-image';
import AdditionalImagesCarousel from '../../components/additional-images-carousel';
import { fetchCampaign } from '../../data/campaigns';

moment.locale('es');


const CampaignDetails = ({ campaign }) => {
  let resultForLaw;
  let resultForAttachment;
  if (campaign.lawNumber) {
    resultForLaw = (
      <>
        <h8 className="pr-1 pl-4"><b>Ley:</b></h8>
        {campaign.lawNumber}
      </>
    );
  }
  if (campaign.attachment) {
    resultForAttachment = (
      <div className="text-center mb-2 mt-2">
        <Button variant="primary" href={campaign.attachment.url} rel="noopener noreferrer" target="_blank">
          <h8 text-color="warning">Descargar</h8>
        </Button>
      </div>
    );
  }

  return (
    <>
      <div className="text-center mb-2">
        <h8 className="pr-1"><b>Fecha de Lanzamiento:</b></h8>
        {moment(campaign.launchDate).format('L')}
        {resultForLaw}
      </div>
      {resultForAttachment}
    </>
  );
};


const Campaign = ({ campaign }) => (
  <Container className="mt-2">
    <div className="detail-header">
      <h1 className="pb-1">{campaign.title}</h1>
      <Link href="/campaigns" passHref>
        <a>Campaña</a>
      </Link>
    </div>
    <OptionalImage image={campaign.mainImage} fluid rounded className="mt-3 mb-3 content-image" />
    <CampaignDetails campaign={campaign} />
    <Markdown source={campaign.content} />
    <AdditionalImagesCarousel images={campaign.additionalImages} />
  </Container>
);

export default Campaign;

export async function getServerSideProps({ params }) {
  const campaign = await fetchCampaign(params.slug);

  return {
    props: {
      campaign,
    },
  };
}
