import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import Header from '../../components/Header/Header';
import theme from '../../styles/theme';
import GlobalStyle from '../../styles/globalStyle';
import useSiteMetadata from '../../hooks/useSiteMetadata';
import Footer from '../../components/Footer/Footer';

const LayoutTemplate = ({ children }) => {
  const { title } = useSiteMetadata();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header siteTitle={title} />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
};

LayoutTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutTemplate;
