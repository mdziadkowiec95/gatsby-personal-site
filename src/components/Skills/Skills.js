import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import * as Styled from './styles';
import SkillCard from '../SkillCard/SkillCard';

const Skills = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulSkills {
        nodes {
          id
          name
          progress
          details
          icon {
            svg {
              absolutePath
              content
              dataURI
              originalContent
              relativePath
            }
            file {
              contentType
              url
              fileName
              details {
                image {
                  width
                  height
                }
              }
            }
          }
        }
      }
    }
  `);
  const skillsData = data.allContentfulSkills.nodes;

  return (
    <Styled.Wrapper>
      {skillsData.map(skill => (
        <Styled.SkillItem key={skill.id}>
          <SkillCard
            name={skill.name}
            progress={skill.progress}
            details={skill.details}
            icon={skill.icon}
          />
        </Styled.SkillItem>
      ))}
    </Styled.Wrapper>
  );
};

export default Skills;
