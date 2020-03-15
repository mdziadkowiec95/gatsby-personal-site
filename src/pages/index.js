import React from 'react';

import LayoutTemplate from '../templates/LayoutTemplate/LayoutTemplate';
import SEO from '../components/SEO/seo';
import HeroTemplate from '../templates/HeroTemplate/HeroTemplate';
import AboutTemplate from '../templates/AboutTemplate/AboutTemplate';
import SkillsTemplate from '../templates/SkillsTemplate/SkillsTemplate';
import ProjectsTemplate from '../templates/ProjectsTemplate/ProjectsTemplate';
import ContactBox from '../components/ContactBox/ContactBox';

const IndexPage = () => (
  <LayoutTemplate>
    <SEO title="Michał Dziadkowiec" />
    <HeroTemplate />
    <AboutTemplate />
    <SkillsTemplate />
    <ProjectsTemplate />
    <ContactBox />
  </LayoutTemplate>
);

export default IndexPage;
