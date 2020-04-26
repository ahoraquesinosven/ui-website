import { faInstagramSquare, faTwitterSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Markdown from '../components/markdown-renderer';
import OptionalImage from '../components/optional-image';
import { fetchAboutUs, fetchMembers } from '../data/about-us-members';

const AboutUsBreadcrumbs = () => (
  <Breadcrumb>
    <Link href="/" passHref>
      <Breadcrumb.Item>Inicio</Breadcrumb.Item>
    </Link>
    <Link href="/about" passHref>
      <Breadcrumb.Item>Quienes Somos</Breadcrumb.Item>
    </Link>
  </Breadcrumb>
);

const MemberSocialLinks = ({ member }) => {
  let twitterLink;
  let instagramLink;
  let linkedInLink;
  if (member.twitter) {
    twitterLink = (
      <Card.Link href={member.twitter}>
        <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
      </Card.Link>
    );
  }
  if (member.instagram) {
    instagramLink = (
      <Card.Link href={member.instagram}>
        <FontAwesomeIcon icon={faInstagramSquare} size="2x" />
      </Card.Link>
    );
  }
  if (member.linkedIn) {
    linkedInLink = (
      <Card.Link href={member.linkedIn}>
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </Card.Link>
    );
  }

  return (
    <>
      {twitterLink}
      {instagramLink}
      {linkedInLink}
    </>
  );
};


const Member = ({ member }) => (
  <Card className="mb-4">
    <Card.Img variant="top" src={member.photo.url} style={{ height: '15em', objectFit: 'cover', objectPosition: 'top' }} />
    <Card.Body>
      <Card.Title>{member.name}</Card.Title>
      <Card.Text>
        {member.content}
      </Card.Text>
      <MemberSocialLinks member={member} />
    </Card.Body>
  </Card>
);

const AboutUs = ({ aboutUs, members }) => (
  <Container className="mt-2">
    <AboutUsBreadcrumbs />
    <h1>{aboutUs.title}</h1>
    <OptionalImage image={aboutUs.cover} fluid rounded className="mb-3 content-image" />
    <Markdown source={aboutUs.content} />
    <h2>Equipo</h2>
    <Row lg={3} md={2} sm={1}>
      {members.map((member) => (
        <Col key={member.id}>
          <Member member={member} />
        </Col>
      ))}
    </Row>
  </Container>
);

export default AboutUs;

export async function getServerSideProps() {
  const aboutUs = await fetchAboutUs();
  const members = await fetchMembers();

  return {
    props: {
      aboutUs,
      members,
    },
  };
}
