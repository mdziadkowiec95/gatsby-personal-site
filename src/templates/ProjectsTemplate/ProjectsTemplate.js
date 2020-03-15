import React from 'react';
import * as Styled from './styles';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import Container from '../../components/Container/Container';
import Projects from '../../components/Projects/Projects';

const ProjectsTemplate = () => {
  return (
    <Styled.Wrapper id="projects">
      <Container>
        <SectionHeading accent center>
          My <span>Projects</span>
        </SectionHeading>
        <Projects />
      </Container>
    </Styled.Wrapper>
  );
};

export default ProjectsTemplate;
