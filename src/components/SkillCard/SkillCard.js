import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';
import HtmlIconSVG from '../../assets/images/icon-html.svg';

const SkillCard = ({ name, minCardHeight }) => {
  const [isRotated, setIsRotated] = useState(false);

  return (
    <Styled.Wrapper
      onClick={() => setIsRotated(!isRotated)}
      minCardHeight={minCardHeight}
    >
      <Styled.Front isRotated={isRotated}>
        <p>{name}</p>
        <HtmlIconSVG />
      </Styled.Front>
      <Styled.Back isRotated={isRotated}>
        <p>{name} back</p>
        <HtmlIconSVG />
      </Styled.Back>
    </Styled.Wrapper>
  );
};

SkillCard.propTypes = {
  name: PropTypes.string.isRequired,
  minCardHeight: PropTypes.number,
};

SkillCard.defaultProps = {
  minCardHeight: 280,
};

export default SkillCard;
