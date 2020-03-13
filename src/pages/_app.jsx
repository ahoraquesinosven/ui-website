import Link from "next/link";

import 'bootstrap/dist/css/bootstrap.css';

const Footer = () => (
  <footer className='container'>
    <strong>TODO</strong>: Implement this footer
  </footer>
);

const Application = ({Component, pageProps}) => (
  <>
    <nav className='navbar navbar-dark bg-primary'>
      <div className='container'>
        <Link href='/'>
          <a className='navbar-brand'>Observatorio</a>
        </Link>
      </div>
    </nav>
    <section className='container'>
      <Component {...pageProps} />
    </section>
    <Footer />
  </>
);

export default Application;
