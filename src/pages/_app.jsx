import '@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/main.scss';
import { config } from '@fortawesome/fontawesome-svg-core';
import Header from '../components/index/header';
import Footer from '../components/index/footer';

config.autoAddCss = false;

const Application = ({ Component, pageProps }) => (
  <div className="d-flex flex-column min-vh-100">
    <Header />
    <section name="main" className="flex-grow-1">
      <Component {...pageProps} />
    </section>
    <Footer />
  </div>
);

export default Application;
