import Link from "next/link";

import 'bootstrap/dist/css/bootstrap.css';

const Header = () => (
  <nav className='navbar navbar-expand-lg sticky-top navbar-dark bg-primary'>
    <div className='container'>
      <Link href='/'>
        <a className='navbar-brand'>Observatorio</a>
      </Link>
      <Link href="./report">
        <a className="nav-item nav-link text-light">Informes</a>
      </Link>
      <Link href="./campaign">
        <a className="nav-item nav-link text-light">Campañas</a>
      </Link>
      <Link  href="./mediapresence">
        <a className="nav-item nav-link text-light">En Los Medios</a>
      </Link>
      <Link href="./activity">
        <a className="nav-item nav-link text-light">Actividades</a>
      </Link>
      <Link href="./about">
        <a className="nav-item nav-link text-light">Quiénes Somos</a>
      </Link>
   </div>
  </nav>
);

const Footer = () => (
  <footer className='container'>
    <strong>TODO</strong>: Implement this footer
  </footer>
);

const Application = ({Component, pageProps}) => (
  <>
    <Header />
    <section className='container'>
      <Component {...pageProps} />
    </section>
    <Footer />
  </>
);

export default Application;
