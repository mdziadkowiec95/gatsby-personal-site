import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Container from '../../components/Container/Container';
import * as Styled from './styles';

const getHeroPortraitImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "hero-portrait-narrow-lq.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return data.placeholderImage.childImageSharp.fluid;
};

const HeroTemplate = () => {
  const heroPortraitImgData = getHeroPortraitImage();

  return (
    <Styled.Wrapper>
      <Styled.PortraitImg fluid={heroPortraitImgData} />
      <Container>
        <Styled.HeroInner>
          <Styled.HeroBox>
            <Styled.HeadingWrap>
              <Styled.HeadingName>Hi, I&apos;m Michał.</Styled.HeadingName>
              <br />
              <Styled.HeadingRole>
                <Styled.PurpleAccent>Front-end</Styled.PurpleAccent> Developer
              </Styled.HeadingRole>
            </Styled.HeadingWrap>
          </Styled.HeroBox>
        </Styled.HeroInner>
      </Container>
    </Styled.Wrapper>
  );
};

export default HeroTemplate;
