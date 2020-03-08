import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import * as Styled from './styles';
import ProjectCard from '../ProjectCard/ProjectCard';

const Projects = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulProject {
        nodes {
          id
          name
          techStack
          description
          image {
            fluid {
              sizes
              src
              srcSet
            }
          }
        }
      }
    }
  `);

  const projectsData = [];
  const projectsDataOrg = data.allContentfulProject.nodes;

  projectsDataOrg.forEach(el => {
    for (let i = 0; i < 6; i += 1) {
      projectsData.push(el);
    }
  });

  return (
    <Styled.Wrapper>
      {projectsData &&
        projectsData.length > 0 &&
        projectsData.map(project => (
          <ProjectCard
            key={`${project.id}-${Math.random()}`}
            name={project.name}
            description={project.description}
            image={project.image}
          />
        ))}
    </Styled.Wrapper>
  );
};

export default Projects;
