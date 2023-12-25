import { useState } from "react";
import ExperienceCard from "./ExperienceCard";
import ExperienceData from "./ExperienceText";
const experience = {
  amazon:(<ExperienceData>
    <h5>
        DevOps Engineer <span>@ Amazon</span>{" "}
      </h5>
      <h6 className="experience-time">Dec 2023 - present</h6>
      <h6>Tech:  AWS, CI/CD, Python, Docker.</h6>
      <ul>
        <li>
        Implementing continuous integration pipelines using AWS code pipeline and other tools to automate build, testing, and
deployment of applications across environments on AWS infrastructure, resulting in 40% increase in developer
productivity.
        </li>
        </ul>
  </ExperienceData>),
  hcl: (
    <ExperienceData>
      <h5>
        Software Engineer <span>@ HCL Tech</span>{" "}
      </h5>
      <h6 className="experience-time">March 2021 - dec 2023</h6>
      <h6>Tech:  Google Cloud Platform(GCP), Nodejs, JavaScript, TypeScript, Golang, Python, Terraform, Github Actions, Docker, Kubernetes.</h6>
      <ul>
        <li>
          Write modern, performant, maintainable code for client projects.
        </li>
        <li>
          Work with a variety of different languages, platforms, frameworks such
          as JavaScript, TypeScript, Google Cloud Platform, Docker, Terraform.
        </li>
        <li>
          Collaborated with 4+ development teams to gather requirements, design,
          and develop custom Node.js tools integrated with Terraform and Github
          Actions, resulting in a 40% reduction in manual data processing tasks
          and saving 20+ hours per week.
        </li>
        <li>
          Implemented continuous integration pipelines using GitHub Actions to
          automate build, testing, and deployment of applications across
          environments on Google Cloud Platform, resulting in 40% increase in
          developer productivity.
        </li>
        <li>
          Ensured continuous compliance with security and quality best practices
          using automated scan tools such as Blackduck and Sonar, resulting in a
          15% reduction in potential security vulnerabilities and code issues.
        </li>

        <li>
          Implemented infrastructure-as-code using Terraform and test cases for
          IAC code using terratest in Golang, resulting in a 30% decrease in
          deployment time and enabling scalable and reproducible infrastructure
          deployments on Google Cloud Platform.
        </li>

        <li>
          Implemented secure integration of Hashicorp Vault with Node.js backend
          applications and CI/CD pipelines, ensuring the secure retrieval of
          secrets during runtime using the Google Auth method/OIDC Auth
          method/Approle Auth method. Reduced potential security risks by 25%.
        </li>
        <li>
          Developed custom automation frameworks combining technologies such as
          Terraform, Node.js, and GitHub Actions, resulting in a 40% reduction
          in manual tasks and minimizing human errors. Notable examples include
          Cloud Schedulers Automation and Big Query Automation.
        </li>
        <li>
          Orchestrated the migration of 20+ applications from Google App Engine
          to Cloud Run and GKE by containerizing them using Docker and
          Kubernetes on GCP. This led to a 50% decrease in deployment overhead,
          seamless deployment, and efficient scaling of microservices, resulting
          in improved scalability and cost-effectiveness.
        </li>
        <li>
          Conducted knowledge-sharing sessions and provided technical guidance
          to team members, fostering a collaborative and learning-oriented work
          environment. Received positive feedback from team members, leading to
          a 15% increase in team productivity.
        </li>
      </ul>
    </ExperienceData>
  ),
  // qbh: (
  //   <ExperienceData>
  //     <h5>Freelance Backend Developer</h5>
  //     <ul>
  //       <li>Completed the full backend project using Node.js, MySQL DB</li>
  //       <li>Write modern, performant, maintainable code for the project.</li>
  //       <li>
  //         Implemented all APIs in an effective manner and following the REST API
  //         rules
  //       </li>
  //       <li>
  //         Wrote understandable documentation for APIs using Swagger Open API.
  //       </li>
  //       <li>
  //         Built CI/CD pipeline for automating deployment of the application
  //         using Github Actions
  //       </li>
  //       <li>
  //         Deployed frontend and backend applications to Google Cloud Platform
  //       </li>
  //       <li>
  //         Used Google Cloud Technologies within the project like, Google Cloud
  //         Storage, Google Cloud SQL, App Engine
  //       </li>
  //     </ul>
  //   </ExperienceData>
  // ),
};

const Experience = () => {
  const [experienceData, setExperienceData] = useState(experience.amazon);
  const [activeExperience, setActiveExperience] = useState("amazon");
  const selectHandler = (event) => {
    setExperienceData(experience[event.target.value]);
    setActiveExperience(event.target.value);
  };

  return (
    <ExperienceCard>
      <div className="experience-card__companies">
      <button
          onClick={selectHandler}
          className={activeExperience === "amazon" ? "activeExperience" : ""}
          value="amazon"
        >
          Amazon
        </button>
        <button
          onClick={selectHandler}
          className={activeExperience === "hcl" ? "activeExperience" : ""}
          value="hcl"
        >
          HCL Tech
        </button>
        
      </div>
      <div className="experience-card__data">
        <p>{experienceData}</p>
      </div>
    </ExperienceCard>
  );
};
export default Experience;
