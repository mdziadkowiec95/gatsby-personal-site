import React from 'react';

import LayoutTemplate from '../templates/LayoutTemplate/LayoutTemplate';
import SEO from '../components/SEO/seo';
import HeroTemplate from '../templates/HeroTemplate/HeroTemplate';
import AboutTemplate from '../templates/AboutTemplate/AboutTemplate';
import SkillsTemplate from '../templates/SkillsTemplate/SkillsTemplate';

const IndexPage = () => (
  <LayoutTemplate>
    <SEO title="Home" />
    <HeroTemplate />
    <AboutTemplate />
    <SkillsTemplate />
  </LayoutTemplate>
);

export default IndexPage;
