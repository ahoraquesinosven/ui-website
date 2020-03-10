import Link from "next/link";

import 'bootstrap/dist/css/bootstrap.css';

const Application = ({Component, pageProps}) => (
  <div>
    <nav className='navbar navbar-dark bg-primary'>
      <div className='container'>
        <Link href='/'>
          <a className='navbar-brand'>Observatorio</a>
        </Link>
      </div>
    </nav>
    <div className='container'>
      <Component {...pageProps} />
    </div>
  </div>
);

export default Application;
