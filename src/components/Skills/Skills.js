import React from 'react';
import * as Styled from './styles';
import SkillCard from '../SkillCard/SkillCard';

const DUMMY_SKILLS = [
  ...new Array(6).fill().map((el, i) => ({
    id: `${i}`,
    name: 'HTML',
    icon: null,
    progress: 100 - 10 * (i + 1),
  })),
];

const Skills = () => {
  return (
    <Styled.Wrapper>
      {DUMMY_SKILLS.map(skill => (
        <Styled.SkillItem key={skill.id}>
          <SkillCard name={skill.name} progress={skill.progress} />
        </Styled.SkillItem>
      ))}
    </Styled.Wrapper>
  );
};

export default Skills;
