import React from 'react';
import * as Styled from './styles';

const HeroBox = () => {
  return (
    <Styled.Wrapper>
      <Styled.HeadingWrap>
        <Styled.HeadingName>Hi, I&apos;m Michał.</Styled.HeadingName>
        <br />
        <Styled.HeadingRole>
          <Styled.PurpleAccent>Front-end</Styled.PurpleAccent> Developer
        </Styled.HeadingRole>
      </Styled.HeadingWrap>
      <Styled.SkillsBtn as="a" href="#skills">
        Check my skills
      </Styled.SkillsBtn>
    </Styled.Wrapper>
  );
};

export default HeroBox;
