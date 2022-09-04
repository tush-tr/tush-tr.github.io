import "./style.css";
import mypic from "../../../assets/mypic.jpeg";
const AboutMe = () => {
  return (
    <div
      className="about-me-section"
    >
      <h2>About Me</h2>
      <div className="about-me-section-inner-section">
        <div className="about-me-section-information-container">
          <p className="about-me-section-para-1">
            Hello! My name is Tushar and I'm a passionate Developer from India
            with a strong interest in Cloud-Native and blockchain technologies.
            I mostly work on backend development, automating and optimizing
            critical deployments using various development and Cloud-Native
            technologies.
          </p>
          <p className="about-me-section-para-2">
            Currently I'm working as a{" "}
            <span className="about-me-section-para-highlight">
              DevOps Engineer at HCL Technologies
            </span>
            . As my full-time job, I mostly work on automating critical
            deployments and tasks over a large infrastructure.
          </p>
          <p className="about-me-section-para-3">
            I also recently worked on a part-time freelance project. In that I
            built a full backend web application using Node.js, and automated
            the deployment to GCP.
          </p>
          <div className="about-me-section-skills">
            Here are a few technologies I've been working with recently:
            <div className="about-me-section-skills-list-wrapper">
              <div>
                <ul>
                  <li>JavaScript (ES6+)</li>
                  <li>React</li>
                  <li>Node.js</li>
                  <li>Next.js</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>Docker</li>
                  <li>Kubernetes</li>
                  <li>Google Cloud Platform</li>
                  <li>CI/CD</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="about-me-section-image-container">
          <img
            className="about-me-section-image-container-my-pic-image"
            src={mypic}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
