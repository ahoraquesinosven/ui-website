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
import { fetchArticle } from '../../data/articles';

const ArticleDetails = ({ article }) => {
  let resultForAttachment;
  let resultForAuthor;
  if (article.author) {
    resultForAuthor = (
      <>
        <b className="pr-1 pl-4">Por:</b>
        {article.author.name}
      </>
    );
  }
  if (article.attachment && article.attachment > 0) {
    resultForAttachment = (
      <div className="text-center mb-5 mt-2">
        <Button variant="primary" href={article.attachment.url} rel="noopener noreferrer" target="_blank">
          <FontAwesomeIcon icon={faDownload} fixedWidth className="mr-2" />
          <a>Descargar</a>
        </Button>
      </div>
    );
  }

  return (
    <>
      <div className="text-center mb-2">
        <b className="pr-1">Fecha:</b>
        {moment(article.articleDate).format('L')}
        {resultForAuthor}
      </div>
      {resultForAttachment}
    </>
  );
};

const Article = ({ article }) => (
  <>
    <Head>
      <title>
        AHORA QUE SI NOS VEN - Artículos -
        {article.title}
      </title>
      <meta name="description" content={article.summary} />
    </Head>
    <Container className="mt-5">
      <div className="detail-header">
        <h1 className="pb-1">{article.title}</h1>
        <Link href={{ pathname: '/articles', query: { category: article.category.slug } }} passHref>
          {article.category.title}
        </Link>
      </div>
      <OptionalImage image={article.mainImage} fluid rounded className="mt-3 mb-3 content-image" />
      <ArticleDetails article={article} />
      <Markdown source={article.content} />
      <AdditionalImagesCarousel images={article.additionalImages} />
    </Container>
  </>
);

export default Article;

export async function getServerSideProps({ params }) {
  const article = await fetchArticle(params.slug);

  return {
    props: {
      article,
    },
  };
}
