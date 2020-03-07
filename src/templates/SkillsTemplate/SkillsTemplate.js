import React from 'react';
import * as Styled from './styles';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import Container from '../../components/Container/Container';
import Skills from '../../components/Skills/Skills';

const SkillsTemplate = () => {
  return (
    <Styled.Wrapper>
      <Container>
        <SectionHeading reversed accent center>
          Check my <span>skills</span>
          <Skills />
        </SectionHeading>
      </Container>
    </Styled.Wrapper>
  );
};

export default SkillsTemplate;
