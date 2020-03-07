import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import * as Styled from './styles';

const SiteLogo = ({ withBg }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "site-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const {
    placeholderImage: {
      childImageSharp: { fluid },
    },
  } = data;

  return (
    <Styled.LogoLink to="/">
      <Styled.LogoImg withBg={withBg} fluid={fluid}></Styled.LogoImg>
    </Styled.LogoLink>
  );
};

SiteLogo.propTypes = {
  withBg: PropTypes.bool,
};

SiteLogo.defaultProps = {
  withBg: false,
};

export default SiteLogo;
