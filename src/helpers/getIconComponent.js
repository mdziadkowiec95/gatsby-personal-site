import React from 'react';
import GithubIconSvg from '../assets/images/icons/github-rounded.svg';
import LinkedinIconSvg from '../assets/images/icons/linkedin.svg';
import FacebookIconSvg from '../assets/images/icons/facebook.svg';
import CodepenIconSvg from '../assets/images/icons/codepen.svg';

export const getIconComponent = iconType => {
    const iconComponentMap = {
      github: GithubIconSvg,
      facebook: FacebookIconSvg,
      linkedin: LinkedinIconSvg,
      codepen: CodepenIconSvg,
    };
  
    const Icon = iconComponentMap[iconType];
  
    return Icon ? <Icon className="socialIcon" /> : null;
  };