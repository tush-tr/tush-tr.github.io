import ProjectCard from "../../../UI/ProjectCard";
import Wrapper from "./wrapper";
import projectList from "./projectsList";
const Projects = () => {
  return (
    <Wrapper>
        <h2>Something I've built</h2>
      {projectList.map(
        ({
          id,
          projectHeading,
          projectImage,
          aboutProject,
          technologies,
          github,
          live,
        }) => (
          <ProjectCard
            id={id}
            projectHeading={projectHeading}
            projectImage={projectImage}
            aboutProject={aboutProject}
            technologies={technologies}
            github={github}
            live={live}
          />
        )
      )}
    </Wrapper>
  );
};
export default Projects;
