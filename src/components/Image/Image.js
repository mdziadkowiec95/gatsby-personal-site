import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

// Render inline SVG with fallback non-svg images
const Image = ({ svg, fluid, file, alt }) => {
  if (file.contentType === 'image/svg+xml') {
    if (svg && svg.content) {
      // Inlined SVGs
      return (
        <div
          style={{ width: '150px' }}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: svg.content }}
        />
      );
    }

    // SVGs that can/should not be inlined
    return <img src={file.url} alt={alt} />;
  }

  // Non SVG images
  return <Img fluid={fluid} alt={alt} />;
};

Image.propTypes = {
  svg: PropTypes.shape({
    content: PropTypes.string,
  }),
  fluid: PropTypes.shape({
    sizes: PropTypes.string,
    src: PropTypes.string,
    srcSet: PropTypes.string,
  }),
  file: PropTypes.shape({
    url: PropTypes.string,
    contentType: PropTypes.string,
  }),
  alt: PropTypes.string.isRequired,
};

Image.defaultProps = {
  svg: null,
  fluid: null,
  file: null,
};

export default Image;
