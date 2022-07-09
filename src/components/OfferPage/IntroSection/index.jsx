import HomeCard from "../../../UI/HomeCard";
const IntroSection = () => {
  return (
    <HomeCard>
      <h5>
        A Full-Stack software engineer with a strong interest in Cloud-Native
        Technologies.
      </h5>

      <p>
        I have maintained and developed multiple projects from scratch, carrying
        the development of backend, frontend codebases and building automated
        CI/CD pipelines for deployment.
      </p>

      <p>
        My current toolset includes JavaScript & TypeScript (Node.js as well),
        Golang, Python, React, Redux, Kubernetes, Docker and all the other
        various frameworks, libraries and technologies related to them.
      </p>
      <div>
        <h6>I can help you with below sides of your project:</h6>
        <ul>
          <li>Developing/co-developing the back-end</li>
          <li>Developing/co-developing the front-end</li>
          <li>Developing/co-developing the Native Mobile App</li>
          <li>Setting up the CI/CD</li>
          <li>Infrastructure Automation</li>
        </ul>
      </div>
    </HomeCard>
  );
};

export default IntroSection;
