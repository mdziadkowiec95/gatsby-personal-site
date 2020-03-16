import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import * as Styled from './styles';
import ProjectCard from '../ProjectCard/ProjectCard';

const Projects = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulProject(sort: {order: ASC, fields: order}) {
        nodes {
          id
          name
          order
          techStack
          description
          siteLink
          repoLink
          image {
            fixed(width: 370) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  `);

  const projectsData = data.allContentfulProject.nodes;

  return (
    <Styled.Wrapper>
      {projectsData &&
        projectsData.length > 0 &&
        projectsData.map(project => (
          <ProjectCard
            key={`${project.id}-${Math.random()}`}
            name={project.name}
            description={project.description}
            techStack={project.techStack}
            siteLink={project.siteLink}
            repoLink={project.repoLink}
            image={project.image}
          />
        ))}
    </Styled.Wrapper>
  );
};

export default Projects;
