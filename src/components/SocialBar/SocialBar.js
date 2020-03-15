import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import * as Styled from './styles';
import GithubIconSvg from '../../assets/images/icons/github-rounded.svg';
import LinkedinIconSvg from '../../assets/images/icons/linkedin.svg';
import FacebookIconSvg from '../../assets/images/icons/facebook.svg';
import CodepenIconSvg from '../../assets/images/icons/codepen.svg';

const getIconComponnet = iconType => {
  const iconComponentMap = {
    github: GithubIconSvg,
    facebook: FacebookIconSvg,
    linkedin: LinkedinIconSvg,
    codepen: CodepenIconSvg,
  };

  const Icon = iconComponentMap[iconType];

  return Icon ? <Icon className="socialIcon" /> : null;
};

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
          {getIconComponnet(item.icon)}
        </Styled.Link>
      ))}
    </Styled.Wrapper>
  );
};

export default SocialBar;
