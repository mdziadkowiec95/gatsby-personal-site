import React from 'react';
import * as Styled from './styles';
import Button from '../Button/Button';

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
      <Button>Check my skills</Button>
    </Styled.Wrapper>
  );
};

export default HeroBox;
