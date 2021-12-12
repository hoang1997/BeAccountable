import '../styles/globals.css'
//import 'bootstrap/dist/css/bootstrap.min.css'
//import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import Layout from '../components/templates/Layout/Layout'

function BeAccountableApp({ Component, pageProps }: AppProps) {
  
  return (<Layout><Component {...pageProps} /></Layout>)
}

export default BeAccountableApp
