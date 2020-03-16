import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Container from '../../components/Container/Container';
import * as Styled from './styles';
import HeroBox from '../../components/HeroBox/HeroBox';
import SocialBar from '../../components/SocialBar/SocialBar';
import MouseIconSVG from '../../assets/images/icon-mouse.svg';

const HeroTemplate = () => {
  const getHeroPortraitImageSrc = () => {
    const data = useStaticQuery(graphql`
      query {
        placeholderImage: file(
          relativePath: { eq: "hero-portrait-narrow-lq.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `);
    return data.placeholderImage.childImageSharp.fluid;
  };

  return (
    <Styled.Wrapper>
      <Styled.PortraitImg fluid={getHeroPortraitImageSrc()} />
      <Container>
        <Styled.HeroInner>
          <HeroBox />
        </Styled.HeroInner>
        <Styled.MouseIcon href="#about">
          <MouseIconSVG />
        </Styled.MouseIcon>
      </Container>
      <SocialBar />
    </Styled.Wrapper>
  );
};

export default HeroTemplate;
