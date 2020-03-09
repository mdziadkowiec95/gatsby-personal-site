import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';
import ClickOutside from '../ClickOutside/ClickOutside';

const SkillCard = ({ name, progress, details, icon, minCardHeight }) => {
  const [isRotated, setIsRotated] = useState(false);

  return (
    <ClickOutside onClickOutside={() => setIsRotated(false)}>
      {({ containerRef }) => (
        <Styled.Wrapper
          onClick={() => setIsRotated(!isRotated)}
          minCardHeight={minCardHeight}
          ref={containerRef}
        >
          <Styled.Front isRotated={isRotated}>
            <Styled.Name>{name}</Styled.Name>
            <Styled.TechIcon src={icon.file.url} alt={name} />
            <Styled.Progress progress={progress} />
          </Styled.Front>
          <Styled.Back isRotated={isRotated}>
            <Styled.NameBack>{name}</Styled.NameBack>
            <Styled.List>
              {details &&
                details.length > 0 &&
                details.map(detail => (
                  <Styled.ListItem key={detail}>
                    <Styled.CheckIcon />
                    {detail}
                  </Styled.ListItem>
                ))}
            </Styled.List>
          </Styled.Back>
        </Styled.Wrapper>
      )}
    </ClickOutside>
  );
};

SkillCard.propTypes = {
  name: PropTypes.string.isRequired,
  minCardHeight: PropTypes.number,
  progress: PropTypes.number,
  details: PropTypes.arrayOf(PropTypes.string),
  icon: PropTypes.shape({
    svg: PropTypes.object,
    file: PropTypes.object.isRequired,
  }),
};

SkillCard.defaultProps = {
  minCardHeight: 250,
  progress: 0,
  details: [],
  icon: null,
};

export default SkillCard;
