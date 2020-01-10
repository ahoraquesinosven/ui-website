import Link from 'next/link';
import Layout from '../components/layout';

const Index = () => ( 
  <Layout>
    <p>Este es el root del observatorio</p>
    <Link href='about'>
      <a>Acerca de nosotres</a>
    </Link>
  </Layout>
);

export default Index;
