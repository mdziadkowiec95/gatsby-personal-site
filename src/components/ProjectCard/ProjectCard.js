import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';
import Button from '../Button/Button';

const ProjectCard = ({ name, description, image }) => {
  return (
    <Styled.Wrapper image={image}>
      <Styled.Label>HTML/CSS/JS/jQuery/Gulp</Styled.Label>
      <Styled.Body>
        <Styled.Name>{name}</Styled.Name>
        <Styled.Description>{description}</Styled.Description>
        <Button as="a" secondary>
          Visit website
        </Button>
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
