import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import * as Styled from './styles';
import Container from '../Container/Container';
import { getIconComponent } from '../../helpers/getIconComponent';

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulSocialsFooter(sort: { fields: order, order: ASC }) {
        nodes {
          id
          link
          icon
          order
        }
      }
    }
  `);

  const socialItems = data.allContentfulSocialsFooter.nodes;
  return (
    <Styled.Wrapper>
      <Container>
      <Styled.SocialWrap>
        {socialItems.map(social => (
          <Styled.SocialLink 
            key={social.id} 
            href={social.link} 
            target="_blank"
            rel="noopener noreferrer">
            {getIconComponent(social.icon)}
          </Styled.SocialLink>)
        )}
      </Styled.SocialWrap>
      <Styled.Copyright>© {new Date().getFullYear()}, Designed and coded by Michał Dziadkowiec</Styled.Copyright>
      </Container>
    </Styled.Wrapper>
  );
};

export default Footer;
