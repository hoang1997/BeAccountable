import 'bootstrap/dist/css/bootstrap.css'; 
import '../styles/globals.css'

import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import Layout from '../components/templates/Layout/Layout'

function BeAccountableApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    typeof document !== undefined ? require("bootstrap/dist/js/bootstrap") : null;
}, []);

  return (<Layout><Component {...pageProps} /></Layout>)
}

export default BeAccountableApp
