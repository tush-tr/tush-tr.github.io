import { useState } from "react";
import ExperienceCard from "./ExperienceCard";
import ExperienceData from "./ExperienceText";
const experience = {
  hcl: (
    <ExperienceData>
      <h5>
        Software Engineer <span>@HCL Tech</span>{" "}
      </h5>
      <h6 className="experience-time">March 2021 - present</h6>
      <ul>
        <li>
          Write modern, performant, maintainable code for client projects.
        </li>
        <li>
          Work with a variety of different languages, platforms, frameworks such
          as JavaScript, TypeScript, Google Cloud Platform, Docker, Terraform.
        </li>
        <li>
          Develop features and enhancements in backend projects (node.js
          micro-service architecture), front-end (TypeScript, React)
        </li>
        <li>
          Implement DevOps practices(creating CI/CD pipelines for deployment of
          our client microservices to Google App Engine, Cloud Run, kubernetes
          on Google Cloud Platform)
        </li>
        <li>
          Developing and maintaining automated CI/CD pipelines for code
          deployment using Github actions and Jenkins.
        </li>
        <li>
          Integrating Monitoring tools, Security Scanners with Github Actions
          workflows.
        </li>
        <li>
          Integrating Hashicorp Vault with Node.js applications, Google Cloud
          Platform(GCP) and Github Actions for managing secrets.
        </li>
        <li>
          Developed automation frameworks for managing Google Cloud(GCP)
          Infrastructure like Cloud Schedulers, Big Query views, scheduled
          queries using Terraform, Node.js and Github Actions
        </li>
        <li>
          Writing Dockerfiles and dockerizing node.js, React based applications
          for deploying to Google Cloud Run.
        </li>
        <li>
          Work on automation builds, deployments, validations and configurations
          in the Google Cloud Platform environment.
        </li>
        <li>
          Provisioning infrastructure, servers of GCP and deploying features
          using various IAC tools such as Terraform, Ansible.
        </li>
      </ul>
    </ExperienceData>
  ),
  qbh: (
    <ExperienceData>
      <h5>Freelance Backend Developer</h5>
      <ul>
        <li>Completed the full backend project using Node.js, MySQL DB</li>
        <li>Write modern, performant, maintainable code for the project.</li>
        <li>
          Implemented all APIs in an effective manner and following the REST API
          rules
        </li>
        <li>
          Wrote understandable documentation for APIs using Swagger Open API.
        </li>
        <li>
          Built CI/CD pipeline for automating deployment of the application
          using Github Actions
        </li>
        <li>
          Deployed frontend and backend applications to Google Cloud Platform
        </li>
        <li>
          Used Google Cloud Technologies within the project like, Google Cloud
          Storage, Google Cloud SQL, App Engine
        </li>
      </ul>
    </ExperienceData>
  ),
};

const Experience = () => {
  const [experienceData, setExperienceData] = useState(experience.hcl);
  const [activeExperience, setActiveExperience] = useState("hcl");
  const selectHandler = (event) => {
    setExperienceData(experience[event.target.value]);
    setActiveExperience(event.target.value);
  };

  return (
    <ExperienceCard>
      <div className="experience-card__companies">
        <button
          onClick={selectHandler}
          className={activeExperience === "hcl" ? "activeExperience" : ""}
          value="hcl"
        >
          HCL Tech
        </button>
        <button
          onClick={selectHandler}
          className={activeExperience === "qbh" ? "activeExperience" : ""}
          value="qbh"
        >
          QBH Soft
        </button>
      </div>
      <div className="experience-card__data">
        <p>{experienceData}</p>
      </div>
    </ExperienceCard>
  );
};
export default Experience;
