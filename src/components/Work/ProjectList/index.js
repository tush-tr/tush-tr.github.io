import Project from "../Project";
import list from "./list";
import Wrapper from "./Wrapper";
const Projects = () => {
  return (
    <Wrapper>
      
      {list.map(
        ({
          id,
          projectHeading,
          projectImage,
          aboutProject,
          github,
          live,
          technologies,
        }) => (
          <Project
            id={id}
            projectHeading={projectHeading}
            projectImage={projectImage}
            aboutProject={aboutProject}
            github={github}
            live={live}
            technologies={technologies}
          />
        )
      )}
    </Wrapper>
  );
};
export default Projects;
