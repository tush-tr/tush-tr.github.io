import ProjectCard from "./Project";

import { FiGithub, FiExternalLink } from "react-icons/fi";
const Project = ({
  id,
  projectImage,
  projectHeading,
  aboutProject,
  technologies,
  github,
  live,
}) => {
  return (
    <ProjectCard id={id}>
      <div className="project_card__image-section">
        <img src={projectImage} alt="" />
      </div>
      <div className="project_card__info-section">
        <h2>{projectHeading}</h2>
        <p className="project_card__info-para">{aboutProject}</p>
        <div className="project_card_tech_links">
          <p className="project_card__techs">{technologies}</p>
          <div className="project_card__links">
            <a target="_blank" href={github} rel="noreferrer">
              <FiGithub />
            </a>
            <a href={live} target="_blank" rel="noreferrer">
              <FiExternalLink />
            </a>
          </div>
        </div>
      </div>
    </ProjectCard>
  );
};
export default Project;
