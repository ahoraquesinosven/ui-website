import { faInstagramSquare, faTwitterSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Markdown from '../components/markdown-renderer';
import OptionalImage from '../components/optional-image';
import { fetchAboutUs, fetchMembers, fetchCollaborators } from '../data/about-us-members';

const MemberSocialLinks = ({ member }) => {
  let twitterLink;
  let instagramLink;
  let linkedInLink;
  if (member.twitter) {
    twitterLink = (
      <Card.Link href={member.twitter} rel="noopener noreferrer" target="_blank" aria-label={`Twitter de ${member.name}`}>
        <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
      </Card.Link>
    );
  }
  if (member.instagram) {
    instagramLink = (
      <Card.Link href={member.instagram} rel="noopener noreferrer" target="_blank" aria-label={`Instagram de ${member.name}`}>
        <FontAwesomeIcon icon={faInstagramSquare} size="2x" />
      </Card.Link>
    );
  }
  if (member.linkedIn) {
    linkedInLink = (
      <Card.Link href={member.linkedIn} rel="noopener noreferrer" target="_blank" aria-label={`LinkedIn de ${member.name}`}>
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
  <Card className="mb-4" style={{ height: '100%' }}>
    <Card.Img variant="top" src={member.photo.url} alt={member.photo.alternativeText} style={{ height: '15em', objectFit: 'cover', objectPosition: 'top' }} />
    <Card.Body>
      <Card.Title>{member.name}</Card.Title>
      <Card.Text>
        {member.content}
      </Card.Text>
      <MemberSocialLinks member={member} />
    </Card.Body>
  </Card>
);

const AboutUs = ({ aboutUs, members, collaborators }) => (
  <>
    <div className="section-header">
      <h2>{aboutUs.title}</h2>
    </div>
    <Container className="mt-2">
      <OptionalImage image={aboutUs.cover} fluid rounded className="mb-3 content-image" />
      <Markdown>
        {aboutUs.content}
      </Markdown>
      <h2>Equipo</h2>
      <Row lg={3} md={2} sm={1} xs={1}>
        {members.map((member) => (
          <Col className="mb-4" key={member.id}>
            <Member member={member} />
          </Col>
        ))}
      </Row>
      <h2>Colaboradoras</h2>
      <Row lg={3} md={2} sm={1} xs={1}>
        {collaborators.map((member) => (
          <Col className="mb-4" key={member.id}>
            <Member member={member} />
          </Col>
        ))}
      </Row>
    </Container>
  </>
);

export default AboutUs;

export async function getServerSideProps() {
  const aboutUs = await fetchAboutUs();
  const members = await fetchMembers();
  const collaborators = await fetchCollaborators();

  return {
    props: {
      aboutUs,
      members,
      collaborators,
    },
  };
}
