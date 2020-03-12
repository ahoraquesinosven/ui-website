import Link from "next/link";

import 'bootstrap/dist/css/bootstrap.css';

const Footer = () => (
  <footer className='container'>
    <strong>TODO</strong>: Implement this footer
  </footer>
);

const Application = ({Component, pageProps}) => (
  <>
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
      <div className='container'>
        <Link href='/'>
          <a className='navbar-brand'>Observatorio</a>
        </Link>
        <a class="nav-item nav-link text-light" href="./report">Informes</a>
        <a class="nav-item nav-link text-light" href="./campaign">Campañas</a>
        <a class="nav-item nav-link text-light" href="./mediapresence">En Los Medios</a>
        <a class="nav-item nav-link text-light" href="./activity">Actividades</a>
        <a class="nav-item nav-link text-light" href="./about">Quiénes Somos</a>
     </div>
    </nav>
    <section className='container'>
      <Component {...pageProps} />
    </section>
    <Footer />
  </>
);

export default Application;
