import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Container from '../../components/Container/Container';
import * as Styled from './styles';
import HeroBox from '../../components/HeroBox/HeroBox';

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
          <HeroBox />
        </Styled.HeroInner>
        <a href="#about">
          <Styled.MouseIcon />
        </a>
      </Container>
    </Styled.Wrapper>
  );
};

export default HeroTemplate;
