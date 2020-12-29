import React from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';

import Page from '../components/organisms/Page';

import '../components/atoms/nprogress.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const App = ({ Component, pageProps }) => (
  <Page>
    <Component {...pageProps} />
  </Page>
)

export default App;
