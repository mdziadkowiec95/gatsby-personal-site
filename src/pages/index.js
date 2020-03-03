import React from 'react';

import LayoutTemplate from '../templates/LayoutTemplate/LayoutTemplate';
import SEO from '../components/SEO/seo';
import HeroTemplate from '../templates/HeroTemplate/HeroTemplate';

const IndexPage = () => (
  <LayoutTemplate>
    <SEO title="Home" />
    <HeroTemplate />
  </LayoutTemplate>
);

export default IndexPage;
