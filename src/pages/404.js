import React from 'react';

import LayoutTemplate from '../templates/LayoutTemplate/LayoutTemplate';
import SEO from '../components/SEO/seo';

const NotFoundPage = () => (
  <LayoutTemplate>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </LayoutTemplate>
);

export default NotFoundPage;
