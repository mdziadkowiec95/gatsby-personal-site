import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import * as Styled from './styles';
import { getIconComponent } from '../../helpers/getIconComponent';

const SocialBar = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulSocials(sort: { fields: order, order: ASC }) {
        nodes {
          id
          link
          icon
          order
        }
      }
    }
  `);

  const socialItems = data.allContentfulSocials.nodes;

  return (
    <Styled.Wrapper>
      {socialItems.map(item => (
        <Styled.Link
          key={item.id}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {getIconComponent(item.icon)}
        </Styled.Link>
      ))}
    </Styled.Wrapper>
  );
};

export default SocialBar;
