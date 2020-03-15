import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';

const ProjectCard = ({ name, description, siteLink, repoLink, image }) => {
  return (
    <Styled.Wrapper image={image}>
      <Styled.Label>HTML/CSS/JS/jQuery/Gulp</Styled.Label>
      <Styled.Body>
       {repoLink && <Styled.GithubLink 
          target="_blank"
          rel="noopener noreferrer"
          href={repoLink}>
          <Styled.GithubIcon />
        </Styled.GithubLink>}
        <Styled.Name>{name}</Styled.Name>
        <Styled.Description>{description}</Styled.Description>
        {siteLink && <Styled.VisitButton
          as="a"
          href={siteLink}
          target="_blank"
          rel="noopener noreferrer"
          secondary
        >
          Visit website
        </Styled.VisitButton>}
      </Styled.Body>
    </Styled.Wrapper>
  );
};

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  siteLink: PropTypes.string,
  repoLink: PropTypes.string,
  image: PropTypes.shape({
    fluid: PropTypes.object,
  }).isRequired,
};

ProjectCard.defaultProps = {
  siteLink: '',
  repoLink: ''
}

export default ProjectCard;
