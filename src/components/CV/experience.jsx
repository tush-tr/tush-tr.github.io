import "./experience.css";
const Experience = () => {
  return (
    <div className="resume-section experience-section">
      <h3 className="resume-section-title">Experience</h3>
      <div className=" cv-timeline-row p-experience h-event">
        <div className="cv-timeline-side">
          <div className="cv-timeline-company">HCL Technologies</div>
          <div className="cv-timeline-date">March 2021 - present</div>
          <a href="https://www.hcltech.com/" className="cv-timeline-website">
            hcltech.com
          </a>
        </div>
        <div className="cv-timeline-body p-summary">
          <h4 className="cv-timeline-position p-name">Software Engineer</h4>
          <p>
            Working on designing, developing features and automating the
            deployments{" "}
            <span
              className="tou-node"
              id="tou-0-a031136e-895b-4b25-b93b-883aedf72c83"
              lang="fr"
            />{" "}
            for our client products using Google Cloud Platform and DevOp,
            Cloud-Native technologies.
          </p>
          <ul>
            <li>
              Working on developing features in backend projects (node.js
              micro-service architecture), front-end (TypeScript, React) and
              DevOps (creating CI/CD pipelines for deployment of our client
              microservices to Google App Engine, Cloud Run, kubernetes on
              Google Cloud Platform)
            </li>
            <li>
              Developing and maintaining automated CI/CD pipelines for code
              deployment using Github actions and Jenkins.
            </li>
            <li>
              Working on automation builds, deployments, validations and configurations in the Google Cloud Platform environment.
            </li>
            <li>
              Provisioning infrastructure, servers of GCP and deploying features using Terraform.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Experience;
