import "./style.css";
import mypic from "../../../assets/mypic.jpeg";
const AboutMe = () => {
  return (
    <div className="about-me-section">
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
              DevOps Engineer at Amazon
            </span>
            . As my full-time job, I mostly work on automating and managing critical
            deployments and tasks over a large infrastructure.
          </p>
          <p className="about-me-section-para-3">
            I always will to contribute to open-source projects. I've published
            multiple open source projects including GcloudAct (A terraform
            module to automate the deployment and hosting process of your own
            runners on Google cloud to run jobs in your GitHub Actions
            workflows.) ,NosonDB (A JavaScript package for using json file as a
            database).
          </p>
          <div className="about-me-section-skills">
            Here are a few technologies I've been working with recently:
            <div className="about-me-section-skills-list-wrapper">
              <div>
                <ul>
                  <li>JavaScript (ES6+)</li>
                  <li>React</li>
                  <li>Node.js</li>
                  <li>Go</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>Docker</li>
                  <li>Kubernetes</li>
                  <li>AWS</li>
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
