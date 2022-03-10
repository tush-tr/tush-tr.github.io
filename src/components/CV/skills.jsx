import "./skills.css";
const Skills = () => {
  return (
    <div>
      <div className="resume-section skills">
        <h3 className="resume-section-title">Skills</h3>
        <div className="resume-section-content">
          <ul>
            <li>
              <b>Programming Languages: </b>
              <span className="skill-names">
                JavaScript, Golang, Python, C/C++
              </span>
            </li>
            <li>
              <b>Back-end: </b>
              <span className="skill-names">
                Node.js,Golang,microservice architectures.
              </span>
              <span className="skill-description">
                Developed and maintained several web app backends and APIs.
              </span>
            </li>
            <li>
              <b>Frontend: {" "}</b>
              <span className="skill-names">
                JavaScript, TypeScript, React(with hooks),Next.js.
              </span>
              <span className="skill-description">
                Worked on tens of frontend codebases.
              </span>
            </li>
            <li>
              <b> Databases: </b>
              <span className="skill-names">
                NoSQL databases(MongoDB), SQL databases(MySQL,PostgreSQL), Google Firestore, Google cloud Spanner
              </span>
            </li>
            <li>
              <b> Cross Platform: </b>
              <span className="skill-names"> React Native</span>
            </li>
            <li>
              <b>DevOps:</b>
              <span className="skill-names">
                {" "}
                Docker, Kubernetes, Terraform, Jenkins, Github Actions, Ansible,
                Chef, Helm.
              </span>
              <br />
              <span className="skill-description">
                hands-on experience on automating and optimizing critical
                deployments over a large infrastructure
              </span>
            </li>
            <li>
              <b> Cloud Service Providers (CSPs): </b>{" "}
              <span className="skill-names">
                Knowledge of whole <b>GCP</b> stack and experienced in
                configuring it. Familiar with AWS, Digital Ocean.
              </span>
            </li>
            <li>Open to evolving in: Dart, Flutter and many else.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Skills;
