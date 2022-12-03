import HomeCard from "../../../UI/HomeCard";
import {SiGooglecloud } from "react-icons/si";
const Backend = () => {
  return (
    <HomeCard>
      <h2>
        <SiGooglecloud /> DevOps and Cloud / SRE
      </h2>
      <p>
        In DevOps and Cloud Engineering, my current stack involves Google Cloud Platform, AWS, Docker, Kubernetes, Terraform and other various cloud-native technologies related to them.
      </p>
      <div>
        What I can do for you at that side is:
        <ul>
          <li>Developing and maintaining automated CI/CD pipelines for code deployment using Github actions and Jenkins.</li>
          <li>
          Integrating Monitoring tools, Security Scanners with CI/CD pipelines.
          </li>
          <li>
          Automating and optimizing critical deployments over a large infrastructure.
          </li>
          <li>
            Managing and Automating scalable, robust and secure infrastructure, servers using Terraform.
          </li>
          <li>
          Building the platform with the knowledge of Kubernetes (container management solutions), CRDs, Operators, Docker, containers, CICD, public cloud platforms (AWS, Google Cloud Platform, etc).
          </li>
        </ul>
      </div>
    </HomeCard>
  );
};
export default Backend;
