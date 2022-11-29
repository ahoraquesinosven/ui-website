import moment from 'moment';
import 'moment/locale/es';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/main.scss';
import { config } from '@fortawesome/fontawesome-svg-core';
import Head from 'next/head';
import Header from '../components/index/header';
import Footer from '../components/index/footer';

moment.locale('es');
config.autoAddCss = false;

const Application = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>AHORA QUE SI NOS VEN - Observatorio de las violencias de género</title>
      <meta name="description" content="Observatorio de las violencias de género que tiene como objetivo visibilizar y denunciar las violencias machistas que afectan la libertad de las mujeres, trans, travestis, lesbianas y personas no binaries. La información que desarrollamos, reconstruimos y relevamos tiene como misión ser un insumo para el diseño e implementación de políticas públicas que garanticen nuestro derecho a vivir una vida libre de violencias." />
    </Head>
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <section name="main" className="flex-grow-1">
        <Component {...pageProps} />
      </section>
      <Footer />
    </div>
  </>
);

export default Application;
