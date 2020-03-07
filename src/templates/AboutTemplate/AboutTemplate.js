import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import * as Styled from './styles';
import Container from '../../components/Container/Container';
import SectionHeading from '../../components/SectionHeading/SectionHeading';

const AboutTemplate = () => {
  const getAboutData = () => {
    const data = useStaticQuery(graphql`
      {
        allContentfulHomeAbout(limit: 1) {
          nodes {
            image {
              fluid(maxWidth: 590) {
                ...GatsbyContentfulFluid_noBase64
              }
            }
            description {
              description
            }
          }
        }
      }
    `);
    return data.allContentfulHomeAbout.nodes[0];
  };
  const data = getAboutData();

  return data ? (
    <Styled.Wrapper id="about">
      <Container>
        <SectionHeading accent>
          A few words <span>about me</span>
        </SectionHeading>
        <Styled.Inner>
          <Styled.Description>
            {data.description.description}
          </Styled.Description>
          <Styled.AboutImg
            fluid={data.image.fluid}
            imgStyle={{ height: 'auto' }}
          />
        </Styled.Inner>
      </Container>
    </Styled.Wrapper>
  ) : null;
};

export default AboutTemplate;
