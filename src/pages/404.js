import * as React from 'react';
import Layout from '../components/Layout';
import Cta from '../components/Global/Cta/Cta';

const NotFoundPage = () => (
  <Layout>
    <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: 'inherit' }}>
      <h1>404: Page not found.</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>

      <Cta label="Back to home" isButton url="/" />
    </div>
  </Layout>
);

export default NotFoundPage;
