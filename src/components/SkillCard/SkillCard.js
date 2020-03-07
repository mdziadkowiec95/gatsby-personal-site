import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';

const SkillCard = ({ name, progress, details, icon, minCardHeight }) => {
  const [isRotated, setIsRotated] = useState(false);

  return (
    <Styled.Wrapper
      onClick={() => setIsRotated(!isRotated)}
      minCardHeight={minCardHeight}
    >
      <Styled.Front isRotated={isRotated}>
        <Styled.Name>{name}</Styled.Name>
        <img src={icon.file.url} alt={name} />
        {/* How to handle Inline SVG from contentfull ??? */}

        {/* <Styled.TechIcon
          style={{ width: '150px' }}
          svg={icon.svg}
          file={icon.file}
        /> */}
        <Styled.Progress progress={progress} />
      </Styled.Front>
      <Styled.Back isRotated={isRotated}>
        <Styled.List>
          {details.map(detail => (
            <Styled.ListItem key={detail}>
              <Styled.CheckIcon />
              {detail}
            </Styled.ListItem>
          ))}
        </Styled.List>
      </Styled.Back>
    </Styled.Wrapper>
  );
};

SkillCard.propTypes = {
  name: PropTypes.string.isRequired,
  minCardHeight: PropTypes.number,
  progress: PropTypes.number,
  details: PropTypes.arrayOf([PropTypes.string]),
  icon: PropTypes.shape({
    svg: PropTypes.object,
    file: PropTypes.object.isRequired,
  }),
};

SkillCard.defaultProps = {
  minCardHeight: 280,
  progress: 0,
  details: [],
  icon: null,
};

export default SkillCard;
