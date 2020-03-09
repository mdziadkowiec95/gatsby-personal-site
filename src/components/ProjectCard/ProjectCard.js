import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';

const ProjectCard = ({ name, description, image }) => {
  return (
    <Styled.Wrapper image={image}>
      <Styled.Label>HTML/CSS/JS/jQuery/Gulp</Styled.Label>
      <Styled.Body>
        <Styled.GithubLink href="#">
          <Styled.GithubIcon />
        </Styled.GithubLink>
        <Styled.Name>{name}</Styled.Name>
        <Styled.Description>{description}</Styled.Description>
        <Styled.VisitButton
          as="a"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          secondary
        >
          Visit website
        </Styled.VisitButton>
      </Styled.Body>
    </Styled.Wrapper>
  );
};

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.shape({
    fluid: PropTypes.object,
  }).isRequired,
};

export default ProjectCard;
